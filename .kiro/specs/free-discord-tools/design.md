# Design Document: FreeDiscordTools

## Overview

FreeDiscordTools is a statically generated marketing and utility website built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4. It launches with a single tool — the Discord Timestamp Generator — and is architected for incremental tool expansion. The site targets a Lighthouse 100 across all four categories, AdSense monetization compatibility, and WCAG 2.1 AA accessibility compliance.

The core design philosophy is **zero runtime dependencies at page load**: no external fonts, no analytics scripts, no CDN dependencies. Every page is pre-rendered to static HTML at build time and served from Cloudflare Pages' edge network.

Key design decisions:
- **SSG only** via `next export` (`output: 'export'`). No server-side rendering, no API routes.
- **Server Components by default**: only the timestamp calculator and copy-to-clipboard logic run as Client Components.
- **System fonts**: eliminates the single largest source of render-blocking and external requests.
- **Pre-reserved ad slots**: fixed `min-height` on ad containers before AdSense loads, keeping CLS < 0.1.
- **Data-driven tool catalog**: adding a new tool requires one entry in `src/data/tools.ts` and a new route directory — no layout changes.

---

## Architecture

### Directory Structure

```
free-discord-tools/
├── next.config.ts                  # output: 'export', image optimization off
├── wrangler.toml                   # Cloudflare Pages publish dir: out/
├── tsconfig.json                   # strict: true
├── tailwind.config.ts
├── package.json
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png                # 1200×630 default OG image
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: HTML shell, skip link, Header, Footer
│   │   ├── page.tsx                # Homepage (Server Component)
│   │   ├── tools/
│   │   │   ├── page.tsx            # Tools index (Server Component)
│   │   │   └── discord-timestamp-generator/
│   │   │       └── page.tsx        # Timestamp Generator page (Server Component shell)
│   │   ├── about/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── contact/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Server Component
│   │   │   ├── Footer.tsx          # Server Component
│   │   │   └── SkipLink.tsx        # Server Component
│   │   ├── tools/
│   │   │   ├── ToolCard.tsx        # Server Component
│   │   │   └── TimestampGenerator.tsx  # Client Component ('use client')
│   │   ├── ads/
│   │   │   └── AdSlot.tsx          # Client Component (Intersection Observer)
│   │   └── seo/
│   │       ├── JsonLd.tsx          # Server Component (generic JSON-LD injector)
│   │       ├── WebSiteSchema.tsx
│   │       ├── SoftwareAppSchema.tsx
│   │       ├── FaqSchema.tsx
│   │       └── BreadcrumbSchema.tsx
│   ├── config/
│   │   ├── ads.ts                  # Publisher ID, slot IDs
│   │   └── seo.ts                  # Site name, base URL, OG image
│   ├── data/
│   │   └── tools.ts                # Tool[] array — single source of truth
│   ├── lib/
│   │   └── timestamp.ts            # Pure timestamp calculation functions
│   └── types/
│       └── index.ts                # Tool interface and shared types
```

### Build and Deploy Pipeline

```
next build  →  out/  →  Cloudflare Pages (wrangler publish)
```

`next.config.ts` sets `output: 'export'` and disables the Next.js Image Optimization API (not available in static export; images are pre-optimized at authoring time).

### Rendering Strategy

| Route | Rendering | Client JS |
|---|---|---|
| `/` | Static HTML (Server Component) | AdSlot only |
| `/tools` | Static HTML (Server Component) | AdSlot only |
| `/tools/discord-timestamp-generator` | Static HTML shell + hydrated island | TimestampGenerator + AdSlot |
| `/about`, `/privacy-policy`, `/contact`, `/terms` | Static HTML (Server Component) | AdSlot only |

The "island" pattern is used for the timestamp tool: the page shell, heading, SEO content, and ad slots are all Server Components. Only the interactive calculator widget is a Client Component.

---

## Components and Interfaces

### Layout Components (Server)

