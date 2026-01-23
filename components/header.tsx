"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

import { links } from "@/lib/data";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (isAboveMediumScreens && isMenuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMenuOpen(false);
    }
  }, [isAboveMediumScreens, isMenuOpen]);

  return (
    <header className="z-999 relative">
      <motion.div
        className={clsx(
          "fixed bg-white/70 shadow-lg shadow-black/3 backdrop-blur-md dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",
          isMenuOpen
            ? "top-0 left-0 right-0 w-full h-full border-none rounded-none"
            : "hidden sm:block top-0 left-1/2 h-18 w-full rounded-none border border-white border-opacity-40 sm:top-6 sm:h-13 sm:w-164 sm:rounded-full"
        )}
        initial={{ y: -100, x: isMenuOpen ? 0 : "-50%", opacity: 0 }}
        animate={{ y: 0, x: isMenuOpen ? 0 : "-50%", opacity: 1 }}
      ></motion.div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-1000 p-2 sm:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          className="w-6 h-0.5 bg-white dark:bg-white absolute"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 0 : -6,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-white dark:bg-white absolute"
          animate={{
            opacity: isMenuOpen ? 0 : 1,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-white dark:bg-white absolute"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? 0 : 6,
          }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <nav
        className={clsx(
          "fixed sm:top-[1.7rem] sm:h-[initial] sm:py-0",
          isMenuOpen
            ? "top-0 left-0 w-full h-screen bg-gray-950/90 backdrop-blur-md"
            : "hidden sm:block top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2"
        )}
      >
        <ul
          className={clsx(
            "flex font-medium text-gray-500",
            isMenuOpen
              ? "flex-col w-full h-full items-center justify-start pt-28 gap-y-6 text-white text-lg"
              : "hidden sm:flex w-88 flex-wrap items-center justify-center gap-y-1 text-[0.9rem] sm:w-[initial] sm:flex-nowrap sm:gap-5"
          )}
        >
          {links.map((link) => (
            <motion.li
              className={clsx(
                "relative flex items-center justify-center",
                isMenuOpen ? "w-full" : "h-3/4"
              )}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center transition",
                  isMenuOpen ? "px-8 py-3" : "px-3 py-3",
                  "hover:text-indigo-600 dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-indigo-600 dark:text-gray-200!":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className={clsx(
                      "absolute inset-0 bg-gray-100 -z-10 dark:bg-gray-800",
                      isMenuOpen ? "rounded-none" : "rounded-full"
                    )}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          <motion.li
            className={clsx(
              "flex items-center justify-center relative",
              isMenuOpen ? "mt-4" : "ml-2"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-800 mr-2" />
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-command-palette"));
                setIsMenuOpen(false);
              }}
              className={clsx(
                "flex items-center justify-center transition hover:text-indigo-600 dark:hover:text-gray-300",
                isMenuOpen ? "p-4 text-3xl text-white/80 hover:text-white" : "px-3 py-3 text-[1.1rem]"
              )}
              aria-label="Search"
            >
              <LuSearch />
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
