"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";

import { useSectionInView } from "@/hooks/useSectionInView";

import SectionHeading from "@/components/section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 max-w-212 scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 px-4 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="px-5 py-3 bg-white borderBlack rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <p className="mt-10 italic text-center text-gray-700 dark:text-white/75">
        Missing a skill? Don&apos;t worry! I pick things up pretty quick.
      </p>
    </section>
  );
}
