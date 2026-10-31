"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // Both icons are rendered and swapped with CSS, so server and client markup match.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="grid size-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-fg"
    >
      <SunIcon className="hidden size-[18px] dark:block" />
      <MoonIcon className="size-[18px] dark:hidden" />
    </button>
  );
}
