# Requirements Document

## Introduction

FreeDiscordTools is a production-ready, statically generated website providing free Discord utility tools. The primary goals are maximum Google SEO performance, perfect Core Web Vitals scores, AdSense compatibility, and mobile-first design. The site launches with a Discord Timestamp Generator tool and is architected for easy expansion with additional tools. Built on Next.js 15 App Router with TypeScript and Tailwind CSS v4, deployed on Cloudflare Pages with no database or authentication.

## Glossary

- **Site**: The FreeDiscordTools website as a whole
- **Page**: Any individual routable URL within the Site
- **Tool**: An interactive, client-side utility on the Site (e.g., Discord Timestamp Generator)
- **Tool_Component**: The React Client Component implementing a Tool's interactive UI
- **Timestamp_Generator**: The Discord Timestamp Generator Tool located at /tools/discord-timestamp-generator
- **Unix_Timestamp**: A 64-bit integer representing seconds elapsed since 1970-01-01T00:00:00 UTC
- **Discord_Format**: One of the seven Discord timestamp format codes: t, T, d, D, f, F, R
- **Discord_Syntax**: The `<t:UNIX:FORMAT>` string that Discord renders as a formatted time
- **Ad_Slot**: A reserved, fixed-height HTML container for a Google AdSense advertisement unit
- **CLS**: Cumulative Layout Shift — a Core Web Vitals metric measuring visual instability
- **LCP**: Largest Contentful Paint — a Core Web Vitals metric measuring loading performance
- **FID/INP**: First Input Delay / Interaction to Next Paint — interactivity Core Web Vitals metrics
- **SSG**: Static Site Generation — pages rendered to HTML at build time with no runtime server
- **JSON-LD**: JSON Linked Data format used for structured data markup consumed by search engines
- **Server_Component**: A Next.js React Server Component rendered at build time or on the server
- **Client_Component**: A Next.js React Client Component with interactivity rendered in the browser
- **System_Font_Stack**: CSS font-family referencing only fonts pre-installed on the operating system
- **Metadata_Module**: The Next.js `metadata` export object defining page-level SEO tags
- **Breadcrumb**: A structured navigation trail indicating the current page's position in the site hierarchy

---

## Requirements

### Requirement 1: Site Architecture and Static Generation

**User Story:** As a site owner, I want every page statically generated at build time, so that the site loads instantly, requires no server runtime, and is fully deployable to Cloudflare Pages.

#### Acceptance Criteria

1. THE Site SHALL export a `next.config.ts` with `output: 'export'` enabling full static HTML export.
2. THE Site SHALL include a `package.json` specifying Next.js 15, TypeScript, and Tailwind CSS v4 as dependencies with exact pinned versions.
3. THE Site SHALL include a Cloudflare Pages configuration (`wrangler.toml` or equivalent) specifying the static output directory as the publish target.
4. WHEN the build command (`next build`) is executed, THE Site SHALL produce a complete `out/` directory of static HTML, CSS, and JavaScript files without errors.
5. THE Site SHALL define routes for: `/` (Homepage), `/tools`, `/tools/discord-timestamp-generator`, `/about`, `/privacy-policy`, `/contact`, and `/terms`.
6. THE Site SHALL use Server_Components for all layout, navigation, footer, SEO metadata, and static content sections.
7. THE Site SHALL use Client_Components only for Tool interactive inputs, copy-to-clipboard logic, and timezone selection.
8. IF a page contains no interactive elements, THEN THE Site SHALL implement that page entirely as a Server_Component with zero client-side JavaScript hydration.

---

### Requirement 2: Performance and Core Web Vitals

**User Story:** As a user, I want the site to load in under one second and score 100 on Lighthouse, so that I have an excellent browsing experience and trust the quality of the tools.

#### Acceptance Criteria

