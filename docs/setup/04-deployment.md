# 04 — Deployment

This repo is a standard Next.js 14 project. The easiest deployment target is **Vercel**.

## Vercel deployment

1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Use the default build command:

```bash
npm run build
```

4. Use the default output (Next.js handles it automatically).

## Deployment checklist

- ✅ `npm run build` succeeds locally
- ✅ No Contentlayer schema errors
- ✅ Blog/project content is valid front‑matter
- ✅ `siteConfig` has the right name/email/socials

## Non‑Vercel hosting

If you deploy elsewhere, ensure the host supports Node.js and Next.js server output, and that the build step can access Google Fonts (used by `next/font` in `lib/fonts.ts`).
