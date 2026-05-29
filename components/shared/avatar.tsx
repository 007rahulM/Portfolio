import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarProps = {
  className?: string;
};

export function Avatar({ className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl border border-border bg-card shadow-glow",
        className,
      )}
    >
      <Image
        src="/avatar.svg"
        alt="Illustrated avatar of Rahul M"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