1. THE Site SHALL use only System_Font_Stack values in CSS, with no external font loading from Google Fonts or any CDN.
2. THE Site SHALL make zero external HTTP requests at page load time, including analytics, tag managers, tracking pixels, and third-party scripts.
3. THE Site SHALL include no JavaScript animation libraries, component UI libraries, or carousel/slider dependencies.
4. THE Site SHALL serve all images in WebP or AVIF format, with explicit `width` and `height` attributes on every `<img>` element to prevent layout shift.
5. WHEN the browser loads any Page, THE Site SHALL render the above-the-fold content without requiring any render-blocking resources.
6. THE Site SHALL declare `rel="preload"` hints for any above-the-fold CSS or font assets referenced in the document `<head>`.
7. EVERY Ad_Slot SHALL have a fixed minimum height declared in CSS before AdSense scripts load, so that THE Site achieves a CLS score below 0.1.
8. THE Site SHALL lazy-load Ad_Slot containers using the `loading="lazy"` pattern or Intersection Observer so that Ad_Slot JavaScript does not block initial page render.
9. WHEN measured by Lighthouse in a production build, THE Site SHALL achieve a Performance score of 100, Accessibility score of 100, Best Practices score of 100, and SEO score of 100.

---

### Requirement 3: Mobile-First Responsive Design

**User Story:** As a mobile user, I want the site to be fully usable on my phone, so that I can generate Discord timestamps without needing a desktop.

#### Acceptance Criteria

1. THE Site SHALL implement all CSS layouts using a mobile-first approach, with base styles targeting small screens and responsive breakpoints expanding upward.
2. EVERY interactive element (button, input, select) SHALL have a minimum touch target size of 44×44 CSS pixels as specified by WCAG 2.5.5.
3. THE Site SHALL render a responsive header containing the logo text "FreeDiscordTools" and a navigation menu that collapses to a mobile-friendly layout on screens narrower than 768px.
4. THE Site SHALL render a footer on every Page containing links to: About, Privacy Policy, Contact, Terms, and a copyright notice.
5. WHEN the viewport width is below 768px, THE Timestamp_Generator tool inputs SHALL stack vertically in a single column.
6. THE Site SHALL apply a dark-mode color scheme by default, with a light-mode alternative applied when the user's OS preference is `prefers-color-scheme: light`.
7. THE Site SHALL use Discord-inspired colors: Blurple (#5865F2) as the primary brand color, dark backgrounds (#2C2F33, #23272A) in dark mode, and light backgrounds (#FFFFFF, #F2F3F5) in light mode.
8. THE Site SHALL not include carousels, sliders, background videos, large SVG illustrations, modal overlays, or sticky/popup advertisement units.

---

### Requirement 4: SEO Infrastructure

**User Story:** As a site owner, I want every page to have complete SEO metadata and structured data, so that Google can index, rank, and display rich results for the site.

#### Acceptance Criteria

1. THE Site SHALL generate a `/robots.txt` file allowing all crawlers and referencing the sitemap URL.
2. THE Site SHALL generate a `/sitemap.xml` file listing all seven static Page URLs with their canonical absolute URLs and `lastmod` dates.
3. EVERY Page SHALL export a Next.js Metadata_Module containing: `title`, `description`, `canonical` URL, Open Graph `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, Twitter `twitter:card`, `twitter:title`, `twitter:description`.
4. EVERY Page SHALL include a JSON-LD `WebSite` structured data block in the document `<head>`.
5. THE Timestamp_Generator page SHALL include JSON-LD structured data blocks for: `SoftwareApplication`, `FAQPage`, and `BreadcrumbList`.
6. THE Homepage SHALL include a JSON-LD `BreadcrumbList` structured data block.
7. EVERY Page SHALL include a `<link rel="canonical">` tag pointing to the page's own absolute URL.
8. THE Site SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<h1>`–`<h6>`) correctly throughout all Pages.
9. EVERY Page SHALL contain exactly one `<h1>` element.
10. THE Site SHALL not use any `noindex` or `nofollow` directives on public-facing pages.

---

### Requirement 5: Homepage Content

**User Story:** As a first-time visitor, I want to see a clear overview of available tools and educational content about Discord utilities, so that I understand the site's value and find the tool I need quickly.

#### Acceptance Criteria

