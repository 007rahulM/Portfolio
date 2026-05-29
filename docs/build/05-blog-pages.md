# 05 — Blog Pages

The blog is split into a list page and a detail page.

## Blog index

- File: `app/blog/page.tsx`
- Uses `allPosts` from Contentlayer
- Filters on `published: true`
- Sorts by newest date

## Blog detail

- File: `app/blog/[slug]/page.tsx`
- Uses `generateStaticParams` for static generation
- Uses `generateMetadata` for SEO
- Renders the MDX body via `MDXContent`

## Styling MDX

`components/shared/mdx.tsx` maps Markdown tags to styled React components so the blog matches the site design.
