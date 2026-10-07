# Project Status — Makeup Academy Manila Website

**Last updated:** 2026-09-23
**Version:** 1.0.0 (initial release)
**Stack:** Astro 5 · Tailwind CSS v4 · static output · zero client frameworks

---

## Where the project stands

The site is **feature-complete for launch as a static brochure site**. All 22
pages are built, content is carried over exactly from the original WordPress
site's copy (`site-reference/`), and the brand system (wine/gold palette,
DM Serif Text + Satoshi) is retained from the original Elementor kit.

## Verification status (as of 2026-09-23)

| Check | Result |
|---|---|
| `npm run check` | ✅ 0 errors / 0 warnings / 0 hints |
| `npm run build` | ✅ 22 pages, ~1.7s |
| Route sweep (13 key routes) | ✅ all 200, unique titles, H1 present, 404 works |
| Images without alt text | ✅ 0 across all routes |
| Horizontal overflow @ 375px | ✅ none |
| Visual inspection 1440px + 375px | ✅ home, course detail, schedule, contact, classes |

## What works

- Full class catalog: 11 courses with real tuition (PHP 7,500–50,000),
  durations, levels, curricula, related-course cross-links.
- Course detail template with sticky price card, numbered curriculum ledger,
  standard inclusions, and full course-details section.
- Rolling-schedule page with all-courses-at-a-glance ledger.
- Student stories with verbatim reviews and the honest-results statement.
- Industry highlights, about/Faye Young credentials, legal pages (real copy).
- Inquiry form with validation + success/error states (front-end only).
- Self-hosted fonts, preloaded; scroll-reveal respects reduced motion.

## Known gaps / next steps

Priority order:

1. **Wire the inquiry form to a real endpoint** — currently a front-end demo
   (`src/components/InquiryForm.astro`). Options: Formspree, Supabase, or a
   small serverless function. Success/error copy already matches the original
   site's messaging.
2. **Confirm the production domain** — `astro.config.mjs` and
   `public/robots.txt` point at `https://makeupacademymanila.com`. Update if
   the final domain differs, then rebuild.
3. **Student work gallery** — ships as "coming soon" on `/student-stories`
   (real photos still being collected from cohorts; do not use stock).
4. **Image optimization** — photography is shipped as original JPEGs in
   `public/images/`; migrating to `astro:assets` with WebP/AVIF would cut
   page weight significantly (hero is the largest).
5. **Instructor profiles** — about page carries the "more coming soon" notice;
   bios/photos of the teaching team are pending from the academy.
6. **Deployment** — `dist/` is deployable to any static host; no CI configured
   yet.

## Structure reference

- Site content: `src/data/*.ts` (courses, testimonials, industry, identity) —
  content edits never require touching components.
- Design tokens: `src/styles/global.css` `@theme` block.
- Original-site snapshot (read-only): `site-reference/`.
- Agent instructions: `AGENTS.md`, `ASTRO_WEBSITE_AGENT.md`.
- Release history: `CHANGELOG.md`.

## Dev server

- `npm run dev` → http://localhost:4321 (check the port is free first; see
  AGENTS.md workspace rules).
- A dev server may be left running by the current session — stop it with
  `npx kill-port 4321` or close it from the Preview tab when finished.
