import { Manrope } from "next/font/google";
import { Metadata } from "next";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import ThemeSwitch from "@/components/theme-switch";

import "./styles/globals.css";
import ScrollToTop from "@/components/scroll";
import CustomToaster from "@/components/custom-toaster";
import Chatbot from "@/components/chatbot";
import CommandPalette from "@/components/command-palette";
import portfolioContent from "@/lib/portfolio-content";

const manrope = Manrope({
  subsets: ["greek", "latin", "latin-ext"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ilias.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${portfolioContent.profile.name} | ${portfolioContent.profile.headline}`,
  description: portfolioContent.profile.seo_description,
  openGraph: {
    title: `${portfolioContent.profile.name} | ${portfolioContent.profile.headline}`,
    description: portfolioContent.profile.seo_description,
    url: "/",
    siteName: `${portfolioContent.profile.name} | ${portfolioContent.profile.headline}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${portfolioContent.profile.name} | ${portfolioContent.profile.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioContent.profile.name} | ${portfolioContent.profile.headline}`,
    description: portfolioContent.profile.seo_description,
    images: [`${baseUrl}/opengraph-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth!" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${manrope.className} relative bg-slate-50 text-slate-950 transition-colors dark:bg-gray-900 dark:text-slate-50`}
      >
        <div className="site-background pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <CustomToaster />
            <ScrollToTop thresholdHeight={50} />
            <ThemeSwitch />
            <Chatbot />
            <CommandPalette />
            <GoogleAnalytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
