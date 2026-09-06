"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";

import SectionHeading from "@/components/section-heading";
import portfolioContent from "@/lib/portfolio-content";

export default function About() {
  const { ref } = useSectionInView("About me");

  return (
    <motion.section
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading> About me </SectionHeading>
      <div className="grid gap-5 text-left lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
            {portfolioContent.education[0].summary}{" "}
            {portfolioContent.profile.professional_summary}
          </p>
          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            {portfolioContent.certifications[0].description}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-100/70 p-6 dark:border-white/10 dark:bg-white/3 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-text dark:text-accent-focus">
              Outside of work
            </p>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              {portfolioContent.interests.description}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Personal interests">
            {portfolioContent.interests.items.map((interest) => (
              <li
                key={interest}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
