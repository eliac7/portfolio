"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section-context";
import DownloadCV from "@/components/download-cv";
import portfolioContent from "@/lib/portfolio-content";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const navigateTo = (section: "Projects" | "Contact") => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      id="home"
      ref={ref}
      className="w-full max-w-6xl scroll-mt-28 pb-20 pt-8 sm:pb-28 sm:pt-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Hi, I&apos;m {portfolioContent.profile.name.split(" ")[0]}.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {portfolioContent.profile.intro}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {portfolioContent.profile.professional_summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#projects"
              onClick={() => navigateTo("Projects")}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#676394] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7772a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa6f5] sm:w-auto"
            >
              View selected work
              <BsArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              onClick={() => navigateTo("Contact")}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300 sm:w-auto"
            >
              <span>Let&apos;s talk</span>
              <LuMail aria-hidden="true" className="ml-1.5 h-4 w-4 shrink-0 opacity-75" />
            </Link>
            <DownloadCV />
          </motion.div>

          <div className="mt-6 flex justify-center gap-2 lg:justify-start">
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
          </div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[22rem]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="relative rounded-[2rem] border border-white/50 bg-white/50 p-3 shadow-2xl shadow-indigo-950/10 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Image
              src="/me.webp"
              alt={`${portfolioContent.profile.name} portrait`}
              width={420}
              height={520}
              priority
              className="h-[22rem] w-full max-w-[18rem] rounded-[1.5rem] object-cover object-[50%_22%] sm:h-[28rem] sm:max-w-[22rem]"
            />
            <div className="absolute -bottom-5 left-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-left shadow-xl dark:border-white/10 dark:bg-slate-900/90 sm:-left-5">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Building</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Reliable web products</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
