# 03 — TypeScript Essentials

## Goal of this lesson

Understand **why TypeScript exists** and how it makes this codebase easier to read, safer to refactor, and clearer to extend.

## Mental model: Types describe shape and intent

Think of TypeScript as documentation the computer can verify:

- It tells you **what data should look like**.
- It warns you when you use data incorrectly.
- It makes large refactors safe because the compiler checks your work.

## Core ideas you must understand

1. **Types vs values**  
   Types describe data; values are the data. `string` is a type. `"hello"` is a value.

2. **Interfaces and type aliases**  
   Use these to describe objects and component props.

3. **Unions**  
   Helpful for variants like `"primary" | "secondary"` for buttons.

4. **Inference**  
   TypeScript often figures types out for you. You only need to add types at the boundaries.

## Where TypeScript shows up in this repo

- **Component props** are typed in UI components (example: `components/ui/button.tsx`).
- **Config data** is typed in `lib/site.ts` using types from `types/index.ts`.
- **Metadata** is typed in `app/layout.tsx` using Next.js `Metadata`.

## How to think while coding

- **Type the boundaries**: props, exported functions, and config objects.
- **Let the compiler guide you**: fix errors in order, don’t fight the types.
- **Read types to understand code**: if you don’t know what a function expects, look at its type.

If you can explain the types of a component’s props, you already understand 80% of that component.
