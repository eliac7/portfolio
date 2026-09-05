import Link from "next/link";

export default function SectionDivider() {
  return (
    <div className="hidden w-full max-w-6xl items-center gap-4 pb-24 sm:flex">
      <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
      <Link
        href="#projects"
        className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:text-indigo-300"
      >
        Selected work
      </Link>
      <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
    </div>
  );
}
