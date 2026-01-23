"use client";

import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function CustomToaster() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const theme = mounted ? resolvedTheme : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
  };

  const position = isMobile() ? "bottom-center" : "top-right";
  const backgroundColor =
    isMobile() && theme === "dark"
      ? "#1f2937"
      : theme === "light"
      ? "#f3f4f6"
      : "rgba(255, 255, 255, 0.05)";

  return (
    <Toaster
      position={position}
      toastOptions={{
        style: {
          background: backgroundColor,
          color: theme === "light" ? "#1f2937" : "#f3f4f6",
        },
      }}
    />
  );
}
