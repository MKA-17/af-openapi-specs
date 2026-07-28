export type { OpenAPISpec } from './types.js';
export { SPEC_SLUGS, SPECS, SPEC_CATEGORIES, SPECS_BY_CATEGORY } from './manifest.js';

import { SPECS, SPECS_BY_CATEGORY } from './manifest.js';
import type { OpenAPISpec } from './types.js';

export function getSpec(slug: string): OpenAPISpec | undefined {
  return SPECS[slug];
}

export function getSpecsByCategory(category: string): string[] {
  return SPECS_BY_CATEGORY[category] ?? [];
}
