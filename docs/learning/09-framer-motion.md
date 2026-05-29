# 09 — Framer Motion

Framer Motion provides animation primitives for React.

## Where it is used

- `components/shared/animated-text.tsx`

That component animates text with a subtle fade + lift:

- `initial`: opacity 0, y 12
- `animate`: opacity 1, y 0
- `transition`: 0.6s ease‑out

## Why it matters

Animation is used **sparingly** here. The goal is to add polish without distracting from content.

## Guideline

If you add new animations:

- Keep them short and subtle
- Avoid animating layout shifts
- Prefer fade/slide over complex transforms
