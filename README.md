# Makeup Academy Manila — Website

Production static site for **Makeup Academy Manila**, a face-to-face makeup & hairstyling school in Quezon City. Rebuilt from the original WordPress/Elementor site as **Astro 5 + Tailwind CSS v4** — same brand (wine & gold, DM Serif Text + Satoshi), cleaner structure, faster pages.

## Quick start

```bash
npm run dev        # dev server → http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the production build
npm run check      # typecheck all .astro/.ts files
```

Requirements: Node 18.17+ (or 20.3+). After unzipping on a new machine, run `npm install` once.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — positioning, why face-to-face, featured classes, level paths, studio, testimonials |
| `/classes` | All 11 courses + the three artistry paths |
| `/classes/[slug]` | Course detail: curriculum, inclusions, how training works, full details ledger |
| `/schedule` | Rolling schedule explanation + all courses at a glance |
| `/student-stories` | Real graduate reviews + honest-results statement |
| `/industry` | OJT placements, theatre work, awards, judging |
| `/about` | Faye Young, credentials, teaching team, who thrives here |
| `/contact` | Inquiry form + studio details |
| `/thank-you` | Post-inquiry confirmation |
| `/privacy-policy`, `/website-terms-disclaimer` | Legal, from the original site copy |
| `404` | Branded not-found page |

## How it's put together

```
src/
├── data/            # ← ALL site content lives here (typed)
│   ├── site.ts      #    identity, contact, stats, nav
│   ├── courses.ts   #    11 courses: pricing, durations, curricula, paths
│   ├── testimonials.ts  # verbatim student reviews
│   └── industry.ts  #    OJT highlights, founder credentials
├── components/      # Navbar, Footer, PageHero, CourseCard, InquiryForm, CTA…
├── layouts/         # BaseLayout: SEO, OG, JSON-LD, font preloads, reveal script
├── pages/           # File-based routes (+ [slug] course template)
└── styles/global.css # Tailwind v4 @theme tokens (brand palette, fonts)
public/
├── fonts/           # DM Serif Text (display) + Satoshi (body), self-hosted woff2
└── images/          # Original site photography
site-reference/      # Read-only snapshot of the original WP site (source of truth)
```

**Content changes never require touching components** — edit `src/data/*.ts` and the pages pick it up. Prices, durations, and curricula are carried over exactly from the academy's official 2026 course posters.

## Deployment

`dist/` is a finished static site — drop it on any static host (Netlify, Vercel, Cloudflare Pages, plain nginx). For CI builds: `npm ci && npm run build`.

## Notes

- The inquiry form is a front-end demo (validates, confirms) — wire it to Formspree/Supabase/serverless at launch.
- Fonts are self-hosted (woff2, preloaded) — no external font CDN, no layout shift.
- `AGENTS.md` contains operating instructions for AI coding agents; `site-reference/` is the original site's offline snapshot and should stay untouched.
