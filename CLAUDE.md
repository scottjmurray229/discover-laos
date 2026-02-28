# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Discover Laos — a travel guide website built with Astro 5, Tailwind CSS 4, and deployed to Cloudflare Pages. Content is markdown-based using Astro's content collections with Zod schemas. Site domain: discoverlaos.info. CURRENT_SITE_ID = 'laos'.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner is configured. No linter is configured.

## Architecture

### Content Collections (`src/content/`)

Two collections with content in `src/content/destinations/` and `src/content/blog/`. Note: `src/content/config.ts` may not yet exist — regions are defined inline in destination frontmatter.
- **destinations** — Travel destination pages with typed schema (region: north/central/south, budgetPerDay object, highlights array, contentStatus workflow, gradientColors for per-destination theming)
- **blog** — Articles with categories (destination, food, festival, practical, budget, culture)

Both collections use a `draft: true` default. Content status tracks: draft → review → published → needs-update.

### Routing (`src/pages/`)

- `index.astro` — Home page
- `destinations/[...slug].astro` — Dynamic catch-all route, generates static pages from the destinations collection via `getStaticPaths()`
- `404.astro` — Custom error page

### Layouts

- `BaseLayout.astro` — Root layout with SEO meta (OG, Twitter cards, canonical URL), imports FloatingNav + Footer + global styles
- `DestinationLayout.astro` — Wraps BaseLayout, adds hero with per-destination gradient, quick facts bar, highlights section

### Components (`src/components/`)

- `FloatingNav.astro` — Dual navigation: mobile bottom tab bar (fixed) + desktop top nav bar. Active link detection via `Astro.url.pathname`.
- `Footer.astro` — 3-column grid with brand info, destination links, legal links

### Styling (`src/styles/global.css`)

Design system uses CSS custom properties for tokens:
- Colors: Ocean Teal `#0D7377` (primary), Warm Coral `#E8654A` (accent), Deep Night `#1A2332`, Sand `#F5F0E8` (bg)
- 8px spacing grid (`--space-1` through `--space-24`)
- Content width tokens: `--content-width-sm/md/lg/prose`
- Per-destination gradient custom properties
- Utility classes: `.container-content`, `.container-prose`, `.section-padding`, `.touch-target`
- Callout blocks: `.local-insight-callout` (cultural insights), `.scott-tips` (practical tips)

Tailwind is used for utility classes; global.css handles design tokens and base styles. Components use scoped `<style>` blocks.

### Deployment

Cloudflare Pages via `@astrojs/cloudflare` adapter. Config in `wrangler.jsonc`. Build output at `dist/` with worker at `dist/_worker.js/index.js`. Node.js compatibility enabled.

D1 Database: `trip-planner-cache-la` (ID: `122a8c9c-54cb-4180-adff-d86e6e24aa14`), binding: `DB`.

### Content Management

Front Matter CMS configured in `frontmatter.json` for visual editing of both content types with field definitions matching the Zod schemas.

## Design Documents

See @docs/design-system.md for colors (WCAG validated), typography, responsive grid, spacing tokens, and performance targets
See @docs/content-templates.md for page structure specifications (destination, festival, food, practical)
See @docs/component-reference.md for component build order, props, dependencies, schema markup, and full routing table
See @docs/destination-data.md for master destination list with tiers and cross-linking rules
See @docs/seo-geo-rules.md for SEO meta, schema markup, and GEO optimization tactics
See @docs/ai-trip-planner-spec.md for AI Trip Planner product spec

## Design Principles

1. Immersion First — Cinematic photography and video heroes dominate
2. Mobile-Native — Design starts at 375px. Touch targets 44px minimum.
3. Trust Through Specificity — No stock photography. Include specific dishes, real prices.
4. AI-Surface Ready — Quick Facts blocks, question-based headings, SpeakableSpecification schema

## Content Rules

- First-person SINGULAR voice: "I discovered...", "my first morning..."
- Scott is the sole author. No references to Jenice or any other person by name.
- **Names rule:** Only use "Scott" and "I" in content. Never include names of family members, children, or other travel companions. Use generic terms like "my group", "family" instead.
- All prices in both LAK and USD (e.g., "100,000 LAK ($5)")
- Cross-link every page to at least 2 other content pillars
- Question-based H2/H3 headings for GEO
- Answer-first paragraphs: lead with the answer, then supporting detail

