"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useMounted } from "@/hooks/useMounted";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const buttonClasses = `
    fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-20 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white shadow-lg transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-slate-900 sm:bottom-24 sm:right-5
  `;

  return (
    <button
      className={buttonClasses}
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
