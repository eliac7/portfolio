"use client";


import { skillsGroups } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

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
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