**`Header`**
- Renders site logo text "FreeDiscordTools" (links to `/`)
- Renders `<nav>` with links: Tools, About, Contact
- Responsive: horizontal on ≥768px, stacked/hamburger on <768px (CSS-only, no JS)
- Uses `<header>` semantic element

**`Footer`**
- Renders links to: About, Privacy Policy, Contact, Terms
- Renders copyright notice
- Uses `<footer>` semantic element

**`SkipLink`**
- Visually hidden `<a href="#main-content">Skip to main content</a>`
- First focusable element in the DOM
- Becomes visible on keyboard focus (CSS `:focus` style)

### Tool Components

**`ToolCard` (Server Component)**
```typescript
interface ToolCardProps {
  tool: Tool;
}
```
Renders a card with tool name, description, and link. Purely presentational.

**`TimestampGenerator` (Client Component)**

The only substantive Client Component. Owns all interactive state:
- `date: string` — ISO date string, initialized to today
- `time: string` — HH:MM string, initialized to current local time
- `timezone: string` — IANA timezone, initialized from `Intl.DateTimeFormat().resolvedOptions().timeZone`
- `copyStates: Record<string, boolean>` — tracks which copy buttons show success indicator

Renders:
1. Three inputs: `<input type="date">`, `<input type="time">`, `<select>` for timezone
2. Computed Unix timestamp display
3. Seven output rows (one per Discord format), each with the syntax string, preview, and copy button

All computation is synchronous and pure, delegated to `src/lib/timestamp.ts`.

### Ad Components

**`AdSlot` (Client Component)**
```typescript
interface AdSlotProps {
  slotId: string;
  width: number;
  height: number;
  className?: string;
}
```
- Renders a `<div>` wrapper with `min-height` matching `height` prop (set inline style)
- Uses `IntersectionObserver` to detect when the slot enters the viewport
- Only injects the AdSense `<script>` and `<ins>` element after the slot becomes visible
- Falls back gracefully if `IntersectionObserver` is unavailable

### SEO Components (Server)

**`JsonLd`**
```typescript
interface JsonLdProps {
  data: Record<string, unknown>;
}
```
Renders a `<script type="application/ld+json">` tag with serialized JSON.

**`BreadcrumbSchema`**, **`FaqSchema`**, **`SoftwareAppSchema`**, **`WebSiteSchema`** each compose `JsonLd` with their respective structured data shapes.

---

## Data Models

### `Tool` Interface

```typescript
// src/types/index.ts
export interface Tool {
  slug: string;          // URL segment, e.g. 'discord-timestamp-generator'
  name: string;          // Display name, e.g. 'Discord Timestamp Generator'
  description: string;   // Short description for tool cards and meta
  href: string;          // Full path, e.g. '/tools/discord-timestamp-generator'
  keywords: string[];    // SEO keywords for this tool
}
```

### Tool Registry

```typescript
// src/data/tools.ts
export const tools: Tool[] = [
  {
    slug: 'discord-timestamp-generator',
    name: 'Discord Timestamp Generator',
    description: 'Convert any date and time into Discord timestamp formats instantly.',
    href: '/tools/discord-timestamp-generator',
    keywords: ['discord timestamp', 'discord time format', 'unix timestamp discord'],
  },
];
```

Adding a new tool: append one object to this array and create `src/app/tools/{slug}/page.tsx`.

### Discord Format Definitions

```typescript
// src/lib/timestamp.ts
export type DiscordFormatCode = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';

export interface DiscordFormat {
  code: DiscordFormatCode;
  name: string;           // e.g. 'Short Time'
  example: string;        // Static example output, e.g. '3:04 PM'
  intlOptions: Intl.DateTimeFormatOptions | null; // null for 'R' (relative)
}

export interface TimestampOutput {
  code: DiscordFormatCode;
  name: string;
  syntax: string;         // e.g. '<t:1234567890:t>'
  preview: string;        // Human-readable preview computed via Intl.DateTimeFormat
}
```

### AdSense Configuration

