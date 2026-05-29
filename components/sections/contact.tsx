import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6 rounded-3xl border border-border bg-card/70 p-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
        <h2 className="text-3xl font-display font-semibold">Let&apos;s build</h2>
        <p className="max-w-2xl text-muted">
          Reach out for backend architecture, AI integrations, or full-stack
          builds. I&apos;m open to collaborations and impactful product work.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={`mailto:${siteConfig.email}`}
          className={buttonStyles("primary")}
        >
          Email me
        </Link>
        <Link href={siteConfig.github} className={buttonStyles("secondary")}>
          GitHub
        </Link>
      </div>
    </section>
  );
}
