import Link from "next/link";

import { siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            Crafted by {siteConfig.name}
          </p>
          <p className="text-sm text-muted">
            Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and
            Contentlayer.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
