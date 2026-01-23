"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section-context";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import DownloadCV from "@/components/download-cv";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-200 text-center sm:mb-0 scroll-mt-400"
    >
      <div className="flex items-center justify-center">
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/me2.webp"}
              alt="Ilias portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover object-[50%_22%] border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl cursor-default group-hover:animate-waving"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-5 px-4 font-medium leading-normal! sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I&apos;m Ilias.</span> I&apos;m a{" "}
        <span className="font-bold">Full Stack Engineer</span> specializing in{" "}
        <span className="font-bold">React (Next.js)</span> and{" "}
        <span className="font-bold">SaaS architecture</span>. I build scalable,
        production-ready applications with a focus on{" "}
        <span className="italic">performance</span> and{" "}
        <span className="italic">accessibility</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row max-w-[20rem] sm:max-w-none w-full sm:w-auto mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-hidden group px-7 hover:scale-110 hover:bg-indigo-600 active:scale-105 sm:w-auto"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-2" />
        </Link>

        <DownloadCV />

        <div className="flex gap-2 w-full sm:w-auto">
          <a
            className="bg-white p-4 text-gray-700 hover:text-indigo-600 flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 flex-1 sm:flex-initial shadow-sm"
            href="https://www.linkedin.com/in/ithalassochoritis/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-indigo-600 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 flex-1 sm:flex-initial shadow-sm"
            href="https://github.com/eliac7"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
