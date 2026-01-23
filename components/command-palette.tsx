"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  LuMoon,
  LuSun,
  LuUser,
  LuCode,
  LuBriefcase,
  LuGithub,
  LuLinkedin,
  LuDownload,
  LuSearch,
  LuCopy,
} from "react-icons/lu";
import { useTheme } from "next-themes";
import { useActiveSectionContext } from "@/context/active-section-context";
import { toast } from "react-hot-toast";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Toggle the menu when pressing ctrl+k or cmd+k, and handle ESC
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const openHandler = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-command-palette", openHandler);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-palette", openHandler);
    };
  }, []);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const navigateTo = (section: any, hash: string) => {
    runCommand(() => {
      setActiveSection(section);
      setTimeOfLastClick(Date.now());
      window.location.hash = hash;
    });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-start justify-center pt-[20vh] p-4 bg-black/50 backdrop-blur-sm transition-opacity"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl overflow-hidden bg-white border rounded-xl shadow-2xl dark:bg-gray-900 border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command loop>
          <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-800">
            <LuSearch className="w-5 h-5 text-gray-400 mr-2" />
            <Command.Input
              autoFocus
              placeholder="Type a command or search..."
              className="w-full h-12 py-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 font-mono text-[10px] font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-75 overflow-y-auto p-2 scroll-py-2">
            <Command.Empty className="py-6 text-sm text-center text-gray-500">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 mb-2 text-xs font-medium text-gray-500 tracking-wider">
              <Command.Item
                onSelect={() => navigateTo("Home", "#home")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuUser className="w-4 h-4" />
                <span>Go to Home</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("About", "#about")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuUser className="w-4 h-4" />
                <span>Go to About</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("Projects", "#projects")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuCode className="w-4 h-4" />
                <span>View Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("Experience", "#experience")}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuBriefcase className="w-4 h-4" />
                <span>My Experience</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className="px-2 mb-2 mt-4 text-xs font-medium text-gray-500 tracking-wider">
              <Command.Item
                onSelect={() => runCommand(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuMoon className="w-4 h-4 dark:hidden" />
                <LuSun className="w-4 h-4 hidden dark:block" />
                <span>Toggle Dark/Light Mode</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => {
                  navigator.clipboard.writeText("iliascodes@gmail.com");
                  toast.success("Email copied to clipboard!");
                })}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuCopy className="w-4 h-4" />
                <span>Copy Email Address</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => {
                  window.open("/Ilias_Thalassochoritis_FullStack_CV.pdf", "_blank");
                })}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuDownload className="w-4 h-4" />
                <span>Download CV</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Socials" className="px-2 mb-2 mt-4 text-xs font-medium text-gray-500 tracking-wider">
              <Command.Item
                onSelect={() => runCommand(() => window.open("https://github.com/eliac7", "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuGithub className="w-4 h-4" />
                <span>GitHub</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open("https://linkedin.com/in/ithalassochoritis", "_blank"))}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default select-none hover:bg-indigo-600 hover:text-white aria-selected:bg-indigo-600 aria-selected:text-white text-gray-700 dark:text-gray-300 transition-colors"
              >
                <LuLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex justify-end px-4 py-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <p className="text-[10px] text-gray-500">
              Tip: Press <kbd className="font-sans font-medium">ESC</kbd> to close
            </p>
          </div>
        </Command>
      </div>
    </div>
  );
}