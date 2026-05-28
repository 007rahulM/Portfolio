import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-text/85",
        className,
      )}
      {...props}
    />
  );
}