### Laotian Destinations

9 destinations across Laos:

**North:** Luang Prabang, Nong Khiaw, Phonsavan
**Central:** Vang Vieng, Vientiane, Thakhek
**South:** 4000 Islands (Si Phan Don), Bolaven Plateau, Pakse

Regions: north, central, south

### Laotian Cultural Terms

Use Lao terms where appropriate: sabaidee (hello), khop chai (thank you), tuk-tuk (three-wheeled taxi), songthaew (shared truck taxi), kip (currency), sticky rice (khao niao, staple food), Baci ceremony (string-tying blessing), That Luang (national symbol), sin (traditional skirt), Beer Lao (national beer)

### Destination Page Completeness

Every destination page must include tourist recommendations alongside any off-the-beaten-path content provided by the user. Supplement where content is light:
- **Things to Do** — Named activities with entrance fees in LAK/USD
- **Where to Stay** — 3-5 specific hotels across budget ranges with nightly rates in LAK/USD
- **Where to Eat** — 4-6 specific restaurants with what they're known for and price per person
- **Festivals** — At least one local festival with month and brief description
- **Content Pillars** — Emphasize relevant pillar topics on every page: temples & Buddhism, cuisine, nature & adventure, history (Plain of Jars, French colonial), practical travel tips. Not every page needs all five, but include what's relevant.
- **Keep pages concise** — Don't let pages get too long. Tourist recommendations should be brief and factual (name, what it's known for, price), not multi-paragraph descriptions.

### Required Practical Sections (Every Destination Page)

Every destination page MUST include a "Scott's Pro Tips" block covering ALL of these topics (1-2 sentences each, brief and factual):

1. **Logistics & Getting There** — Directions from Vientiane, airport codes, Laos-China Railway connections, bus routes, slow boat options
2. **Best Time to Visit** — Dry vs wet season, burning season smoke (Feb-Apr), best months
3. **Getting Around** — Tuk-tuks, songthaews, scooter rental, bicycle rental, approximate costs in LAK
4. **Money & ATMs** — ATM availability (BCEL, Lao Development Bank), LAK/USD/THB acceptance, daily budget range
5. **Safety & Health** — UXO awareness in eastern provinces, tap water safety, nearest hospital (name it), malaria risk areas
6. **Packing Essentials** — Mosquito repellent, sunscreen, modest clothing for temples (shoulders/knees covered), rain jacket, sturdy sandals
7. **Local Culture & Etiquette** — Temple etiquette, monk interaction rules (women must not touch monks), Baci ceremony customs, removing shoes, tipping norms

Use `<div class="scott-tips">` block format. If a topic is already covered elsewhere on the page, a brief mention with cross-reference is sufficient.

### Required Email Capture (Every Page)

Every destination page and pillar page MUST include a destination/topic-specific EmailCapture component:
- **Destination pages**: `leadMagnet="Get My Free [Destination] Travel Guide"` with description and 4 specific bullets about what's in the guide
- **Pillar pages**: Topic-specific guide (e.g., "Laos Temple Trail Guide", "Mekong River Journey Planner", "Laos Visa & Border Crossing Guide") with relevant bullets
- Always include `guideTag` prop for subscriber segmentation (e.g., `destination-luang-prabang`, `pillar-temples`)
- Place between the CTA section and cross-links section

### Affiliate Tags

- Amazon: `discoverla-20`
- Booking.com: `label=discoverlaos`
- GetYourGuide: `cmp=discover-laos`
- 12Go Asia: `sub_id=discoverlaos-*`

## Build Priority

1. Blocker components in dependency order (see @docs/component-reference.md)
2. Luang Prabang as first complete destination page
3. Remaining Tier 1 destinations
4. AI Trip Planner MVP

## Video Tracking
See video-tracking/CLAUDE-CODE-INSTRUCTIONS.md for video inventory workflow.

## Master Plan Updates

After completing significant work (audits, content milestones, bug fix batches, deploys), update the **central master plan** at `C:\Users\scott\documents\discover-more\docs\master-plan.md`:
- Update the **Current Status table** row for this site
- Add a session log entry to `C:\Users\scott\documents\discover-more\docs\session-log.md` with date and summary
- Update **Conference Targets** table if metrics changed (page counts, destination counts, etc.)
