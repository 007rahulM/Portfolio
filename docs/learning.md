# Learning Notes

## TypeScript fundamentals
- Use explicit types for public function inputs and outputs.
- Prefer union types for variant props instead of magic strings.
- Let TypeScript guide refactors by fixing errors in order.

## React Server Components vs Client Components
- Server Components run on the server by default and keep bundles small.
- Client Components are needed for state, effects, and browser APIs.
- Mark a file with `"use client"` only when required.

## Tailwind responsive system
- Start with mobile styles first, then add `md:`/`lg:` overrides.
- Keep spacing consistent with a small set of utilities.
- Use `max-w` containers to control line length and readability.

## Framer Motion motion API
- Animate only the elements that need focus.
- Use `AnimatePresence` for conditional UI like mobile menus.
- Keep transitions short and ease-out for a calm feel.
