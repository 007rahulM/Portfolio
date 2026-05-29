# 03 — Contentlayer + MDX

The portfolio uses **Contentlayer** to turn Markdown/MDX into typed content for the blog and projects.

## Where content lives

- Blog posts: `content/blog/*.mdx`
- Projects: `content/projects/*.mdx`

## Where schemas live

- Schema definitions: `contentlayer.config.ts`
- Generated output: `.contentlayer/` (created during build or dev)

## How it flows

1. Contentlayer scans `content/` using the schemas in `contentlayer.config.ts`.
2. It generates typed documents in `.contentlayer/generated`.
3. Pages import generated collections:
   - `app/blog/page.tsx` uses `allPosts`
   - `app/projects/page.tsx` uses `allProjects`

## Adding a new blog post

1. Create `content/blog/my-post.mdx`.
2. Add front‑matter fields required by `Post` in `contentlayer.config.ts`:
   - `title`, `description`, `date`, `tags`, `published`
3. Run `npm run dev` (Contentlayer will rebuild).

## Adding a new project

1. Create `content/projects/my-project.mdx`.
2. Provide the required fields from the `Project` schema:
   - `title`, `description`, `repo`
3. Optional fields: `live`, `stack`, `year`, `featured`.
