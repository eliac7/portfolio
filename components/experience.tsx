"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "@/components/section-heading";
import { useTheme } from "next-themes";

import { useSectionInView } from "@/hooks/useSectionInView";

import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { resolvedTheme } = useTheme();




  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="" animate={false}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                resolvedTheme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                resolvedTheme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                resolvedTheme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize text-gray-950 dark:text-white/90">
              {item.title}
            </h3>
            <p className="font-normal mt-0! text-gray-700 dark:text-white/70">
              {item.location}
            </p>
            <p className="mt-2! font-normal! text-gray-700 dark:text-white/75 leading-relaxed text-sm">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}