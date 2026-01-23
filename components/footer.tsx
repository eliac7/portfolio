"use client";

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()} Ilias Thalassochoritis | All rights
        reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js 16 (App Router & Server Actions), TypeScript, Tailwind
        CSS, Framer Motion, React Email, Resend and love.
      </p>
      <p className="mt-2 text-[10px] text-gray-400 hidden sm:block">
        Press <kbd className="font-sans px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">⌘</kbd> + <kbd className="font-sans px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">K</kbd> to open the command palette.
      </p>
    </footer>
  );
}