```typescript
// src/config/ads.ts
export const adsConfig = {
  publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  slots: {
    homepageBelowTitle:   'XXXXXXXXXX',
    homepageBelowGrid:    'XXXXXXXXXX',
    homepageContentMid:   'XXXXXXXXXX',
    homepageAboveFaq:     'XXXXXXXXXX',
    timestampBelowTitle:  'XXXXXXXXXX',
    timestampBelowTool:   'XXXXXXXXXX',
    timestampContentMid:  'XXXXXXXXXX',
    timestampAboveFaq:    'XXXXXXXXXX',
  },
} as const;
```

### SEO Configuration

```typescript
// src/config/seo.ts
export const seoConfig = {
  siteName: 'FreeDiscordTools',
  baseUrl: 'https://freediscordtools.com',
  defaultOgImage: '/og-image.png',
  twitterHandle: '@freediscordtools',
} as const;
```

### Timestamp Calculation

The core computation in `src/lib/timestamp.ts`:

```typescript
export function computeUnixTimestamp(
  date: string,       // 'YYYY-MM-DD'
  time: string,       // 'HH:MM'
  timezone: string,   // IANA timezone identifier
): number

export function computeTimestampOutputs(
  unixTimestamp: number,
  timezone: string,
): TimestampOutput[]

export function formatDiscordSyntax(
  unixTimestamp: number,
  code: DiscordFormatCode,
): string  // returns '<t:UNIX:CODE>'

export function getPreview(
  unixTimestamp: number,
  code: DiscordFormatCode,
  timezone: string,
): string  // returns human-readable string
```

`computeUnixTimestamp` uses the `Intl.DateTimeFormat` trick to convert a local date/time in a given IANA timezone to UTC milliseconds, then divides by 1000 and floors to get seconds.

---


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: AdSlot min-height matches height prop

*For any* height value (90, 250, or any positive integer) passed to the `AdSlot` component, the rendered wrapper `<div>` must have an inline `min-height` CSS value exactly equal to that prop value in pixels, regardless of whether the AdSense script has loaded.

**Validates: Requirements 2.7, 5.8, 8.2**

---

### Property 2: All images have explicit width and height attributes

*For any* `<img>` element rendered anywhere in the site, it must have both a `width` attribute and a `height` attribute with positive integer values. Decorative images must additionally have `alt=""`.

**Validates: Requirements 2.4, 9.2**

---

### Property 3: All pages have complete metadata

*For any* page in the site's route set, the exported Next.js `metadata` object must contain non-empty values for `title`, `description`, and `openGraph` (with `url`, `title`, `description`, `type`, `images`), plus a `alternates.canonical` field pointing to the page's absolute URL.

**Validates: Requirements 4.3, 4.7**

---

### Property 4: Every page contains exactly one h1 element

*For any* page rendered by the site, the resulting HTML must contain exactly one `<h1>` element.

**Validates: Requirements 4.9**

---

### Property 5: Every page includes WebSite JSON-LD

*For any* page in the site's route set, the rendered HTML head must contain a `<script type="application/ld+json">` block whose `@type` field equals `"WebSite"`.

**Validates: Requirements 4.4**

---

### Property 6: Every page has a main landmark

*For any* page rendered by the site, the resulting HTML must contain exactly one `<main>` element with `id="main-content"` to support the skip link.

**Validates: Requirements 9.5**

---

### Property 7: sitemap.xml contains all required URLs

*For any* build of the site, the generated `sitemap.xml` must contain exactly one `<url>` entry for each of the seven defined routes (`/`, `/tools`, `/tools/discord-timestamp-generator`, `/about`, `/privacy-policy`, `/contact`, `/terms`), each with an absolute canonical URL and a `<lastmod>` date.

**Validates: Requirements 4.2**

---

### Property 8: Tool grid renders one card per tool entry

*For any* array of `Tool` objects passed to the tool grid component, the number of rendered `ToolCard` elements must equal the length of that array, and each card must link to the `href` from its corresponding `Tool` entry.

