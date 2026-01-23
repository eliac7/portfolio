"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";

import SectionHeading from "@/components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Computer Engineering</span> from the
        University of Thessaly, I focused on building scalable web applications. I
        specialize in the <span className="font-medium">TypeScript ecosystem</span>
        , primarily <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">FastAPI</span>. My approach focuses on{" "}
        <span className="font-medium">Feature-Sliced Design</span>, performance
        optimization, and robust cloud infrastructure.
      </p>

      <p className="mb-3">
        I also hold a professional certification in{" "}
        <span className="font-medium">AI Applications & Data Security</span>,
        leveraging LLMs to build compliance-aware tools and optimized business
        workflows.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I&apos;m
        exploring <span className="font-medium">IoT hardware</span>, managing
        home servers, or expressing creativity through{" "}
        <span className="font-medium">photography</span>.
      </p>
    </motion.section>
  );
}