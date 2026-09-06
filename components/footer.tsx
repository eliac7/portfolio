"use client";

import Link from "next/link";
import portfolioContent from "@/lib/portfolio-content";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="w-full max-w-6xl py-8 text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {portfolioContent.profile.name}
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
          <Link className="inline-flex min-h-11 items-center transition-colors hover:text-accent-text dark:hover:text-accent-focus" href="#projects">
            Projects
          </Link>
          <Link className="inline-flex min-h-11 items-center transition-colors hover:text-accent-text dark:hover:text-accent-focus" href="#contact">
            Contact
          </Link>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-accent-text dark:hover:text-accent-focus" href={portfolioContent.profile.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-accent-text dark:hover:text-accent-focus" href={portfolioContent.profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 sm:text-left">
        Built with Next.js, TypeScript, Tailwind CSS and a lot of curiosity.
      </p>
    </footer>
  );
}
