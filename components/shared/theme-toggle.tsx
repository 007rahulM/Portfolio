"use client";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) {
    return <div className={cn("h-9 w-9", className)} />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground",
        className,
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3a1 1 0 0 1 1 1v1" />
          <path d="M12 19a1 1 0 0 1 1 1v1" />
          <path d="M3 12a1 1 0 0 1 1-1h1" />
          <path d="M19 12a1 1 0 0 1 1-1h1" />
          <path d="M5.6 5.6l.7.7" />
          <path d="M17.7 17.7l.7.7" />
          <path d="M5.6 18.4l.7-.7" />
          <path d="M17.7 6.3l.7-.7" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}
