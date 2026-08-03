"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";

import SectionHeading from "@/components/section-heading";
import portfolioContent from "@/lib/portfolio-content";

export default function About() {
  const { ref } = useSectionInView("About");

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
        {portfolioContent.education[0].summary}{" "}
        {portfolioContent.profile.professional_summary}
      </p>

      <p className="mb-3">{portfolioContent.certifications[0].description}</p>

      <p>{portfolioContent.interests.description}</p>
    </motion.section>
  );
}
