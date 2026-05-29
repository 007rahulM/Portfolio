# 02 — Local Development

This project uses standard npm scripts defined in `package.json`.

## Install dependencies

```bash
npm install
```

If npm reports a peer‑dependency conflict (common with `next-contentlayer` + Next 14), retry with:

```bash
npm install --legacy-peer-deps
```

## Start the dev server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Useful commands

- `npm run lint` — ESLint checks
- `npm run typecheck` — Contentlayer build + TypeScript check
- `npm run build` — Production build
- `npm run start` — Run the production build locally

## Common local issues

- **Contentlayer build warnings**: The project uses `scripts/contentlayer.cjs` to normalize Contentlayer CLI exit codes.
- **Fonts failing during build**: `lib/fonts.ts` fetches Google Fonts at build time. Offline environments may fail build.
