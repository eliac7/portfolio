import { links } from "@/lib/data";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

type ImageProps = {
  src: StaticImageData;
  alt: string;
  quality?: number;
  className?: string;
};

export type ProjectDataItem = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: ImageProps["src"];
  link?: string;
  github?: string;
};
