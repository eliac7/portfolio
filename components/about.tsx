"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";

import SectionHeading from "@/components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        Upon completing my degree in {""}
        <span className="font-medium">Computer Engineering</span> {""}
        from the University of Thessaly, I was drawn to the world of web
        development. I specialize in the{" "}
        <span className="font-medium">MERN stack</span>, with a strong affinity
        for <span className="font-medium">React.js</span> and{" "}
        <span className="font-medium">Next.js</span>. The evolving nature of{" "}
        <span className="italic">frontend development</span>, particularly in
        HTML, CSS, and JavaScript, keeps me constantly engaged.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I&apos;m deeply
        intrigued by the wonders of <span className="font-medium">IoT</span> and
        express my creativity through{" "}
        <span className="font-medium">photography</span>.{" "}
      </p>
    </motion.section>
  );
}
