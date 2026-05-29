# 08 — Tailwind Design System

Tailwind gives you low‑level utilities. The goal is to build a **system**, not random styling.

## How this repo keeps styles consistent

- Reusable classes via **components** (`components/ui/*`)
- Consistent spacing with `gap-*` and `px-*` values
- Typography controlled via `font-display`, `font-sans`, `text-muted`

## Where styles live

- Global styles: `app/globals.css`
- Component styles: co-located with components
- Utility helpers: `lib/utils.ts` (for merging class names)

## Key patterns to copy

- Use `max-w-*` containers to keep text readable
- Keep spacing system small: `gap-6`, `gap-12`, `gap-24`
- Use `text-muted` for supporting copy and `text-foreground` for headings
