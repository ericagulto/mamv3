# AGENTS.md — Instructions for AI Coding Agents

This file governs any AI agent (Codebuff, Cursor, Copilot Workspace, Claude Code, etc.) working in this repository. Read it fully before making changes.

## What this project is

A **static-site starter template** built on **Astro 5 + Tailwind CSS v4**, shipping with a complete fictional portfolio site ("Aria Lens") as the reference implementation. It is used as a **starting point for new projects**: unzip into a fresh folder, rebrand, rebuild.

**Active work in this checkout:** the template is being used to rebuild **Makeup Academy Manila** (a WordPress + Elementor site) as a new Astro site. The complete offline snapshot of the original — copy, pages, images, fonts, SEO metadata — lives in `site-reference/` and is the source of truth for that rebuild (see "The site-reference directory" below).

## Workspace scoping — the most important rule

You work **only inside the project folder that contains this AGENTS.md file**.

- Determine the workspace root as the directory containing this file, `astro.config.mjs`, and `package.json`. Treat that directory as the boundary for **every operation**.
- **Never read, write, move, or delete anything outside that folder** — no sibling projects, no parent directories, no user-level config (`~/.npmrc`, `~/.gitconfig`), no other drives or site folders that happen to be running.
- Before running any command, ensure its working directory (`cwd`) is the project folder. Resolve all paths relative to the project root.
- **Before starting a dev server, check whether the port is already in use** (e.g. `netstat -ano | grep :4321` on Windows) and pick a free port with `--port <n>` rather than killing processes you did not start. Never terminate processes, servers, or tasks that belong to other projects or that you did not spawn yourself.
- Never "clean up", stop, or modify anything on the machine beyond this project, even if it looks related. If a task seems to require it, stop and ask the user.

## Stack & conventions

- **Astro 5** with static output; **Tailwind CSS v4** compiled via `@tailwindcss/vite` — no CDN Tailwind, no other UI frameworks.
- Brand tokens live in the `@theme` block in `src/styles/global.css` (`--color-primary`, fonts). Reference them with Tailwind utilities (`bg-primary`, `font-display`); avoid hard-coded hex values in components.
- All **content** lives in `src/data/*.ts` (typed) and `src/content/journal/*.md` (collections, zod-validated in `src/content.config.ts`). Pages compose components from that data — content changes should not require editing components.
- Fonts and icon fonts are loaded via `<link>` tags in `src/layouts/BaseLayout.astro` (not CSS `@import`, which Tailwind v4's expanded output can break).
- Vanilla JS only for interactions, inline in components. Keep it small, scoped, and accessible (aria attributes, keyboard support, `prefers-reduced-motion` respected in CSS).
- Keep the existing two-space indentation, double quotes, and component structure.

## The site-reference directory — source of truth for the rebuild

`site-reference/` is a complete offline snapshot of the original Makeup Academy Manila site (WordPress + Elementor, captured 2026-09-23). During the rebuild it is **read-only reference material** — never edit, move, or delete anything inside it.

- `site-reference/content/*.md` — extracted copy for each of the 21 pages. Use it as the wording source; verify structure against the raw HTML in `site-reference/pages/` when it matters.
- `site-reference/_index.json` — real page titles, meta descriptions, and og:images per route (seed for the Astro pages' SEO metadata).
- `site-reference/_pages.json` — URL → file mapping; the definitive page list.
- `site-reference/assets/wp-content/uploads/` — original images (prefer full-size files, not `-300x300`-style WP thumbnails) plus the brand fonts **Boska** (display) and **Satoshi** (body) as `.woff2` and the logo PNG. Copy any asset you actually use into `public/` rather than referencing the snapshot in place.
- Elementor CSS under `assets/wp-content/uploads/elementor/css/` documents the current colors and layout — mine it for brand tokens, but **do not clone the Elementor markup or visual design**; rebuild through the design process in `ASTRO_WEBSITE_AGENT.md`.

Content integrity: every price, duration, course name, and factual claim in the snapshot is real site copy — carry it over exactly. Marketing phrasing may be tightened, but never invent facts the snapshot does not support.

## Verification workflow (required for code changes)

1. `npm run check` — must pass with 0 errors before any handoff.
2. `npm run build` — must complete successfully.
3. For visual changes, start the dev server and actually look at the affected pages (screenshots) on both desktop and mobile viewports before claiming done.
4. Never leave a dev server you started running unless the user asked for it.

## Rebranding checklist (new project from this template)

When the user asks to adapt this template for a new site — including the Makeup Academy Manila rebuild — source copy, images, and fonts from `site-reference/` first (see above) instead of drafting content from scratch:

1. `src/data/site.ts` — name, tagline, contact info, socials, nav, stats.
2. `src/data/projects.ts`, `services.ts`, `testimonials.ts` — replace demo content.
3. `src/content/journal/*.md` — replace or remove demo posts.
4. `public/images/` — replace all demo imagery (keep `map_placeholder` only if a map is used).
5. `astro.config.mjs` — set the real `site` URL.
6. `package.json` — rename the package.
7. Reword any fictional claims (the demo bio, testimonials, pricing) — do not present them as fact for a real business.
8. Run the verification workflow above.

## Things to avoid

- Adding heavy dependencies without asking (this template's value is staying light: 6 runtime deps).
- Introducing client-side frameworks per-page unless the user asks.
- Editing generated files: `.astro/`, `dist/`, `package-lock.json` (except via `npm install`).
- Committing or pushing unless explicitly requested.
- Deleting or overwriting user files outside the scope of the current task.
- Editing anything in `site-reference/` — it is read-only source material for the rebuild.
