"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    fixed bottom-24 right-5 w-12 h-12 bg-white dark:bg-gray-950 md:bg-opacity-80 md:backdrop-blur-[0.5rem]
    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    active:scale-105 transition-all md:dark:bg-transparent md:dark:hover:bg-white/20 borderBlack
  `;

  return (
    <button className={buttonClasses} onClick={toggleTheme}>
      {resolvedTheme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
