"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience &amp; education</SectionHeading>
      <ol className="relative ml-3 border-l border-slate-300 pl-7 dark:border-white/15 sm:ml-0 sm:pl-10">
        {experiencesData.map((item, index) => (
          <motion.li
            key={item.id}
            className="relative mb-8 last:mb-0"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
          >
            <span className="absolute -left-[3.05rem] top-1 flex h-9 w-9 -translate-x-1 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-indigo-600 shadow-sm dark:border-white/20 dark:bg-slate-950 dark:text-indigo-300 sm:-left-[3.4rem]">
              <span aria-hidden="true">{item.icon}</span>
            </span>
            <article className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">{item.location}</p>
                </div>
                <time className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {item.date}
                </time>
              </div>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
