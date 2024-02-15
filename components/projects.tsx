"use client";

import { Fragment, useState } from "react";

import { projectsData } from "@/lib/data";

import { useSectionInView } from "@/hooks/useSectionInView";

import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";

import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section className="mb-20 scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData
          .slice(0, showAllProjects ? projectsData.length : 3)
          .map((project, index) => (
            <Fragment key={index}>
              <Project {...project} index={index} />
            </Fragment>
          ))}
      </div>
      {!showAllProjects && (
        <motion.div
          className="flex items-center justify-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-slate-600 rounded-full outline-none group px-7 hover:scale-110 hover:bg-gray-950 active:scale-105 sm:w-auto"
            onClick={handleSeeMoreClick}
          >
            See More Projects
          </button>
        </motion.div>
      )}
    </section>
  );
}
