# 10 — Performance + SEO

This portfolio is built to be fast and indexable.

## What helps performance

- **Server Components** reduce client JS.
- **Static generation** for blog and project lists.
- **next/font** handles font loading and subsetting.

## SEO practices in this repo

- Root metadata defined in `app/layout.tsx`.
- Blog pages define metadata per post in `app/blog/[slug]/page.tsx`.
- Semantic headings are used for content structure.

## What to keep in mind

- Titles and descriptions should be meaningful and descriptive.
- Avoid large client‑side bundles unless truly needed.
- Use consistent heading hierarchy for accessibility.
