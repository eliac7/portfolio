import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        waving: {
          "0%, 100%": {
            transform: "rotate(12deg)",
            transformOrigin: "bottom",
          },
          "50%": {
            transform: "rotate(-12deg)",
            transformOrigin: "bottom",
          },
        },
        bubbleMove: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      animation: {
        waving: "waving 0.5s infinite",
        bubbleMove: "bubbleMove 6s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animation-delay")],
};

export default config;
