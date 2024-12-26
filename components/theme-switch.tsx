"use client";

import { useTheme } from "@/context/theme-context";

import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const buttonClasses = `
    fixed bottom-24 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    active:scale-105 transition-all dark:bg-transparent dark:hover:bg-white/20
    ${theme === "light" ? "borderBlack" : ""}
  `;

  return (
    <button className={buttonClasses} onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
