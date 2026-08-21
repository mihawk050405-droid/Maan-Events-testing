import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-x", className)}>{children}</div>;
}
