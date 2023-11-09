"use client";

import { useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";

import { BirthdayCalculator } from "@/lib/helpers";
import { experiencesData } from "@/lib/data";

import SectionHeading from "@/components/section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  const [birthdayData, setBirthdayData] = useState(BirthdayCalculator());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBirthdayData(BirthdayCalculator());
    }, 1000);

    setIsClient(true);

    return () => clearInterval(intervalId);
  }, []);

  // Render content only when isClient is true to avoid SSR errors
  if (!isClient) {
    return null;
  }

  const updatedExperiencesData = experiencesData.map((experience) => {
    if (experience.title === "Hello World") {
      return {
        ...experience,
        description: `From the very moment I uttered "Hello World", it set the course for the journey I'm on today. It's been ${birthdayData.daysOld} days, ${birthdayData.hoursOld} hours, ${birthdayData.minutesOld} minutes, and ${birthdayData.secondsOld} fleeting seconds. In the grander scheme of things, that's about ${birthdayData.age} years. Time flies, doesn't it? Every tick of the clock, every passing second, shapes my narrative and drives me to learn, grow, and innovate even more.`,
      };
    }
    return experience;
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={false}>
        {updatedExperiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            dateClassName={`${index % 2 === 0 ? "ml-5" : "mr-5"}`}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize text-gray-950 dark:text-white">
              {item.title}
            </h3>
            <p className="italic !mt-1 !text-sm">{item.location}</p>
            <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75 !leading-relaxed">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
