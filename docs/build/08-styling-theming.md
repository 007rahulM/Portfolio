# 08 — Styling + Theming

Styling is done with Tailwind CSS and a lightweight theme toggle.

## Global styles

- `app/globals.css` defines base colors and design tokens.
- `tailwind.config.ts` wires up the Tailwind setup.

## Fonts

`lib/fonts.ts` uses `next/font/google` to load:

- Inter (body)
- Sora (display)
- JetBrains Mono (code)

These are applied in `app/layout.tsx`.

## Theme toggle

- Logic: `hooks/useTheme.ts`
- UI: `components/shared/theme-toggle.tsx`

The theme is stored in `localStorage` and applied via the `dark` class on `<html>`.

## Why this matters

A consistent design system makes the portfolio feel intentional. You should centralize colors, spacing, and typography so new pages automatically look correct.