1. THE Homepage SHALL render an `<h1>` containing exactly the text "Free Discord Tools".
2. THE Homepage SHALL render a subtitle paragraph containing the text "Free Discord utilities for Discord users, server owners, moderators, and developers."
3. THE Homepage SHALL render a tool grid containing a card for the Discord Timestamp Generator, linking to `/tools/discord-timestamp-generator`.
4. THE Homepage tool grid SHALL be implemented so that additional tool cards can be added by inserting new entries into a data array without modifying layout components.
5. THE Homepage SHALL contain at least 1200 words of unique SEO body content covering Discord utilities, timestamp formatting, server management, and related topics.
6. THE Homepage SHALL include a Frequently Asked Questions section with at least 5 questions and answers about Discord tools.
7. THE Homepage SHALL render Ad_Slot containers in the following positions: below the page title, below the tool grid, in the middle of the SEO content, and above the FAQ section.
8. EVERY Ad_Slot on the Homepage SHALL have a declared minimum height of 90px for banner units or 250px for rectangle units in CSS before any AdSense script loads.

---

### Requirement 6: Discord Timestamp Generator Tool

**User Story:** As a Discord user, I want to convert any date and time into all Discord timestamp formats, so that I can paste the correct syntax into my messages and have Discord display it correctly for every reader's local timezone.

#### Acceptance Criteria

1. THE Timestamp_Generator SHALL render an `<h1>` containing exactly the text "Discord Timestamp Generator".
2. THE Timestamp_Generator SHALL provide a date input, a time input, and a timezone selector as the tool's three primary inputs.
3. WHEN the user changes any input value, THE Timestamp_Generator SHALL immediately recompute the Unix_Timestamp and all seven Discord_Format outputs without any API call or page navigation.
4. THE Timestamp_Generator SHALL display the computed Unix_Timestamp value in a readable output field.
5. THE Timestamp_Generator SHALL display all seven Discord_Syntax strings: `<t:UNIX:t>`, `<t:UNIX:T>`, `<t:UNIX:d>`, `<t:UNIX:D>`, `<t:UNIX:f>`, `<t:UNIX:F>`, `<t:UNIX:R>` where UNIX is the computed Unix_Timestamp.
6. THE Timestamp_Generator SHALL display a human-readable preview next to each Discord_Syntax showing how Discord renders that format (e.g., "3:04 PM", "March 1, 2025", "in 2 hours").
7. WHEN the user clicks the copy button for any output, THE Timestamp_Generator SHALL copy that output's Discord_Syntax string to the system clipboard.
8. WHEN a copy action succeeds, THE Timestamp_Generator SHALL display a visible success indicator on the corresponding copy button for at least 1500ms before reverting.
9. IF the user's browser does not support the Clipboard API, THEN THE Timestamp_Generator SHALL fall back to the `document.execCommand('copy')` method.
10. THE Timestamp_Generator timezone selector SHALL include all IANA timezone identifiers available in the browser's `Intl.supportedValuesOf('timeZone')` API.
11. THE Timestamp_Generator SHALL initialize with the user's local date, local time, and local timezone detected from the browser on first render.
12. EVERY interactive element in THE Timestamp_Generator SHALL be fully keyboard accessible and focusable, meeting WCAG 2.1 Level AA keyboard navigation requirements.
13. THE Timestamp_Generator SHALL perform all timestamp calculations entirely client-side with zero network requests.

---

### Requirement 7: Timestamp Generator SEO Content

**User Story:** As a site owner, I want the Timestamp Generator page to rank for "discord timestamp generator" and related keywords, so that organic search traffic finds the tool.

#### Acceptance Criteria

1. THE Timestamp_Generator page SHALL have an SEO `<title>` of "Discord Timestamp Generator – Free Discord Time Converter".
2. THE Timestamp_Generator page SHALL have a meta description of "Generate Discord timestamps instantly. Convert dates and times into Discord timestamp formats and copy them with one click."
3. THE Timestamp_Generator page SHALL contain a "What Is A Discord Timestamp?" section with at least 500 words of original explanatory content.
4. THE Timestamp_Generator page SHALL contain a Discord Timestamp Formats reference table listing all seven format codes (t, T, d, D, f, F, R) with their names and example outputs.
5. THE Timestamp_Generator page SHALL contain a "How To Use" step-by-step guide section.
6. THE Timestamp_Generator page SHALL contain a "Examples" section with at least 3 real-world use case examples.
7. THE Timestamp_Generator page SHALL contain a FAQ section with at least 15 questions and answers covering common Discord timestamp questions.
8. THE Timestamp_Generator page SHALL render Ad_Slot containers in the following positions: below the page title, below the tool section, in the middle of content, and above the FAQ section.
9. THE Timestamp_Generator page SHALL include a `BreadcrumbList` JSON-LD block representing the path: Home → Tools → Discord Timestamp Generator.
10. THE Timestamp_Generator page SHALL include a `FAQPage` JSON-LD block containing all FAQ questions and answers from the FAQ section.

