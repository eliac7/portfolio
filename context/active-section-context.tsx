"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    setActiveHash(findHashFromSectionName(activeSection));
    window.history.pushState(null, "", activeHash);
  }, [activeSection, activeHash]);

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
