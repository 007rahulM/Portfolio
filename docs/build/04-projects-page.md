# 04 — Projects Page

The projects page lists all projects from MDX content.

## Route

- `app/projects/page.tsx`

## Data flow

1. Contentlayer generates `allProjects` from `content/projects/*.mdx`.
2. The page sorts projects by `featured` first, then title.
3. Each project is rendered with `ProjectCard` from `components/sections/projects.tsx`.

## What to customize

- Add projects in `content/projects/`.
- Update card UI in `components/sections/projects.tsx`.
- Control ordering via the `featured` field.
