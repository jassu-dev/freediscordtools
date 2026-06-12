# Tasks

## Task List

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Next.js 15 project with TypeScript and Tailwind CSS v4
  - [x] 1.2 Configure next.config.ts with output: 'export' and image optimization disabled
  - [x] 1.3 Configure tsconfig.json with strict mode enabled
  - [x] 1.4 Create wrangler.toml for Cloudflare Pages deployment
  - [x] 1.5 Create src/types/index.ts with Tool interface and shared types
  - [x] 1.6 Create src/config/ads.ts with publisher ID and slot ID placeholders
  - [x] 1.7 Create src/config/seo.ts with site name, base URL, and default OG image
  - [x] 1.8 Create src/data/tools.ts with the Tool array containing the Discord Timestamp Generator entry
  - [x] 1.9 Create public/robots.txt allowing all crawlers and referencing the sitemap
  - [x] 1.10 Create public/sitemap.xml listing all seven routes with canonical URLs and lastmod dates

- [x] 2. Layout components
  - [x] 2.1 Create src/components/layout/SkipLink.tsx as a visually hidden skip-to-main link
  - [x] 2.2 Create src/components/layout/Header.tsx with logo text and responsive navigation
  - [x] 2.3 Create src/components/layout/Footer.tsx with required links and copyright notice
  - [x] 2.4 Create src/app/layout.tsx as root layout with SkipLink, Header, main landmark, and Footer

- [x] 3. SEO components
  - [x] 3.1 Create src/components/seo/JsonLd.tsx as generic JSON-LD script injector
  - [x] 3.2 Create src/components/seo/WebSiteSchema.tsx
  - [x] 3.3 Create src/components/seo/BreadcrumbSchema.tsx
  - [x] 3.4 Create src/components/seo/FaqSchema.tsx
  - [x] 3.5 Create src/components/seo/SoftwareAppSchema.tsx

- [x] 4. Ad slot component
  - [x] 4.1 Create src/components/ads/AdSlot.tsx as a Client Component with IntersectionObserver lazy loading and fixed min-height

- [x] 5. Timestamp calculation library
  - [x] 5.1 Create src/lib/timestamp.ts with computeUnixTimestamp, computeTimestampOutputs, formatDiscordSyntax, and getPreview functions

- [x] 6. Discord Timestamp Generator tool component
  - [x] 6.1 Create src/components/tools/TimestampGenerator.tsx as a Client Component with date/time/timezone inputs
  - [x] 6.2 Implement live recomputation of all 7 Discord format outputs on any input change
  - [x] 6.3 Implement clipboard copy with navigator.clipboard and execCommand fallback
  - [x] 6.4 Implement 1500ms success indicator on copy buttons with descriptive aria-labels
  - [x] 6.5 Populate timezone selector from Intl.supportedValuesOf with hardcoded fallback
  - [x] 6.6 Initialize component with user's local date, time, and detected timezone

- [x] 7. Tool card component
  - [x] 7.1 Create src/components/tools/ToolCard.tsx as a Server Component

- [x] 8. App routes — static pages
  - [x] 8.1 Create src/app/page.tsx (Homepage) with h1, subtitle, tool grid, SEO content, FAQ section, and 4 ad slots
  - [x] 8.2 Create src/app/tools/page.tsx (Tools index) with tool grid and metadata
  - [x] 8.3 Create src/app/about/page.tsx with metadata
  - [x] 8.4 Create src/app/privacy-policy/page.tsx with metadata
  - [x] 8.5 Create src/app/contact/page.tsx with metadata
  - [x] 8.6 Create src/app/terms/page.tsx with metadata

- [x] 9. Discord Timestamp Generator page
  - [x] 9.1 Create src/app/tools/discord-timestamp-generator/page.tsx with metadata (title, description, canonical, OG, Twitter)
  - [x] 9.2 Add WebSite, SoftwareApplication, BreadcrumbList, and FAQPage JSON-LD blocks to the timestamp generator page
  - [x] 9.3 Add TimestampGenerator client component island to the page
  - [x] 9.4 Write "What Is A Discord Timestamp?" section (500+ words)
  - [x] 9.5 Write Discord Timestamp Formats reference table with all 7 format codes
  - [x] 9.6 Write "How To Use" step-by-step guide section
  - [x] 9.7 Write "Examples" section with 3+ real-world use cases
  - [x] 9.8 Write FAQ section with 15+ questions and answers
  - [x] 9.9 Add 4 ad slot placements to the timestamp generator page

- [x] 10. Homepage SEO content
  - [x] 10.1 Write 1200+ words of SEO body content on the homepage covering Discord utilities and timestamp formatting
  - [x] 10.2 Write FAQ section with 5+ questions and answers on the homepage
  - [x] 10.3 Add WebSite and BreadcrumbList JSON-LD blocks to the homepage

- [-] 11. Testing
  - [ ] 11.1 Set up Vitest and React Testing Library
  - [~] 11.2 Install fast-check for property-based testing
  - [~] 11.3 Write unit tests for computeUnixTimestamp with known date/time/timezone fixtures
  - [~] 11.4 Write unit tests for formatDiscordSyntax covering all 7 format codes
  - [~] 11.5 Write unit tests for getPreview covering all 7 format codes
  - [~] 11.6 Write unit test for copy button success/failure flow with mocked clipboard API
  - [~] 11.7 Write unit test for execCommand clipboard fallback
  - [~] 11.8 Write unit test for AdSlot IntersectionObserver lazy loading behavior
  - [~] 11.9 Write unit test for invalid date input returning null from computeUnixTimestamp
  - [~] 11.10 [PBT] Write property test for timestamp round-trip (P9: computeUnixTimestamp then re-interpret equals original date/time)
  - [~] 11.11 [PBT] Write property test for Discord syntax format correctness (P10: all 7 outputs have correct pattern and non-empty preview)
  - [~] 11.12 [PBT] Write property test for AdSlot min-height matches height prop (P1)
  - [~] 11.13 [PBT] Write property test for tool grid card count equals tools array length (P8)
  - [~] 11.14 [PBT] Write property test for form inputs having associated labels (P13)
  - [~] 11.15 [PBT] Write property test for copy button aria-labels containing format name (P12)
  - [~] 11.16 Write example tests for all 7 routes verifying exactly one h1 element (P4)
  - [~] 11.17 Write example tests for all 7 routes verifying main landmark presence (P6)
  - [~] 11.18 Write example tests for all 7 routes verifying WebSite JSON-LD present (P5)
  - [~] 11.19 Write example tests for all 7 routes verifying no noindex meta (P15)
  - [~] 11.20 Write example tests for metadata completeness on all 7 routes (P3)
  - [~] 11.21 Write example test for sitemap.xml containing all 7 required URLs (P7)
  - [~] 11.22 Write example test for FAQPage JSON-LD matching FAQ section content (P14)
  - [~] 11.23 Write example test for timezone selector containing all Intl timezones (P11)

- [ ] 12. Documentation
  - [~] 12.1 Create README.md with build instructions, Cloudflare Pages deployment steps, and AdSense configuration guide
