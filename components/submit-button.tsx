import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps {
  isTurnstileVerified: boolean;
}

const LoadingSpinner = () => (
  <svg
    className="w-6 h-6 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const SubmitIcon = ({
  pending,
  isVerified,
}: {
  pending: boolean;
  isVerified: boolean;
}) => {
  const baseClass = "text-xs opacity-70";
  const transitionClass =
    "transition-all group-hover:translate-x-1 group-hover:-translate-y-1";
  const disabledClass = "disabled:opacity-50";

  const className = [
    baseClass,
    !pending && isVerified ? transitionClass : "",
    pending || !isVerified ? disabledClass : "",
  ]
    .join(" ")
    .trim();

  return <FaPaperPlane className={className} />;
};

export default function SubmitButton({
  isTurnstileVerified,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isDisabled = pending || !isTurnstileVerified;

  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-full bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10  dark:border-gray-700 dark:not:disabled:border ${
        isDisabled
          ? "disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:scale-100 dark:disabled:bg-gray-200 dark:disabled:bg-opacity-30"
          : ""
      }`}
      disabled={isDisabled}
    >
      {pending ? (
        <LoadingSpinner />
      ) : (
        <>
          Submit{" "}
          <SubmitIcon pending={pending} isVerified={isTurnstileVerified} />
        </>
      )}
    </button>
  );
}
