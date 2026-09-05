type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
      {children}
    </h2>
  );
}
