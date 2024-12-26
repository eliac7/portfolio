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
    fixed bottom-44 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
    borderBlack dark:border-white dark:border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all dark:bg-transparent dark:hover:bg-white/20
  `;

  return (
    <motion.button
      className={buttonClasses}
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      transition={{ duration: 0, ease: "easeInOut" }}
      onClick={() => {
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
      }}
    >
      <FaAngleUp />
    </motion.button>
  );
};

export default ScrollToTop;
