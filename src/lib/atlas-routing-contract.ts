import routesRaw from "../../atlas/routes.json?raw";
import projectsRaw from "../../atlas/projects.json?raw";
import {
  buildAtlasRoutingContract,
  type AtlasAmbiguityCase,
  type AtlasContractProject,
  type AtlasContractRoute,
  type AtlasRoutingContract,
} from "./atlas-routing-contract-core";

export type { AtlasAmbiguityCase, AtlasContractProject, AtlasContractRoute, AtlasRoutingContract };

export const atlasRoutingContract = buildAtlasRoutingContract(routesRaw, projectsRaw);

export function getAtlasContractProject(id: string): AtlasContractProject | undefined {
  return atlasRoutingContract.ok ? atlasRoutingContract.projectById[id] : undefined;
}
