# 02 — Web Fundamentals

## Goal of this lesson

Make sure you understand **how the web works** before you dive into Next.js. Frameworks only make sense when the fundamentals are clear.

## The request/response loop (the real story)

1. **You type a URL.**
2. **The browser makes a request** (HTTP) to a server.
3. **The server responds** with HTML, CSS, and JavaScript.
4. **The browser renders** the HTML, applies CSS, then runs JavaScript.

If you can explain this loop, you can debug most web problems.

## Rendering concepts (why Next.js exists)

- **Server‑side rendering (SSR)**  
  The HTML is created on the server for every request. Good for dynamic data.

- **Client‑side rendering (CSR)**  
  The server sends a minimal HTML shell and JavaScript builds the UI in the browser.

- **Static generation (SSG)**  
  The HTML is built once at build time and reused for every visitor.

Next.js combines all three, so each page can choose the best method.

## The idea of “components”

Modern UI is built from **components** — small, reusable pieces that take data (props) and return UI.

In this repo:

- layout pieces (Navbar/Footer)
- content sections (Hero/Projects/Skills)
- UI primitives (Button/Card/Tag)

## How to think like a builder

When you see a page, ask yourself:

1. What parts repeat and should become components?
2. What data changes? (that becomes props or content)
3. What never changes? (that becomes layout)

This mindset is how you go from “copying code” to **designing code**.
