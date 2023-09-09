import { Comfortaa } from "next/font/google";
import { Toaster } from "react-hot-toast";

import clsx from "clsx";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import usePathCheck from "@/hooks/usePathCheck";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

import "@/app/styles/globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Ilias Thalassochoritis | Full Stack Web Developer",
  description:
    "A Full Stack Web Developer passionate about creating interactive applications!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSpecificRoute = usePathCheck("/_not-found");

  console.log(isSpecificRoute);

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={clsx(
          `${comfortaa.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors `,
          isSpecificRoute ? null : "pt-28 sm:pt-36"
        )}
      >
        <GoogleAnalytics />
        <div className="animate-bubbleMove bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="animate-bubbleMove animation-delay-300 bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {isSpecificRoute ? null : <Header />}
            {children}
            {isSpecificRoute ? null : <Footer />}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
