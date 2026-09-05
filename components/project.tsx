"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.16) }}
      className={clsx("group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition-shadow hover:shadow-xl hover:shadow-indigo-950/10 dark:border-white/10 dark:bg-white/[0.06]", index === 0 && "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]")}
    >
      <div className={clsx("relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800", index === 0 && "lg:aspect-auto lg:min-h-80")}
      >
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          fill
          sizes={index === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className={clsx("object-cover transition duration-500 group-hover:scale-[1.03]", imageClassName)}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            {title}
          </h3>
          <span className="shrink-0 text-xs font-semibold text-slate-400">0{index + 1}</span>
        </div>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>

        <ul
          id={`project-${index}-technologies`}
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${title} technologies`}
        >
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200"
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
                className="min-h-8 rounded-full px-2 py-1 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-indigo-300"
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200"
            >
              View project <BsArrowUpRight aria-hidden="true" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <FaGithub aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
