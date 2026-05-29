import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type Size = "sm" | "md";

export const buttonStyles = (
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) => {
  const base =
    "inline-flex items-center justify-center rounded-full border text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";
  const sizes = {
    sm: "px-4 py-2",
    md: "px-5 py-2.5",
  };
  const variants = {
    primary:
      "border-transparent bg-accent text-black hover:bg-accent/90 shadow-glow",
    secondary:
      "border-border bg-card text-foreground hover:border-accent/40 hover:text-accent",
    ghost: "border-transparent text-muted hover:text-foreground",
  };

  return cn(base, sizes[size], variants[variant], className);
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles(variant, size, className)}
      {...props}
    />
  );
}
