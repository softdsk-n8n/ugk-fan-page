# HANDOFF — frontend

## Status
DONE

## Outputs produced
- `output/UGK GLM 5.1/` — complete Astro project

## Build
- `npm run build` → exit 0, no errors
- 1 page generated in 1.47s
- JS bundle: 114 KB (46 KB gzip) — within 150 KB budget
- HTML: 50 KB — within 50 KB budget

## QA checklist

- [x] Project scaffolded at `output/UGK GLM 5.1/`
- [x] `package.json` has all deps, correct scripts
- [x] `astro.config.mjs` + Tailwind v4 `@theme` correct
- [x] All 9 sections from design-spec implemented
- [x] Copy from `copy.md` rendered (RU content)
- [x] Semantic HTML (`<section>`, `<nav>`, `<article>`, `<blockquote>`, `<time>`)
- [x] Every `<img>` has `alt` (19/19)
- [x] Every `<iframe>` has `title` (8/8)
- [x] Meta tags: title, description, og:*, twitter:card
- [x] Schema.org JSON-LD present (MusicGroup)
- [x] GSAP for motion (no Framer Motion)
- [x] `prefers-reduced-motion` fallback for ALL animations
- [x] Mobile-first responsive (single column below 768px)
- [x] `npm run build` passes (exit 0)
- [x] `.env.example` present, no real secrets
- [x] `.gitignore` includes `.env`, `node_modules`, `dist`
- [x] `README.md` explains setup + structure
- [x] `DEPLOY.md` covers Vercel + Netlify + Cloudflare
- [x] `CREDITS.md` with fair-use disclaimer

## Known issues / TODO before deploy

1. **Album covers are placeholders** (picsum.photos). Replace with real album artwork under fair-use.
2. **og-image.png missing** — needs generation (1200x630).
3. **YouTube video IDs** — set from search, may need verification.
4. **Site URL** in `astro.config.mjs` is placeholder (`ugk-fan.example.com`).

## Skills used
- brutalist-skill (primary style)
- impeccable (anti-pattern gate)
- tailwind-stack (config reference)
- asset-sourcing (photo/cover discipline)
- hero-section-generator (split-screen hero)
- taste-skill (motion polish)

## Decisions made
- Manrope over Inter (user override, documented)
- GSAP + motion-one over CSS-only (user override)
- Purple drank #7B2D8E solid only (cultural tribute, not gradient)
- No shadcn/ui (brutalist rejects component libraries)
- @tailwindcss/vite instead of @astrojs/tailwind (v4 incompatibility)
