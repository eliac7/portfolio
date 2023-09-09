"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import type { SectionName } from "@/lib/types";

import { links } from "@/lib/data";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const findHashFromSectionName = (sectionName: string) => {
  const link = links.find((link) => link.name === sectionName);
  return link ? link.hash : "";
};

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [activeHash, setActiveHash] = useState<string>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const newHash = findHashFromSectionName(activeSection);

    // If it's the initial load or the hash has changed, update the URL
    if (isInitialLoad || (newHash && newHash !== activeHash)) {
      setActiveHash(newHash);
      router.push(newHash, { scroll: true });

      // If it's the initial load, set isInitialLoad to false after updating the URL
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    }
  }, [activeSection, pathname, isInitialLoad, activeHash, router]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
