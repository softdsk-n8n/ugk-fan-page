# DEPLOY — UGK Fan Landing

## Vercel

1. Push repo to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Netlify

1. Push repo to GitHub
2. Import in [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Cloudflare Pages

1. Push repo to GitHub
2. Import in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploy

## Environment variables

None required. This is a static fan page with no backend.

## Pre-deploy checklist

- [ ] Replace placeholder album covers with real artwork (fair-use)
- [ ] Generate og-image.png (1200x630) and place in `public/`
- [ ] Verify YouTube video IDs are correct and embeds work
- [ ] Update `site` URL in `astro.config.mjs`
- [ ] Run `npm run build` and verify no errors
- [ ] Test on mobile (375px viewport)
- [ ] Test with `prefers-reduced-motion: reduce` enabled

## Post-deploy

- Submit sitemap to Google Search Console (if custom domain)
- Verify OG tags via [opengraph.xyz](https://opengraph.xyz)
- Run Lighthouse audit (target: Performance ≥ 90, A11y ≥ 95)
