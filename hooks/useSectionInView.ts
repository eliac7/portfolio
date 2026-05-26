"use client";

import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

import { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-45% 0px -45% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
