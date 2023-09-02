"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="mb-20 scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
