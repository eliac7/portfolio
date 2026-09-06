import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps {
  isTurnstileVerified: boolean;
  isSubmitting: boolean;
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
  isSubmitting,
}: SubmitButtonProps) {
  const isDisabled = isSubmitting || !isTurnstileVerified;

  return (
    <button
      type="submit"
      className={`group flex h-12 w-full items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-6 py-3 text-sm font-semibold text-white outline-hidden transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-focus active:scale-99 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent ${
        isDisabled
          ? "disabled:scale-100"
          : ""
      }`}
      disabled={isDisabled}
    >
      {isSubmitting ? (
        <LoadingSpinner />
      ) : (
        <>
          Send message{" "}
          <SubmitIcon pending={isSubmitting} isVerified={isTurnstileVerified} />
        </>
      )}
    </button>
  );
}
