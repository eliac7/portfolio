"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="hidden w-1 h-16 my-24 bg-gray-200 rounded-full sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [1, 0.7, 1],
        y: [0, -10, 0],
      }}
      transition={{
        delay: 0.125,
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
}