**Validates: Requirements 5.4**

---

### Property 9: Timestamp computation is correct for all valid inputs

*For any* valid combination of date string (`YYYY-MM-DD`), time string (`HH:MM`), and IANA timezone identifier, `computeUnixTimestamp` must return a Unix timestamp (integer ≥ 0) such that interpreting that timestamp back in the given timezone produces the original date and time values.

This is a **round-trip property**: `interpretInTimezone(computeUnixTimestamp(date, time, tz), tz)` must equal `{date, time}`.

**Validates: Requirements 6.3**

---

### Property 10: All seven Discord syntax strings are correctly formatted

*For any* Unix timestamp value, `computeTimestampOutputs` must return exactly 7 `TimestampOutput` objects, one for each format code (`t`, `T`, `d`, `D`, `f`, `F`, `R`), where each `syntax` field matches the pattern `<t:UNIX:CODE>` with the correct timestamp integer and code character, and each `preview` field is a non-empty string.

**Validates: Requirements 6.5, 6.6**

---

### Property 11: Timezone selector contains all IANA timezones

*For any* execution environment, the timezone `<select>` options rendered by `TimestampGenerator` must include every string returned by `Intl.supportedValuesOf('timeZone')`. No timezone present in the Intl API should be absent from the selector.

**Validates: Requirements 6.10**

---

### Property 12: Copy button aria-labels identify their format

*For any* copy button rendered in `TimestampGenerator`, its `aria-label` attribute must be a non-empty string that includes the name of the Discord format it copies (e.g., "Copy short time format", "Copy long date format").

**Validates: Requirements 9.8**

---

### Property 13: Form inputs have associated labels

*For any* `<input>` or `<select>` element rendered within `TimestampGenerator`, there must exist a `<label>` element whose `htmlFor` attribute matches that input's `id` attribute, and the label must be non-empty.

**Validates: Requirements 9.3**

---

### Property 14: FAQPage JSON-LD matches page FAQ content

*For any* FAQ section rendered on the Timestamp Generator page, the `FAQPage` JSON-LD block in the page `<head>` must contain exactly the same number of `mainEntity` entries as there are FAQ items in the rendered section, and each entry's `name` must match the corresponding question text.

**Validates: Requirements 7.10**

---

### Property 15: No-index directives absent from public pages

*For any* public-facing page, the rendered HTML must not contain a `<meta name="robots">` tag with `noindex` or `nofollow` values.

**Validates: Requirements 4.10**

---

## Error Handling

### Timestamp Calculation Errors

**Invalid date/time inputs**: The `computeUnixTimestamp` function receives controlled inputs from `<input type="date">` and `<input type="time">` elements, which browsers validate natively. However, the function should defensively return `null` (and the UI should show an "invalid date" message) if the resulting `Date` object is `Invalid Date`.

**Timezone unavailable**: If the user's browser returns an unrecognized timezone from `Intl.DateTimeFormat().resolvedOptions().timeZone`, the component falls back to `'UTC'`.

**`Intl.supportedValuesOf` unavailable**: Some older browsers do not support this API. The timezone selector falls back to a hardcoded list of ~100 common IANA timezones if the API is unavailable.

### Clipboard Errors

**Clipboard API unavailable**: If `navigator.clipboard` is `undefined` or throws a `NotAllowedError`, the component falls back to `document.execCommand('copy')`. If both fail, the copy button shows an error indicator ("Copy failed") for 1500ms.

**No secure context**: `navigator.clipboard.writeText` requires HTTPS. In development (HTTP), the fallback path is taken automatically.

### AdSense Loading Errors

**AdSense script fails to load**: The `AdSlot` component's `IntersectionObserver` fires and injects the `<ins>` tag with the configured slot ID. If AdSense fails to fill the slot, the reserved `min-height` space remains, preserving layout but showing blank space. This is acceptable AdSense behavior.

