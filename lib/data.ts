import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiMeepleArmy } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

import portfolioContent from "@/lib/portfolio-content";
import digitalschool from "@/public/projects/digitalschool.webp";
import elot from "@/public/projects/elot.webp";
import pharmafinder from "@/public/projects/pharmafinder.webp";
import vaporkey from "@/public/projects/vaporkey.webp";
import wizyhrm from "@/public/projects/wizyhrm.webp";
import type { ProjectDataItem } from "@/lib/types";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return `${monthNames[month - 1]} ${year}`;
}

function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} - ${end === null ? "Present" : formatMonth(end)}`;
}

const timelinePresentation = [
  { kind: "employment", id: "voda-ai", icon: React.createElement(CgWorkAlt) },
  { kind: "employment", id: "pharmafinder", icon: React.createElement(CgWorkAlt) },
  { kind: "employment", id: "wizy", icon: React.createElement(CgWorkAlt) },
  { kind: "employment", id: "product-rd", icon: React.createElement(CgWorkAlt) },
  {
    kind: "employment",
    id: "hellenic-army-it-corps",
    icon: React.createElement(GiMeepleArmy),
  },
  {
    kind: "education",
    id: "computer-engineering-uth",
    icon: React.createElement(LuGraduationCap),
  },
  { kind: "employment", id: "crowdpolicy", icon: React.createElement(CgWorkAlt) },
] as const;

export const experiencesData = timelinePresentation.map((presentation) => {
  if (presentation.kind === "employment") {
    const item = portfolioContent.employment.find(({ id }) => id === presentation.id);
    if (!item) throw new Error(`Missing employment content: ${presentation.id}`);
    return {
      id: item.id,
      title: item.title,
      location: item.location,
      description: item.description,
      date: formatPeriod(item.start, item.end),
      icon: presentation.icon,
    };
  }

  const item = portfolioContent.education.find(({ id }) => id === presentation.id);
  if (!item) throw new Error(`Missing education content: ${presentation.id}`);
  return {
    id: item.id,
    title: item.title,
    location: item.institution,
    description: item.description,
    date: formatMonth(item.graduated),
    icon: presentation.icon,
  };

});

const projectPresentation = {
  wizyhrm: {
    imageUrl: wizyhrm,
    imageClassName: "object-left sm:scale-110 sm:translate-y-4",
  },
  "digital-school": { imageUrl: digitalschool, imageClassName: "object-top" },
  "elot-e-shop": { imageUrl: elot },
  pharmafinder: { imageUrl: pharmafinder, imageClassName: "object-top" },
  vaporkey: { imageUrl: vaporkey },
} as const;

export const projectsData: ProjectDataItem[] = portfolioContent.projects.map((project) => {
  const presentation = projectPresentation[project.id as keyof typeof projectPresentation];
  if (!presentation) throw new Error(`Missing project presentation: ${project.id}`);
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    tags: project.technologies,
    imageUrl: presentation.imageUrl,
    link: project.url ?? undefined,
    github: project.github_url ?? undefined,
    imageClassName: "imageClassName" in presentation ? presentation.imageClassName : undefined,
  };
});

export const skillsData = portfolioContent.skills.flatMap(({ items }) => items);

export const skillsGroups = portfolioContent.skills;
