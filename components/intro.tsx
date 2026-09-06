"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section-context";
import DownloadCV from "@/components/download-cv";
import portfolioContent from "@/lib/portfolio-content";

const heroSequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const heroTextItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const heroPortrait = {
  hidden: { opacity: 0, scale: 0.94, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const heroBadge = {
  hidden: { opacity: 0, x: -10, y: 16 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.42,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const heroSocials = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const shouldReduceMotion = useReducedMotion();

  const navigateTo = (section: "Projects" | "Contact") => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      id="home"
      ref={ref}
      className="w-full max-w-6xl scroll-mt-28 pb-16 pt-6 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16"
    >
      <motion.div
        className="grid items-center gap-10 md:grid-cols-[1fr_0.72fr] md:gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20"
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? false : "visible"}
        variants={heroSequence}
      >
        <div className="text-center md:text-left">
          <motion.div
            className="mb-5 flex justify-center md:hidden"
            variants={heroPortrait}
          >
            <Image
              src="/me.webp"
              alt={`${portfolioContent.profile.name} portrait`}
              width={96}
              height={96}
              className="h-20 w-20 rounded-full border-2 border-white/60 object-cover object-[50%_22%] shadow-lg dark:border-white/15"
            />
          </motion.div>
          <motion.h1
            className="mx-auto max-w-[14ch] text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:max-w-[16ch] sm:text-5xl lg:mx-0 lg:max-w-[15ch] lg:text-6xl"
            variants={heroTextItem}
          >
            Hi, I&apos;m {portfolioContent.profile.name}.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:mx-0"
            variants={heroTextItem}
          >
            {portfolioContent.profile.intro}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:mx-0"
            variants={heroTextItem}
          >
            {portfolioContent.profile.professional_summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start"
            variants={heroTextItem}
          >
            <Link
              href="#projects"
              onClick={() => navigateTo("Projects")}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus sm:w-auto"
            >
              <span>View selected work</span>
              <BsArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#contact"
              onClick={() => navigateTo("Contact")}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300 sm:w-auto"
            >
              <span>Let&apos;s talk</span>
              <LuMail
                aria-hidden="true"
                className="h-4 w-4 shrink-0 opacity-75"
              />
            </Link>
            <DownloadCV />
          </motion.div>

          <motion.div
            className="mt-6 flex justify-center gap-2 md:justify-start"
            variants={heroSocials}
          >
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:text-indigo-300"
              href={portfolioContent.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:text-indigo-300"
              href={portfolioContent.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare aria-hidden="true" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto hidden w-full max-w-64 md:block md:max-w-72 lg:max-w-88"
          variants={heroPortrait}
        >
          <div className="relative rounded-4xl border border-white/50 bg-white/50 p-3 shadow-2xl shadow-indigo-950/10 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Image
              src="/me.webp"
              alt={`${portfolioContent.profile.name} portrait`}
              width={420}
              height={520}
              priority
              className="mx-auto h-72 w-full max-w-60 rounded-3xl object-cover object-[50%_22%] md:h-80 md:max-w-72 lg:h-112 lg:max-w-88"
            />
            <motion.div
              className="absolute -bottom-5 left-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-left shadow-xl dark:border-white/10 dark:bg-slate-900/90 sm:-left-5"
              variants={heroBadge}
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Building
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                Reliable web products
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
