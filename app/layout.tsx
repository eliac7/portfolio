import { Comfortaa } from "next/font/google";
import { Metadata } from "next";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import ThemeSwitch from "@/components/theme-switch";

import "@/app/styles/globals.css";
import ScrollToTop from "@/components/scroll";
import CustomToaster from "@/components/custom-toaster";
import Chatbot from "@/components/chatbot";

const comfortaa = Comfortaa({
  subsets: ["latin-ext"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://iliasdev.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ilias Thalassochoritis | Full Stack Engineer",
  description:
    "Full Stack Engineer building scalable SaaS platforms and high-performance web applications.",
  openGraph: {
    title: "Ilias Thalassochoritis | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable SaaS platforms and high-performance web applications.",
    url: "/",
    siteName: "Ilias Thalassochoritis | Full Stack Engineer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ilias Thalassochoritis | Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilias Thalassochoritis | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable SaaS platforms and high-performance web applications.",
    images: [`${baseUrl}/opengraph-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${comfortaa.className} bg-stone-100 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        <div className="animate-bubbleMove bg-[#fbe2e3] absolute -top-24 -z-10 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 dark:bg-[#946263] will-change-transform"></div>
        <div className="animate-bubbleMove animation-delay-300 bg-[#dbd7fb] absolute -top-4 -z-10 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#676394] will-change-transform"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <CustomToaster />
            <ScrollToTop thresholdHeight={50} />
            <ThemeSwitch />
            <Chatbot />
            <GoogleAnalytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
