# 05 — Next.js App Router

The `app/` directory powers routing and layouts.

## Folder = route

- `app/page.tsx` → `/`
- `app/projects/page.tsx` → `/projects`
- `app/blog/page.tsx` → `/blog`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`

## Layouts

`app/layout.tsx` defines the HTML shell and shared UI (Navbar/Footer). All pages render inside it.

## Metadata

Next.js uses the `metadata` export to generate SEO tags. The blog post page uses `generateMetadata` to dynamically set title/description based on MDX content.

## Why it’s useful

The App Router makes pages **file‑system predictable**. You can teach someone to build new routes by:

1. Create a folder in `app/`
2. Add a `page.tsx`
3. Export a React component
