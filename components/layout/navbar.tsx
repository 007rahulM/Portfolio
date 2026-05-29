import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site";

import { ThemeToggle } from "@/components/shared/theme-toggle";

import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          rahul.dev
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted md:inline">
            {siteConfig.location}
          </span>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
