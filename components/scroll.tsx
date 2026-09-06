"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FaAngleUp } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useFooterVisibility } from "@/hooks/useFooterVisibility";

type ScrollButtonProps = {
  thresholdHeight: number;
};

const ScrollToTop: React.FC<ScrollButtonProps> = ({ thresholdHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isFooterVisible = useFooterVisibility();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateVisibility = () => {
      animationFrameId = null;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = totalHeight > 0
        ? (window.scrollY / totalHeight) * 100
        : 0;
      const nextVisibility = scrollPercentage >= thresholdHeight;

      setIsVisible((currentVisibility) =>
        currentVisibility === nextVisibility ? currentVisibility : nextVisibility,
      );
    };

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [thresholdHeight]);

  if (!isVisible || isFooterVisible) return null;

  const containerClasses = `
    fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-36 z-40 sm:bottom-44 sm:right-5
  `;
  const buttonClasses = `
    flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-slate-900
  `;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={containerClasses}
          initial={{ opacity: 0, scale: 0.88, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            className={buttonClasses}
            aria-label="Scroll back to top"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <FaAngleUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
