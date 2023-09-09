import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps {
  isTurnstileVerified: boolean;
}

const LoadingSpinner = () => (
  <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin" />
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
      className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 dark:disabled:bg-gray-200 dark:disabled:bg-opacity-30 dark:border-gray-700 dark:not:disabled:border ${
        isDisabled
          ? "disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:scale-100"
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