---

### Requirement 8: AdSense Compatibility

**User Story:** As a site owner, I want AdSense ad slots correctly implemented throughout the site, so that I can monetize the site's traffic without violating AdSense policies or degrading user experience.

#### Acceptance Criteria

1. THE Site SHALL implement Ad_Slot containers as reusable React components accepting `slotId`, `width`, and `height` props.
2. EVERY Ad_Slot component SHALL render a `<div>` wrapper with an explicit `min-height` CSS value matching the expected ad unit size, set before the AdSense script loads.
3. THE Site SHALL not render more than 3 Ad_Slots in the visible viewport simultaneously on any single Page.
4. THE Site SHALL not implement sticky ad units, popup ad units, interstitial ads, or any ad placement that obscures content.
5. WHEN an Ad_Slot is outside the user's viewport, THE Site SHALL defer loading the AdSense script for that slot using Intersection Observer.
6. THE Site SHALL include an AdSense publisher ID placeholder (e.g., `ca-pub-XXXXXXXXXXXXXXXX`) in a single configuration constant that can be updated in one location to apply site-wide.
7. THE Site SHALL include ad slot ID placeholders for each of the four Ad_Slot positions that can be configured per-page.

---

### Requirement 9: Accessibility

**User Story:** As a user with assistive technology, I want the entire site to be navigable and usable, so that screen readers, keyboard users, and users with visual impairments can access all tools and content.

#### Acceptance Criteria

1. THE Site SHALL achieve a WCAG 2.1 Level AA conformance across all Pages.
2. EVERY image on THE Site SHALL have a non-empty, descriptive `alt` attribute; decorative images SHALL use `alt=""`.
3. EVERY form input in THE Timestamp_Generator SHALL have an associated `<label>` element linked via `htmlFor`/`id` attributes.
4. THE Site's color contrast SHALL meet a minimum ratio of 4.5:1 for normal text and 3:1 for large text against their backgrounds, as specified by WCAG 1.4.3.
5. THE Site SHALL include a `<main>` landmark on every Page so screen readers can skip directly to main content.
6. THE Site SHALL include a visually hidden "Skip to main content" link as the first focusable element on every Page.
7. WHEN interactive elements receive keyboard focus, THE Site SHALL display a visible focus indicator with sufficient contrast.
8. THE Timestamp_Generator copy buttons SHALL have descriptive `aria-label` attributes identifying which format is being copied (e.g., "Copy short time format").

---

### Requirement 10: Code Quality and Maintainability

**User Story:** As a developer, I want the codebase to be fully typed, modular, and documented, so that I can add new Discord tools quickly without breaking existing functionality.

#### Acceptance Criteria

1. THE Site SHALL use TypeScript throughout with `strict` mode enabled in `tsconfig.json` and zero `any` type assertions.
2. THE Site SHALL define a `Tool` TypeScript interface containing at minimum: `slug`, `name`, `description`, `href`, and `keywords` fields, used by the homepage tool grid and tools index page.
3. THE Site SHALL store all tool metadata in a single `src/data/tools.ts` file so that adding a new tool requires only adding one entry to that file.
4. THE Site SHALL organize components into: `src/components/layout/` for Header, Footer, and Navigation; `src/components/tools/` for Tool_Components; `src/components/ads/` for Ad_Slot; `src/components/seo/` for JSON-LD components.
5. THE Site SHALL define all AdSense configuration (publisher ID, slot IDs) in a single `src/config/ads.ts` file.
6. THE Site SHALL define all site-wide SEO defaults (site name, base URL, default OG image) in a single `src/config/seo.ts` file.
7. EVERY TypeScript source file SHALL pass `tsc --noEmit` with zero errors.
8. THE Site SHALL include a `README.md` with build instructions, Cloudflare Pages deployment steps, and AdSense configuration guide.
