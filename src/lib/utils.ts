// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  knownIndustries,
  knownModules,
  knownRoles,
  knownSubModules,
  knownSystems,
} from "./sapMetadata";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStructureKey(parsed) {
  const parts = [];
  if (parsed.mainModule) parts.push("main-module");
  if (parsed.subModule) parts.push("sub-module");
  if (parsed.system) parts.push("system");
  if (parsed.industry) parts.push("industry");
  if (parsed.role) parts.push("role");
  return parts.join("+");
}

export function parseUrlSegments(segments: string[]) {
  const result = {
    mainModule: null,
    subModule: null,
    industry: null,
    role: null,
    system: null,
  };

  const usedSegments = new Set<string>();

  for (const segment of segments) {
    if (result.mainModule === null && knownModules.includes(segment)) {
      result.mainModule = segment;
      usedSegments.add(segment);
      continue;
    }
    if (result.system === null && knownSystems.includes(segment)) {
      result.system = segment;
      usedSegments.add(segment);
      continue;
    }
    if (result.industry === null && knownIndustries.includes(segment)) {
      result.industry = segment;
      usedSegments.add(segment);
      continue;
    }
    if (result.role === null && knownRoles.includes(segment)) {
      result.role = segment;
      usedSegments.add(segment);
      continue;
    }
    if (result.subModule === null && knownSubModules.includes(segment)) {
      result.subModule = segment;
      usedSegments.add(segment);
      continue;
    }
  }

  return result;
}
