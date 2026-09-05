"use client";

import { motion, useReducedMotion } from "framer-motion";

import { skillsGroups } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const shouldReduceMotion = useReducedMotion();

  const skillListVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.025,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-28"
      id="skills"
      ref={ref}
    >
      <SectionHeading>Tools I use to ship</SectionHeading>
      <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillsGroups.map((group) => (
          <article
            key={group.id}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{group.label}</h3>
            <motion.ul
              className="mt-4 flex flex-wrap gap-2"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.35 }}
              variants={skillListVariants}
            >
              {group.items.map((skill) => (
                <motion.li
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  variants={skillItemVariants}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </article>
        ))}
      </div>
    </section>
  );
}
