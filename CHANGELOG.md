# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning is SemVer.

## [1.0.0] — 2026-09-23

Initial release of the Makeup Academy Manila website, rebuilt from the original
WordPress + Elementor site (`site-reference/`) as a static Astro site.

### Added
- **Astro 5 + Tailwind CSS v4** static site: 22 pages (home, classes index,
  11 course detail pages, schedule, student stories, industry highlights,
  about, contact, thank-you, privacy policy, website terms, 404).
- **Brand system retained from the reference**: wine/gold palette
  (`#3B001A`, `#C6A15B`, paper/surface neutrals) extracted from the original
  Elementor kit and encoded as Tailwind v4 `@theme` tokens in
  `src/styles/global.css`.
- **Self-hosted typefaces**: DM Serif Text (display) and Satoshi (body) as woff2 in
  `public/fonts/`, preloaded in `BaseLayout.astro` — no external font CDN.
- **Typed data layer** (`src/data/`): all 11 courses with real tuition,
  durations, levels, curricula, and outcomes carried over exactly from the
  academy's official 2026 course posters; verbatim deduplicated student
  reviews; industry/OJT highlights; founder credentials.
- **SEO**: per-page titles/descriptions, canonical URLs, Open Graph/Twitter
  cards, JSON-LD `EducationalOrganization` schema, `sitemap-index.xml`,
  `robots.txt`.
- **Accessibility**: semantic landmarks, skip link, keyboard-operable mobile
  menu (`aria-expanded`), visible focus rings, `prefers-reduced-motion`
  support, alt text on every image (verified across all routes).
- **Inquiry form** (front-end demo): validation, success/error states mirroring
  the original site's messaging.

### Changed
- Rebranded `package.json`, `astro.config.mjs` (`site` URL), `README.md`, and
  `robots.txt` from the Aria Lens starter template to Makeup Academy Manila.

### Removed
- All Aria Lens demo content: portfolio/journal/services pages, content
  collections, and unused starter components.

### Performance
- Zero client-side frameworks; interactions are small inline vanilla JS
  scripts (mobile menu, scroll reveal, form validation).
- Static build completes in ~1.7s; fonts are the only render-blocking
  requests, both local and preloaded.

### Verification
- `npm run check`: 0 errors, 0 warnings, 0 hints (27 files).
- `npm run build`: 22 pages built successfully.
- Visual inspection at 1440px and 375px on home, course detail, schedule,
  contact, and classes pages; no horizontal overflow at 375px.

### Notes for the next release
- The contact form needs a real submission endpoint (see PROJECT_STATUS.md).
- Student work gallery intentionally ships as an honest "coming soon" notice —
  photos are still being collected from recent cohorts.
