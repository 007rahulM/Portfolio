# 09 — Adding Features Safely

Use this checklist when you extend the portfolio.

## Adding a new section

1. Create a new component in `components/sections/`.
2. Keep it presentational and data‑driven.
3. Import it in `app/page.tsx` and place it in the layout order.

## Adding a new page

1. Create a new folder inside `app/` with a `page.tsx`.
2. Decide if it should be static content or MDX‑driven.
3. Add navigation in `lib/site.ts` if it needs a menu link.

## Adding new content types

If you want a new content type (e.g. “talks”):

1. Add a new schema in `contentlayer.config.ts`.
2. Create a folder in `content/` with MDX files.
3. Import the generated collection in a new page.

## Keep the codebase consistent

- Use existing UI primitives first (`components/ui/*`).
- Reuse `cn()` for class composition.
- Keep new components small and focused.
