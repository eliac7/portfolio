"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export const metadata = {
  title: "Ilias Thalassochoritis | Not Found",
};

export default function NotFound() {
  useSelectedLayoutSegment("not-found");

  // using tailwind, center a text inside a div and make it full screen
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Page not found</p>
    </div>
  );
}
