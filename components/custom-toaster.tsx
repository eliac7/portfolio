"use client";

import { useTheme } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export default function CustomToaster() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          color: theme === "light" ? "#1f2937" : "#f3f4f6",
        },
      }}
    />
  );
}
