import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ilias Thalassochoritis | Page not found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100 ">
          404
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          Oops! Page not found.
        </p>
        <Link href="/" className="hover:underline">
          Go back home
        </Link>
      </div>
    </section>
  );
}
