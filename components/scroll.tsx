"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FaAngleUp } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

type ScrollButtonProps = {
  thresholdHeight: number;
};

const ScrollToTop: React.FC<ScrollButtonProps> = ({ thresholdHeight }) => {
  const controls = useAnimation();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage >= thresholdHeight) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.2, ease: "easeInOut" },
        });
      } else {
        controls.start({
          x: "100%",
          opacity: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, thresholdHeight]);

  const buttonClasses = `
    fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-36 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white shadow-lg transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-slate-900 sm:bottom-44 sm:right-5
  `;

  return (
    <motion.button
      className={buttonClasses}
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      transition={{ duration: 0, ease: "easeInOut" }}
      aria-label="Scroll back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
      }}
    >
      <FaAngleUp />
    </motion.button>
  );
};

export default ScrollToTop;
