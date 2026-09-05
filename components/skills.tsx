"use client";

import { motion } from "framer-motion";

import { skillsGroups } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>Tools I use to ship</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillsGroups.map((group, groupIndex) => (
          <motion.article
            key={group.id}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: groupIndex * 0.05 }}
          >
            <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
