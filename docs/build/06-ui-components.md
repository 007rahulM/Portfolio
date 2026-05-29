# 06 — UI Components

The UI primitives live in `components/ui/`. These are reusable building blocks.

## What’s inside

- `button.tsx` → buttons with variants + sizes
- `card.tsx` → simple container cards
- `tag.tsx` → small chips for tags/stack
- `badge.tsx` → labels used in sections

## Why this matters

UI primitives keep styles consistent. Instead of re‑typing Tailwind classes in every component, you centralize them once.

## Example pattern

`button.tsx` exports both:

- `buttonStyles()` for link usage
- `<Button />` component for native buttons

This gives flexibility while still keeping one source of truth.
