import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const styles: Record<Variant, string> = {
  // Marigold is a light accent, so the label has to flip to ink on
  // hover — bone on --color-accent lands at about 2.3:1.
  primary:
    "bg-deep text-bone hover:bg-accent hover:text-ink transition-colors duration-300",
  secondary:
    "bg-bone text-ink border border-line hover:border-ink transition-colors duration-300",
  ghost: "text-ink hover:text-accent transition-colors duration-300",
  "outline-light":
    "border border-bone/40 text-bone hover:bg-bone hover:text-ink transition-colors duration-300",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-none px-7 py-4 text-sm font-medium tracking-wide uppercase";
  const cls = cn(base, styles[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
          <ArrowIcon />
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
        <ArrowIcon />
      </Link>
    );
  }
  return (
    <button className={cls} type="button">
      {children}
      <ArrowIcon />
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M9 1L13 5L9 9M13 5H0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
