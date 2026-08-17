export type { OpenAPISpec } from "./types.js";
export {
  SPEC_SLUGS,
  SPECS,
  SPEC_CATEGORIES,
  SPECS_BY_CATEGORY,
  SpecSlug,
  SpecCategory,
} from "./manifest.js";
export type { SpecSlugValue, SpecCategoryValue } from "./manifest.js";

import { SPECS, SPECS_BY_CATEGORY } from "./manifest.js";
import type { OpenAPISpec } from "./types.js";
import type { SpecSlugValue, SpecCategoryValue } from "./manifest.js";

// `(string & {})` keeps autocomplete/compile-checking for known slugs via SpecSlug
// while still accepting arbitrary strings at the call site.
export function getSpec(
  slug: SpecSlugValue | (string & {}),
): OpenAPISpec | undefined {
  return SPECS[slug];
}

export function getSpecsByCategory(
  category: SpecCategoryValue | (string & {}),
): string[] {
  return SPECS_BY_CATEGORY[category] ?? [];
}
