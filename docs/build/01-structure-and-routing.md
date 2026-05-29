# 01 — Structure + Routing

The App Router makes routing match the filesystem. Start by understanding `app/`.

## Core routes

- `/` → `app/page.tsx`
- `/projects` → `app/projects/page.tsx`
- `/blog` → `app/blog/page.tsx`
- `/blog/[slug]` → `app/blog/[slug]/page.tsx`

## Why this layout

- **Predictable**: every route has a single `page.tsx`.
- **Scalable**: adding new pages is just adding folders.
- **Teaching‑friendly**: new contributors can find any page fast.

## What to do when adding a new page

1. Create a folder in `app/`.
2. Add `page.tsx` with a default export component.
3. Decide if it should use content (MDX) or static JSX.
