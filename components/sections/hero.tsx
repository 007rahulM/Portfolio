import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { AnimatedText } from "@/components/shared/animated-text";
import { Avatar } from "@/components/shared/avatar";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr] md:items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Backend Engineer
        </p>
        <div className="space-y-3">
          <AnimatedText
            text="Rahul M"
            className="text-4xl font-display font-semibold md:text-5xl"
          />
          <p className="max-w-2xl text-lg text-muted md:text-xl">
            {siteConfig.title}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#projects" className={buttonStyles("primary")}>
            View projects
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className={buttonStyles("secondary")}
          >
            Start a conversation
          </Link>
        </div>
        <p className="text-sm text-muted">
          Based in {siteConfig.location}. Focused on building APIs that scale and
          frontends that feel intentional.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <Avatar />
      </div>
    </section>
  );
}
