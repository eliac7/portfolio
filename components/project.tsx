"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];
type ProjectPropsWithIndex = ProjectProps & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  github,
  imageClassName,
  index,
}: ProjectPropsWithIndex) {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, 5);

  return (
    <article
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent-deep/10 dark:border-white/10 dark:bg-white/6",
        index === 0 && "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]",
      )}
    >
      <div
        className={clsx(
          "relative aspect-16/10 overflow-hidden bg-slate-200 dark:bg-slate-800",
          index === 0 && "lg:aspect-auto lg:min-h-80",
        )}
      >
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          fill
          sizes={
            index === 0
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          className={clsx(
            "object-cover transition duration-500 group-hover:scale-103",
            imageClassName,
          )}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex min-w-0 items-start justify-between gap-4">
          <h3 className="min-w-0 text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            {title}
          </h3>
        </div>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <ul
          id={`project-${index}-technologies`}
          className="mt-5 flex flex-nowrap items-center gap-3 overflow-x-auto pb-1"
          aria-label={`${title} technologies`}
        >
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="shrink-0 whitespace-nowrap rounded-md border border-accent-border/70 bg-accent-wash px-2 py-1 text-[11px] font-medium leading-5 text-accent-text dark:border-accent-focus/20 dark:bg-accent-deep/20 dark:text-accent-focus"
            >
              {tag}
            </li>
          ))}
          {tags.length > 5 && (
            <li key="more-toggle">
              <button
                type="button"
                aria-expanded={showAllTags}
                aria-controls={`project-${index}-technologies`}
                onClick={() => setShowAllTags((visible) => !visible)}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-md px-1.5 text-[11px] font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-accent-focus"
              >
                {showAllTags ? "Show less" : `+${tags.length - 5} more`}
              </button>
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus dark:bg-white dark:text-slate-950 dark:hover:bg-accent-focus"
            >
              View project <BsArrowUpRight aria-hidden="true" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-hover hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-hover dark:hover:text-accent-focus"
            >
              <FaGithub aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