**IntersectionObserver unavailable**: The component falls back to immediate loading (without lazy loading) to ensure ads are always attempted.

### Build Errors

All routes are statically defined. There are no dynamic segments, so `generateStaticParams` is not needed. `next build` failures are surfaced as TypeScript compile errors (`tsc --noEmit` catches these before build).

---

## Testing Strategy

### Dual Testing Approach

Both unit tests and property-based tests are required. They are complementary:
- **Unit tests** verify specific examples, integration behavior, edge cases, and error handling paths
- **Property-based tests** verify universal correctness across randomly generated inputs

### Property-Based Testing

**Library**: [fast-check](https://fast-check.dev/) for TypeScript/JavaScript. Do not implement PBT from scratch.

**Configuration**: Each property test runs a minimum of **100 iterations** (fast-check default is 100; set explicitly with `{ numRuns: 100 }`).

**Tag format** (comment above each test):
```
// Feature: free-discord-tools, Property N: <property text>
```

**Property test mapping**:

| Property | Test description | Arbitraries |
|---|---|---|
| P1: AdSlot min-height | Render AdSlot with random height, assert min-height style | `fc.integer({ min: 1, max: 1000 })` |
| P2: Image attributes | Check all img elements in rendered components have width/height | Component render + DOM query |
| P3: Page metadata completeness | For each route, assert all metadata fields present and non-empty | Enumerate routes |
| P4: Exactly one h1 | Render each page, count h1 elements | Enumerate routes |
| P5: WebSite JSON-LD present | Render each page head, find WebSite LD+JSON block | Enumerate routes |
| P6: Main landmark present | Render each page, assert exactly one `<main id="main-content">` | Enumerate routes |
| P7: sitemap.xml URL completeness | Parse sitemap, assert 7 URL entries with correct paths | Static analysis |
| P8: Tool grid card count | Render grid with random-length Tool array, count cards | `fc.array(fc.record({...}))` |
| P9: Timestamp round-trip | Generate random date/time/tz, compute, re-interpret | `fc.date()`, `fc.constantFrom(...timezones)` |
| P10: Discord syntax format | Generate random Unix timestamp, check all 7 outputs | `fc.integer({ min: 0, max: 2147483647 })` |
| P11: Timezone selector completeness | Render selector, assert all Intl timezones present | Static/render check |
| P12: Copy button aria-labels | Render generator, check all copy button aria-labels | Component render |
| P13: Form input labels | Render generator, assert each input has matching label | Component render |
| P14: FAQ JSON-LD matches content | Assert JSON-LD entry count equals rendered FAQ count | Component render |
| P15: No noindex on public pages | Assert no robots noindex meta on any route | Enumerate routes |

### Unit Testing

**Library**: [Vitest](https://vitest.dev/) with React Testing Library.

**Focus areas**:
- `computeUnixTimestamp`: specific known date/time/timezone combinations with expected Unix values
- `formatDiscordSyntax`: each of the 7 format codes with a known timestamp
- `getPreview`: verify output strings match `Intl.DateTimeFormat` for each format
- Copy button: mock `navigator.clipboard`, verify `writeText` called with correct syntax string
- Copy button: verify success indicator appears and disappears after 1500ms (using fake timers)
- Copy fallback: mock clipboard unavailable, verify `execCommand` called
- AdSlot: verify IntersectionObserver callback triggers script injection
- AdSlot: verify script not injected before intersection
- Timezone fallback: mock `Intl.supportedValuesOf` as unavailable, verify hardcoded list used
- Invalid date handling: pass invalid inputs to `computeUnixTimestamp`, verify `null` returned
- Build: `tsc --noEmit` run as part of CI

**Test file locations**: `src/__tests__/` mirroring the `src/` structure.

### Integration / E2E (Optional)

For Lighthouse 100 validation, a Playwright-based smoke test can run against the production build (`next build && npx serve out/`) and capture Lighthouse scores via `lighthouse` CLI. This is recommended as a CI gate before deployment but is outside the unit/property test suite.
