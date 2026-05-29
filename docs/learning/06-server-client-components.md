# 06 — Server vs Client Components

Next.js 14 renders **Server Components by default**. Only use Client Components when needed.

## Server Components

- Run on the server.
- Can access data or filesystem directly.
- Keep client bundles smaller.

In this repo, most pages are server components:

- `app/page.tsx`
- `app/projects/page.tsx`
- `app/blog/page.tsx`

## Client Components

Use when you need:

- browser APIs
- state or effects
- animation libraries

Examples:

- `components/shared/animated-text.tsx` (Framer Motion)
- `components/shared/mdx.tsx` (MDX rendering hook)

## Rule of thumb

Start with server components. Add `"use client"` only when you **must**.
