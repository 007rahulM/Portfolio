# 07 — Content Workflow

Content is treated like data, not hard‑coded JSX.

## Where content lives

- Blog posts → `content/blog/*.mdx`
- Projects → `content/projects/*.mdx`

## How content appears on the site

- `allPosts` is used in `app/blog/page.tsx`.
- `allProjects` is used in `app/projects/page.tsx` and `components/sections/projects.tsx`.

## Why MDX is chosen

- You can write in Markdown but still embed components if needed.
- Content stays readable in Git.
- Adding new posts does not require editing React code.

## Teaching tip

When onboarding someone, start by letting them add a blog post. It touches:

- Contentlayer schema validation
- MDX front‑matter rules
- App Router rendering
