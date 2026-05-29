# 02 — Web Fundamentals

Before jumping into frameworks, make sure these basics are clear.

## The request/response loop

1. Browser requests a URL.
2. Server returns HTML, CSS, JS.
3. Browser parses HTML, applies CSS, runs JS.

## Rendering concepts

- **Server‑side rendering (SSR)**: HTML is generated on the server.
- **Client‑side rendering (CSR)**: HTML is built in the browser.
- **Static generation (SSG)**: HTML is prebuilt at build time.

Next.js combines all three depending on the page.

## Component thinking

Modern UI is built from **components** — small, reusable building blocks with clear props and responsibilities. This portfolio keeps:

- layout pieces (Navbar/Footer)
- content sections (Hero/Projects/Skills)
- UI primitives (Button/Card/Tag)

When you build your own, always ask:

- What should be a reusable component?
- What data should flow in as props?
- What should be fixed vs configurable?
