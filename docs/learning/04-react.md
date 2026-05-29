# 04 — React Foundations

React is the UI layer. You build components and compose them into pages.

## Key ideas used here

- **Function components**: every UI piece is a function.
- **Props**: data passed into a component.
- **Composition**: components are built by combining smaller ones.

## Examples in this repo

- `components/sections/hero.tsx` is a presentational component.
- `components/ui/button.tsx` exposes reusable styles + variants.
- `components/shared/animated-text.tsx` uses Framer Motion for animation.

## Client vs server

Most components are **server components** by default. Any component that uses browser APIs or animation libraries needs to be marked with:

```
"use client";
```

You’ll see this in:

- `components/shared/animated-text.tsx`
- `components/shared/mdx.tsx`

Understanding this split is essential for Next.js 14.
