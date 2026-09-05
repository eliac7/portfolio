"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LuMenu, LuSearch, LuX } from "react-icons/lu";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navigate = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-7">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[#11182a]/85 dark:shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
        <Link
          href="#home"
          onClick={() => navigate("Home")}
          className="rounded-lg px-1 py-2 text-lg font-semibold tracking-[0.12em] text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-white"
        >
          Ilias<span className="text-indigo-500 dark:text-indigo-300">.</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              aria-current={activeSection === link.name ? "page" : undefined}
              onClick={() => navigate(link.name)}
              className={clsx(
                "relative rounded-lg px-3 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500",
                activeSection === link.name
                  ? "text-slate-950 dark:text-white"
                  : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
              )}
            >
              {activeSection === link.name && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-indigo-500 dark:bg-indigo-300"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
          <span className="mx-2 h-5 w-px bg-slate-300 dark:bg-white/10" aria-hidden="true" />
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            aria-label="Open search and commands"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <LuSearch aria-hidden="true" />
          </button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-white dark:hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 lg:hidden"
        >
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  aria-current={activeSection === link.name ? "page" : undefined}
                  onClick={() => navigate(link.name)}
                  className={clsx(
                    "block rounded-xl px-4 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                    activeSection === link.name
                      ? "border-l-2 border-indigo-500 bg-slate-100 pl-[calc(1rem-2px)] text-slate-950 dark:bg-white/5 dark:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
