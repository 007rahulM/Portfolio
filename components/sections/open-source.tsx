import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function OpenSource() {
  return (
    <section id="opensource" className="py-16">
      <h2 className="mb-5 text-2xl font-semibold">
        Open Source & What I&apos;m Learning
      </h2>
      <div className="grid gap-4 rounded-2xl border border-border bg-surface p-5 md:grid-cols-[1fr_2fr]">
        <Image
          src="/contributions.svg"
          alt="GitHub contribution style graph"
          width={640}
          height={220}
          className="w-full rounded-lg border border-border"
        />
        <div className="space-y-3 text-sm text-text/85">
          <p>
            Exploring AI-assisted hiring workflows with practical backend
            constraints.
          </p>
          <p>
            Going deeper on TypeScript and Next.js server/client component
            boundaries.
          </p>
          <p>
            Contributing and shipping in public with cleaner API design and DX.
          </p>
          <Badge className="text-sm">Open to freelance</Badge>
        </div>
      </div>
    </section>
  );
}
