import toast from "react-hot-toast";
import { HiDownload } from "react-icons/hi";
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
      onClick={downloadCV}
      className="group flex items-center justify-center gap-2 py-3 px-7 bg-white rounded-full outline-hidden cursor-pointer transition borderBlack dark:bg-white/10 hover:scale-110 active:scale-105"
    >
      Download CV{" "}
      <HiDownload />
    </button>
  );
}