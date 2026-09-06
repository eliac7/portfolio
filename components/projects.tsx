"use client";

import { useState } from "react";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-28" id="projects" ref={ref}>
      <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <SectionHeading withMargin={false}>Projects I&apos;ve built</SectionHeading>
        </div>
        <p className="max-w-sm text-center text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-right">
          A selection of products, platforms and experiments where engineering meets real-world constraints.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>

      {!showAllProjects && projectsData.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="min-h-11 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-hover hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-accent-hover dark:hover:text-accent-focus"
            onClick={() => setShowAllProjects(true)}
          >
            View all projects
          </button>
        </div>
      )}
    </section>
  );
}
