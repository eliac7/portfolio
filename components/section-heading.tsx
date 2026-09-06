type SectionHeadingProps = {
  children: React.ReactNode;
  withMargin?: boolean;
};

export default function SectionHeading({
  children,
  withMargin = true,
}: SectionHeadingProps) {
  return (
    <h2 className={`${withMargin ? "mb-10" : "mb-0"} text-center text-3xl font-semibold leading-[1.2] tracking-tight text-slate-950 dark:text-white sm:text-4xl`}>
      {children}
    </h2>
  );
}
