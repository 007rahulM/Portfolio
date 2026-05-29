# 02 — Layout + Navigation

The shared layout is defined in `app/layout.tsx` and composed from layout components.

## Root layout

`app/layout.tsx` sets:

- HTML structure (`<html>`, `<body>`)
- Metadata for the site
- Global font variables from `lib/fonts.ts`
- Navbar + Footer surrounding all pages

## Navbar

`components/layout/navbar.tsx` pulls navigation items from `lib/site.ts`:

- `navItems` defines labels + links
- `siteConfig.location` shows a small location badge
- `ThemeToggle` and `MobileMenu` live in the right‑side controls

## Footer

`components/layout/footer.tsx` uses:

- `siteConfig.name` for the byline
- `socialLinks` to render GitHub + Email

## Why this setup matters

Having a shared layout ensures **consistent UX** across all pages and makes it easy to update global navigation in one place.
