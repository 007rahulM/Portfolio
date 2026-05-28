import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const styles = {
  base: "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  primary: "bg-accent text-bg hover:opacity-90",
  ghost: "border border-border bg-surface text-text hover:border-accent",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof styles;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.base, styles[variant], className)}
      {...props}
    />
  );
}

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof styles;
};

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(styles.base, styles[variant], className)} {...props} />
  );
}
