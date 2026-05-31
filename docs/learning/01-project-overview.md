# 01 — Project Overview

## Goal of this lesson

Understand **what this portfolio is**, **what it includes**, and **how the code is organized** so you always know where to look before you edit anything.

## Mental model: 3 layers

Think of this project as three clear layers:

1. **Content** — blog posts and projects written in MDX.
2. **UI** — reusable components and page sections.
3. **Routes** — Next.js pages that stitch content + UI together.

When something looks wrong on the website, your job is to trace which layer is responsible.

## What the site includes

- **Home page** (`app/page.tsx`) with hero, projects, skills, contact
- **Projects page** (`app/projects/page.tsx`) driven by MDX content
- **Blog index + post pages** (`app/blog/page.tsx`, `app/blog/[slug]/page.tsx`)

## Where key logic lives (and why)

- **App routes** → `app/`  
  Each folder is a page. A `page.tsx` file equals a URL.
- **Reusable sections** → `components/sections/`  
  Each homepage section is isolated so it can be changed without breaking the page.
- **Shared UI** → `components/ui/`  
  Buttons, cards, tags, and badges are centralized for consistency.
- **MDX rendering** → `components/shared/mdx.tsx`  
  This is where Markdown tags are turned into styled React components.
- **Site config + data** → `lib/site.ts`  
  All static data (name, links, skills) lives here so it is easy to edit.
- **Fonts & utilities** → `lib/fonts.ts`, `lib/utils.ts`  
  Fonts define typography; utilities keep class names clean.
- **Content schemas** → `contentlayer.config.ts`  
  Defines what fields every post/project must include.
- **Content** → `content/blog/`, `content/projects/`  
  The actual MDX files you edit to add or update content.

## How to read this repo (the safe order)

1. Start in `app/` to see the pages and layout.
2. Follow the imports into `components/sections/` to see the UI pieces.
3. Check `lib/site.ts` to see what data powers those components.
4. Open `contentlayer.config.ts` to understand content rules.
5. Read the MDX files in `content/` to see real content.

If you can explain the purpose of every folder above, you have the full mental model.
