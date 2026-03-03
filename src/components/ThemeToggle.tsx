"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="text-sm" aria-hidden suppressHydrationWarning>
        {isDark ? "☾" : "☀"}
      </span>
    </button>
  );
}
