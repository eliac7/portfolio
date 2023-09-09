"use client";

import { useRef } from "react";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

import { projectsData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number];

type ProjectPropsWithIndex = ProjectProps & { index: number };

const ProjectImageClasses = ({ index }: { index: number }) => {
  const isEven = index % 2 === 0;

  const positionClass = isEven ? "sm:left-20" : "sm:right-20";
  const hoverTranslateXClass = isEven
    ? "sm:group-hover:-translate-x-[4.5rem]"
    : "sm:group-hover:translate-x-[4.5rem]";

  const commonClasses =
    "block sm:absolute sm:top-0 w-full rounded-t-lg shadow-2xl h-64 sm:h-full object-cover";
  const hoverClasses =
    "sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 transition sm:group-hover:scale-[1.04] sm:group-hover:duration-400";
  const conditionalRotateClass = isEven ? "" : "sm:group-hover:rotate-2";

  return {
    positionClass,
    hoverTranslateXClass,
    commonClasses,
    hoverClasses,
    conditionalRotateClass,
  };
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProjectPropsWithIndex) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const {
    positionClass,
    hoverTranslateXClass,
    commonClasses,
    hoverClasses,
    conditionalRotateClass,
  } = ProjectImageClasses({ index });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 max-w-[50rem] border rounded-lg border-black/5 overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div
          className={clsx(
            "grid w-full px-5 pt-4 pb-7 order-2",
            index % 2 === 0 ? "sm:order-1" : ""
          )}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 "
              >
                {tag}
              </li>
            ))}
          </ul>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center px-3 py-3 mt-4 text-xs text-gray-700 transition-all bg-white rounded-full shadow-sm outline-none focus:scale-110 hover:scale-110 dark:hover:bg-gray-950 dark:hover:text-gray-200 active:scale-105 group/btn hover:bg-gray-400 hover:text-gray-100 ">
                <span className="font-semibold">View project</span>
                <BsArrowRight className="transition-transform opacity-70 group-hover/btn:translate-x-1 " />
              </button>
            </a>
          )}
        </div>

        <div
          className={clsx(
            "relative order-1",
            index % 2 === 0 ? "sm:order-2" : ""
          )}
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className={clsx(
              commonClasses,
              positionClass,
              hoverClasses,
              hoverTranslateXClass,
              conditionalRotateClass
            )}
          />
        </div>
      </section>
    </motion.div>
  );
}
