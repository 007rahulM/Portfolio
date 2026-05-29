# 03 — TypeScript Essentials

TypeScript adds types on top of JavaScript so refactors are safer and components are easier to understand.

## How it shows up in this repo

- **Props are typed** (example: `components/ui/button.tsx`)
- **Config data uses types** (`lib/site.ts` imports `NavItem`, `SkillGroup`)
- **Next.js metadata is typed** (`app/layout.tsx` uses `Metadata`)

## Principles to follow

- Type public APIs (props, config objects, exported functions).
- Prefer narrow string unions for variants (see `button.tsx`).
- Let the compiler guide your changes — fix errors in order.

## Why this matters

The portfolio is small today, but TypeScript makes it **safe to scale**:

- You can add new sections without breaking old ones.
- You can rename props and be confident every usage updates.
