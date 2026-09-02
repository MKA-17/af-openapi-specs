# @apifreaks/openapi-specs

OpenAPI 3.1 specifications for all [APIFreaks](https://apifreaks.com) API products. Ships 104 production specs across 20 categories as typed JSON, importable as ESM, CJS, or raw JSON.

## Install

```bash
npm install @apifreaks/openapi-specs
```

## Usage

### Programmatic API

```ts
import {
  getSpec,
  getSpecsByCategory,
  SPEC_SLUGS,
  SPEC_CATEGORIES,
  SPECS_BY_CATEGORY,
} from "@apifreaks/openapi-specs";

// Get a single spec by slug
const spec = getSpec("ip-locator");

// Get all slugs in a category
const ipSlugs = getSpecsByCategory("ip-intelligence");

// All available slugs
console.log(SPEC_SLUGS); // ['ip-locator', 'dns-lookup', ...]

// All categories
console.log(SPEC_CATEGORIES); // ['currency', 'dns', 'ip-intelligence', ...]

// All slugs grouped by category
console.log(SPECS_BY_CATEGORY);
```

### Direct JSON import (tree-shakable)

```ts
import ipLocator from "@apifreaks/openapi-specs/specs/ip-intelligence/ip-locator.json";
```

### CommonJS

```js
const { getSpec, SPEC_SLUGS } = require("@apifreaks/openapi-specs");
```

## API

| Export                         | Type                                   | Description                                         |
| ------------------------------ | -------------------------------------- | --------------------------------------------------- |
| `getSpec(slug)`                | `(string) => OpenAPISpec \| undefined` | Returns the full spec object for a given slug       |
| `getSpecsByCategory(category)` | `(string) => string[]`                 | Returns all slugs in a category, or `[]` if unknown |
| `SPEC_SLUGS`                   | `string[]`                             | All 104 spec slugs                                  |
| `SPEC_CATEGORIES`              | `string[]`                             | All 20 category names                               |
| `SPECS`                        | `Record<string, OpenAPISpec>`          | Full spec objects keyed by slug                     |
| `SPECS_BY_CATEGORY`            | `Record<string, string[]>`             | Slugs grouped by category                           |

### Types

```ts
import type { OpenAPISpec } from "@apifreaks/openapi-specs";

// OpenAPISpec has: openapi, info, servers?, paths?, components?, [key: string]
```

## Categories

| Category           | Count | Description                                             |
| ------------------ | ----- | ------------------------------------------------------- |
| `billing`          | 1     | Usage and credits                                       |
| `commodity`        | 5     | Commodity prices, symbols, time series                  |
| `currency`         | 10    | Exchange rates, conversion, historical data             |
| `dns`              | 4     | DNS lookup, reverse DNS, history                        |
| `domain`           | 4     | Domain search, checker, subdomain lookup                |
| `email-validation` | 2     | Email verification and bulk validation                  |
| `financial`        | 8     | VAT rates, IBAN/SWIFT validation                        |
| `geocoding`        | 2     | Forward and reverse geocoding                           |
| `geography`        | 10    | Countries, cities, regions, flags, administrative units |
| `ip-intelligence`  | 4     | IP geolocation, threat intelligence, bulk lookup        |
| `pdf`              | 19    | PDF manipulation, conversion, encryption                |
| `phone-validation` | 2     | Phone number validation                                 |
| `scraper`          | 1     | Web scraping                                            |
| `screenshot`       | 2     | Website screenshots                                     |
| `ssl`              | 2     | SSL certificate lookup                                  |
| `timezone`         | 2     | Timezone lookup and conversion                          |
| `user-agent`       | 2     | User-agent parsing                                      |
| `weather`          | 9     | Current, forecast, historical, marine weather, astronomy |
| `whois`            | 6     | WHOIS lookup, ASN, reverse WHOIS                        |
| `zip-code`         | 7     | Zip code lookup, distance, radius search                |

## Development

```bash
# Install deps
npm install

# Generate manifest (auto-discovers specs/ and writes src/manifest.ts)
npm run generate

# Build (generate + tsup)
npm run build

# Typecheck
npm run typecheck

# Test
npm test
```

### Project structure

```
specs/               # OpenAPI 3.1 JSON files, organized by category
  currency/
    currency-converter.json
  ip-intelligence/
    ip-locator.json
  ...
src/
  index.ts           # Public API
  manifest.ts        # AUTO-GENERATED — do not edit manually
  types.ts           # OpenAPISpec type definition
scripts/
  generate-manifest.ts   # Reads specs/, writes src/manifest.ts
test/
  validate.test.ts   # Validates every spec is valid JSON + well-formed OpenAPI
```

### Adding a new spec

1. Add the `.json` file under the appropriate category in `specs/`
2. Run `npm run generate` to regenerate `src/manifest.ts`
3. Run `npm test` to validate
4. Run `npm run build` to rebuild the package

`src/manifest.ts` is auto-generated and must not be edited by hand.

## Publishing

The package is built automatically before publish via `prepublishOnly`.

```bash
npm publish --access public
```

The published package includes only `dist/` and `specs/`. Tests, scripts, and build configs are excluded.

## License

MIT
