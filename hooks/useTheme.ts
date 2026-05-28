"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "rm-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = saved ?? preferred;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(THEME_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return { theme, toggleTheme, mounted };
}
