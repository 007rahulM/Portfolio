"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "h-0.5 w-4 rounded bg-foreground transition",
              open && "translate-y-1.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-4 rounded bg-foreground transition",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-4 rounded bg-foreground transition",
              open && "-translate-y-1.5 -rotate-45",
            )}
          />
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
