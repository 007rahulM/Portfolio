# 07 — Contentlayer + MDX

MDX lets you write Markdown with JSX. Contentlayer turns that MDX into typed data.

## Why this repo uses it

- Blog posts and projects are **content**, not code.
- Content lives in `content/` and stays readable.
- TypeScript gets strong typing for MDX fields.

## The schema

See `contentlayer.config.ts`:

- `Post` → `content/blog/*.mdx`
- `Project` → `content/projects/*.mdx`

Required fields are enforced, so every MDX file has a consistent shape.

## Rendering

The blog post page uses:

- `useMDXComponent` from `next-contentlayer/hooks`
- `components/shared/mdx.tsx` to map Markdown elements to styled components

This gives you **full design control** over MDX output.
