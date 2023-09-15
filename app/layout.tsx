import { Comfortaa } from "next/font/google";
import { Metadata } from "next";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import ThemeSwitch from "@/components/theme-switch";

import "@/app/styles/globals.css";
import ScrollToTop from "@/components/scroll";
import CustomToaster from "@/components/custom-toaster";

const comfortaa = Comfortaa({
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilias Thalassochoritis | Full Stack Web Developer",
  description:
    "Full-stack Web Developer passionate about creating interactive applications!",
  openGraph: {
    title: "Ilias Thalassochoritis | Full Stack Web Developer",
    description:
      "Full-stack Web Developer passionate about creating interactive applications!",
    url: "https://iliasdev.com",
    locale: "en_US",
    type: "website",
    siteName: "Ilias Thalassochoritis | Full Stack Web Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${comfortaa.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        <div className="animate-bubbleMove bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="animate-bubbleMove animation-delay-300 bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <CustomToaster />
            <ScrollToTop thresholdHeight={50} />
            <ThemeSwitch />
            <GoogleAnalytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
