# 03 — Homepage Sections

The homepage is defined in `app/page.tsx` and is composed of section components.

## Sections used

- `Hero` → `components/sections/hero.tsx`
- `ProjectsSection` → `components/sections/projects.tsx`
- `SkillsSection` → `components/sections/skills.tsx`
- `ContactSection` → `components/sections/contact.tsx`

## Why this structure

Each section is isolated so you can:

- iterate on layout without touching the page
- reuse a section elsewhere later
- test individual pieces quickly

## Key data sources

- `Hero` pulls `siteConfig` from `lib/site.ts`
- `ProjectsSection` uses content from `content/projects/*.mdx`
- `SkillsSection` uses `skillGroups` from `lib/site.ts`
