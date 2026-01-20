import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { HiDownload, HiChevronDown } from "react-icons/hi";
import { event } from "@/gtag";
import clsx from "clsx";

export default function DownloadCV() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const cvOptions = [
    {
      label: "Frontend Developer",
      filename: "Ilias_Thalassochoritis_Frontend_CV.pdf",
      id: "frontend",
    },
    {
      label: "Full Stack Developer",
      filename: "Ilias_Thalassochoritis_FullStack_CV.pdf",
      id: "fullstack",
    },
  ];

  const downloadCV = (option: (typeof cvOptions)[0]) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `/${option.filename}`;
    downloadLink.download = option.filename;
    downloadLink.click();

    toast.success(`Downloading ${option.label} CV...`);
    setIsOpen(false);

    event({
      action: "download_cv",
      category: "Resume",
      label: `Download CV Button - ${option.label}`,
      value: "1",
    });
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "group flex items-center justify-center gap-2 py-3 px-7 bg-white rounded-full outline-hidden cursor-pointer transition borderBlack dark:bg-white/10 hover:scale-110 active:scale-105",
          isOpen && "scale-105"
        )}
      >
        Download CV{" "}
        <span className="flex items-center">
           <HiDownload className={clsx("transition-transform", isOpen ? "rotate-0" : "")} />
           <HiChevronDown className={clsx("transition-transform ml-1 text-sm", isOpen ? "rotate-180" : "")} />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-max left-1/2 -translate-x-1/2 bg-white dark:bg-gray-950 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl z-50 flex flex-col p-1">
          {cvOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => downloadCV(option)}
              className="px-6 py-3 text-left hover:bg-gray-100 dark:hover:bg-white/5 transition rounded-xl text-gray-900 dark:text-gray-100 whitespace-nowrap flex items-center gap-2 text-sm font-medium"
            >
              {option.label}
              <HiDownload className="opacity-70" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}