import { cn } from "@/lib/utils";
import { AnimatedRule, Reveal } from "@/components/motion/Reveal";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em]",
              invert ? "text-mute-dark" : "text-mute",
              align === "center" && "justify-center",
            )}
          >
            <AnimatedRule className={invert ? "bg-gold-soft" : "bg-gold"} delay={0.1} />
            <span>{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl",
            invert ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              invert ? "text-mute-dark" : "text-mute",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
