import toast from "react-hot-toast";
import { LuDownload } from "react-icons/lu";
import { event } from "@/gtag";

export default function DownloadCV() {
  const downloadCV = () => {
    const filename = "Ilias_Thalassochoritis_Software_Engineer.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = `/${filename}`;
    downloadLink.download = filename;
    downloadLink.click();

    toast.success("Downloading CV...");

    event({
      action: "download_cv",
      category: "Resume",
      label: "Download CV Button - Software Engineer",
      value: "1",
    });
  };

  return (
    <button
      type="button"
      aria-label="Download Ilias Thalassochoritis CV"
      onClick={downloadCV}
      className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300 sm:w-auto"
    >
      <span>Download CV</span>
      <LuDownload aria-hidden="true" className="h-4 w-4 opacity-75" />
    </button>
  );
}
