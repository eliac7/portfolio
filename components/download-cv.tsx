import { useState } from "react";
import toast from "react-hot-toast";
import { HiDownload } from "react-icons/hi";
import { event } from "@/gtag";
import clsx from "clsx";

const DOWNLOAD_CV_KEY = process.env.NEXT_PUBLIC_DOWNLOAD_CV_KEY;

export default function DownloadCV() {
  const [code, setCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const isCVReady = true;
  const useCode = false;

  const downloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Ilias_Thalassochoritis__CV.pdf";
    downloadLink.download = "Ilias_Thalassochoritis__CV.pdf";
    downloadLink.click();
    setDownloaded(true);
    setShowInput(false);
    toast.success("Downloading CV...");
  };

  const handleDownload = () => {
    if (isCVReady) {
      if (!downloaded) {
        if (useCode) {
          // If useCode is true, show input for the code
          setShowInput(true);
        } else {
          // If useCode is false, directly download the CV
          downloadCV();
        }
      } else {
        // If already downloaded once, download again without checking
        downloadCV();
      }
    } else {
      toast.error("CV is coming soon", {
        id: "cv-coming-soon",
      });
    }
  };

  const handleCV = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!useCode || code === DOWNLOAD_CV_KEY) {
      setIsValidCode(true);
      downloadCV();
      event({
        action: "download_cv",
        category: "Resume",
        label: "Download CV Button",
        value: !useCode || (useCode && code === DOWNLOAD_CV_KEY) ? "1" : "0",
      });
      toast.success("Downloading CV...");
    } else {
      setIsValidCode(false);
      toast.error("Invalid code", {
        id: "invalid-code",
      });
      setCode("");
      // Track the attempt to download the CV even if the code is invalid
      event({
        action: "download_cv",
        category: "Resume",
        label: "Download CV Button",
        value: "0",
      });
    }
  };

  const renderDownloadButton = () => (
    <button
      onClick={handleDownload}
      className={clsx(
        "transition flex items-center justify-center w-full gap-2 py-3 bg-white rounded-full outline-hidden cursor-pointer px-7 hover:scale-110 borderBlack dark:bg-white/10 sm:w-auto group-hover:translate-y-1",
        !isCVReady && "opacity-50 cursor-not-allowed!"
      )}
    >
      Download CV <HiDownload />
    </button>
  );

  return (
    <>
      {!showInput && renderDownloadButton()}

      {showInput && useCode && (
        <div className="w-full sm:w-auto">
          <form onSubmit={handleCV}>
            <input
              type="text"
              name="code"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="transition flex items-center justify-center w-full sm:w-56 gap-2 py-3 bg-white rounded-full outline-hidden cursor-auto group px-7 borderBlack dark:bg-white/10"
              placeholder="Enter given code"
            />
          </form>
        </div>
      )}
    </>
  );
}
