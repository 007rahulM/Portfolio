# 01 — Project Overview

This portfolio is built like a product:

- **Next.js 14 App Router** for routing and rendering
- **TypeScript** for reliability and safer refactors
- **Tailwind CSS** for consistent design tokens
- **Framer Motion** for UI polish
- **Contentlayer + MDX** for blog/project content

## What the site includes

- **Home page** (`app/page.tsx`) with hero, projects, skills, contact
- **Projects page** (`app/projects/page.tsx`) driven by MDX content
- **Blog index + post pages** (`app/blog/page.tsx`, `app/blog/[slug]/page.tsx`)

## Where key logic lives

- **App routes**: `app/`
- **Reusable sections**: `components/sections/`
- **Shared UI**: `components/ui/`
- **MDX rendering**: `components/shared/mdx.tsx`
- **Site config + data**: `lib/site.ts`
- **Fonts & utilities**: `lib/fonts.ts`, `lib/utils.ts`
- **Content schemas**: `contentlayer.config.ts`
- **Content**: `content/blog/` + `content/projects/`

## Why this structure works

- **Separation of concerns**: content lives in MDX, layout in components, config in `lib/`.
- **Scalability**: you can add new pages or content without rewriting core logic.
- **Teaching‑friendly**: each layer of the stack is explicit and discoverable.
