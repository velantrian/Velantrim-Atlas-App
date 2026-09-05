import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildAtlasRoutingContract } from "./atlas-routing-contract-core.ts";

const projects = {
  schema_version: "0.1",
  status: "WORKING_NAVIGATION_CONTRACT",
  scope: "bounded core ecosystem routing",
  updated: "2026-09-05",
  authority: "navigation_only",
  projects: [
    {
      id: "unified-cognitive-architecture",
      name: "Unified",
      kind: "substrate-neutral cognitive architecture",
      scope: ["cognition"],
      primary_source: "unified-drive-current",
    },
    {
      id: "mentaury-soul",
      name: "Soul",
      kind: "owner-local cognition and identity domain",
      scope: ["beliefs", "identity"],
      primary_source: "soul-github",
    },
  ],
};

const routes = {
  schema_version: "0.1",
  status: "WORKING_NAVIGATION_CONTRACT",
  updated: "2026-09-05",
  authority: "navigation_only",
  default_rules: ["Ambiguous cognition queries must be disambiguated."],
  invariants: ["UNIFIED COGNITIVE ARCHITECTURE != MENTAURY SOUL"],
  routes: [
    {
      id: "substrate-neutral-cognition",
      destination: "unified-cognitive-architecture",
      intents: ["general cognition"],
    },
    {
      id: "soul-owner-domain",
      destination: "mentaury-soul",
      intents: ["beliefs", "identity"],
    },
  ],
  ambiguity_cases: [
    {
      query_shape: "How is cognition organized?",
      action: "disambiguate",
      options: ["unified-cognitive-architecture", "mentaury-soul"],
      rule: "General cognition routes to Unified; owner-local beliefs and identity route to Soul.",
    },
  ],
};

function build(routeDoc = routes, projectDoc = projects) {
  return buildAtlasRoutingContract(JSON.stringify(routeDoc), JSON.stringify(projectDoc));
}

describe("buildAtlasRoutingContract", () => {
  it("accepts a valid routing contract", () => {
    const result = build();
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.projectById["unified-cognitive-architecture"]?.name, "Unified");
    assert.equal(result.routes.length, 2);
  });

  it("fails closed on malformed JSON", () => {
    const result = buildAtlasRoutingContract("{not-json", JSON.stringify(projects));
    assert.equal(result.ok, false);
    assert.deepEqual(result.routes, []);
    assert.deepEqual(result.projects, []);
  });

  it("fails closed on duplicate route or project IDs", () => {
    const duplicateRoutes = structuredClone(routes);
    duplicateRoutes.routes.push({ ...duplicateRoutes.routes[0] });
    assert.equal(build(duplicateRoutes, projects).ok, false);

    const duplicateProjects = structuredClone(projects);
    duplicateProjects.projects.push({ ...duplicateProjects.projects[0] });
    assert.equal(build(routes, duplicateProjects).ok, false);
  });

  it("fails closed on an unknown route destination", () => {
    const changed = structuredClone(routes);
    changed.routes[1].destination = "missing-project";
    const result = build(changed, projects);
    assert.equal(result.ok, false);
  });

  it("rejects routing substrate-neutral cognition to Soul", () => {
    const changed = structuredClone(routes);
    changed.routes[0].destination = "mentaury-soul";
    const result = build(changed, projects);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.ok(result.errors.some((error) => error.includes("substrate-neutral cognition")));
  });

  it("rejects removal of explicit cognition disambiguation", () => {
    const changed = structuredClone(routes);
    changed.ambiguity_cases = [];
    const result = build(changed, projects);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.ok(result.errors.some((error) => error.includes("ambiguous cognition")));
  });
});
