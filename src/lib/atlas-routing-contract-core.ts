import { z } from "zod";

const routeSchema = z.object({
  id: z.string().min(1),
  destination: z.string().min(1),
  intents: z.array(z.string().min(1)),
  negative_boundary: z.array(z.string().min(1)).optional(),
});

const ambiguitySchema = z.object({
  query_shape: z.string().min(1),
  action: z.literal("disambiguate"),
  options: z.array(z.string().min(1)).min(2),
  rule: z.string().min(1),
});

const routesDocumentSchema = z.object({
  schema_version: z.string().min(1),
  status: z.string().min(1),
  updated: z.string().min(1),
  authority: z.literal("navigation_only"),
  default_rules: z.array(z.string().min(1)),
  invariants: z.array(z.string().min(1)),
  routes: z.array(routeSchema).min(1),
  ambiguity_cases: z.array(ambiguitySchema),
});

const projectSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  kind: z.string().min(1),
  scope: z.array(z.string().min(1)),
  primary_source: z.string().min(1),
  human_readable_source: z.string().min(1).optional(),
  not: z.array(z.string().min(1)).optional(),
});

const projectsDocumentSchema = z.object({
  schema_version: z.string().min(1),
  status: z.string().min(1),
  scope: z.string().min(1),
  updated: z.string().min(1),
  authority: z.literal("navigation_only"),
  projects: z.array(projectSchema).min(1),
});

export type AtlasContractRoute = z.infer<typeof routeSchema>;
export type AtlasContractProject = z.infer<typeof projectSchema>;
export type AtlasAmbiguityCase = z.infer<typeof ambiguitySchema>;

export type AtlasRoutingContract =
  | {
      ok: true;
      schemaVersion: string;
      status: string;
      authority: "navigation_only";
      routes: AtlasContractRoute[];
      projects: AtlasContractProject[];
      projectById: Record<string, AtlasContractProject>;
      ambiguityCases: AtlasAmbiguityCase[];
      defaultRules: string[];
      invariants: string[];
      errors: [];
    }
  | {
      ok: false;
      schemaVersion: string | null;
      status: "INVALID_CONTRACT";
      authority: "navigation_only";
      routes: [];
      projects: [];
      projectById: Record<string, never>;
      ambiguityCases: [];
      defaultRules: [];
      invariants: [];
      errors: string[];
    };

function parseJson(raw: string, label: string): unknown {
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return { __atlas_parse_error__: `${label}: invalid JSON` };
  }
}

function unique(values: string[]) {
  return new Set(values).size === values.length;
}

export function buildAtlasRoutingContract(routesRaw: string, projectsRaw: string): AtlasRoutingContract {
  const routesResult = routesDocumentSchema.safeParse(parseJson(routesRaw, "atlas/routes.json"));
  const projectsResult = projectsDocumentSchema.safeParse(parseJson(projectsRaw, "atlas/projects.json"));
  const errors: string[] = [];

  if (!routesResult.success) {
    errors.push(...routesResult.error.issues.map((issue) => `routes: ${issue.path.join(".")} ${issue.message}`));
  }
  if (!projectsResult.success) {
    errors.push(...projectsResult.error.issues.map((issue) => `projects: ${issue.path.join(".")} ${issue.message}`));
  }

  if (!routesResult.success || !projectsResult.success) {
    return {
      ok: false,
      schemaVersion: null,
      status: "INVALID_CONTRACT",
      authority: "navigation_only",
      routes: [],
      projects: [],
      projectById: {},
      ambiguityCases: [],
      defaultRules: [],
      invariants: [],
      errors,
    };
  }

  const routes = routesResult.data.routes;
  const projects = projectsResult.data.projects;
  const routeIds = routes.map((route) => route.id);
  const projectIds = projects.map((project) => project.id);
  const projectById = Object.fromEntries(projects.map((project) => [project.id, project]));

  if (!unique(routeIds)) errors.push("routes: duplicate route id");
  if (!unique(projectIds)) errors.push("projects: duplicate project id");

  for (const route of routes) {
    if (!projectById[route.destination]) {
      errors.push(`routes: ${route.id} points to unknown destination ${route.destination}`);
    }
  }

  for (const ambiguity of routesResult.data.ambiguity_cases) {
    for (const option of ambiguity.options) {
      if (!projectById[option]) {
        errors.push(`ambiguity: ${ambiguity.query_shape} points to unknown option ${option}`);
      }
    }
  }

  const unifiedRoute = routes.find((route) => route.id === "substrate-neutral-cognition");
  const soulRoute = routes.find((route) => route.id === "soul-owner-domain");
  const cognitionAmbiguity = routesResult.data.ambiguity_cases.find((item) =>
    item.options.includes("unified-cognitive-architecture") && item.options.includes("mentaury-soul"),
  );

  if (unifiedRoute?.destination !== "unified-cognitive-architecture") {
    errors.push("semantic invariant: substrate-neutral cognition must route to unified-cognitive-architecture");
  }
  if (soulRoute?.destination !== "mentaury-soul") {
    errors.push("semantic invariant: soul-owner-domain must route to mentaury-soul");
  }
  if (!cognitionAmbiguity || cognitionAmbiguity.action !== "disambiguate") {
    errors.push("semantic invariant: ambiguous cognition must remain an explicit disambiguation case");
  }

  if (errors.length > 0) {
    return {
      ok: false,
      schemaVersion: routesResult.data.schema_version,
      status: "INVALID_CONTRACT",
      authority: "navigation_only",
      routes: [],
      projects: [],
      projectById: {},
      ambiguityCases: [],
      defaultRules: [],
      invariants: [],
      errors,
    };
  }

  return {
    ok: true,
    schemaVersion: routesResult.data.schema_version,
    status: routesResult.data.status,
    authority: routesResult.data.authority,
    routes,
    projects,
    projectById,
    ambiguityCases: routesResult.data.ambiguity_cases,
    defaultRules: routesResult.data.default_rules,
    invariants: routesResult.data.invariants,
    errors: [],
  };
}
