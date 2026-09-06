"use client";


import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  const renderTimelineItem = (item: (typeof experiencesData)[number]) => (
    <li
      key={item.id}
      className="relative mb-8 last:mb-0"
    >
      <span className="absolute -left-10 top-1 flex h-9 w-9 -translate-x-1 items-center justify-center rounded-full border border-accent-border bg-slate-50 text-accent-text shadow-sm dark:border-accent-deep/70 dark:bg-slate-950 dark:text-accent-focus sm:-left-[3.4rem]">
        <span aria-hidden="true">{item.icon}</span>
      </span>
      <article className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm transition-colors duration-200 hover:border-accent-border hover:bg-white/80 motion-reduce:transition-none dark:border-white/10 dark:bg-white/4 dark:hover:border-accent-focus/30 dark:hover:bg-white/6 sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-text dark:text-accent-focus">{item.location}</p>
          </div>
          <time className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
            {item.date}
          </time>
        </div>
        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
      </article>
    </li>
  );

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-28">
      <SectionHeading>Experience &amp; education</SectionHeading>
      <ol className="relative ml-5 min-w-0 border-l border-slate-300 pl-7 dark:border-white/15 sm:ml-0 sm:pl-10">
        {experiencesData.map(renderTimelineItem)}
      </ol>
    </section>
  );
}
