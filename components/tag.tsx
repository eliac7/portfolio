import type { ReactNode } from "react";
import clsx from "clsx";

export type TagVariant = "accent" | "muted";

const tagBaseClassName =
  "inline-flex shrink-0 whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-medium leading-5";

const tagVariantClassNames: Record<TagVariant, string> = {
  accent:
    "border-accent-border/70 bg-accent-wash text-accent-text dark:border-accent-focus/20 dark:bg-accent-deep/20 dark:text-accent-focus",
  muted:
    "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
};

export function getTagClassName(variant: TagVariant = "muted", className?: string) {
  return clsx(tagBaseClassName, tagVariantClassNames[variant], className);
}

type TagProps = {
  children: ReactNode;
  className?: string;
  variant?: TagVariant;
};

export default function Tag({ children, className, variant = "muted" }: TagProps) {
  return <span className={getTagClassName(variant, className)}>{children}</span>;
}
