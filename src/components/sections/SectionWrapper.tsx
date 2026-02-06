import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "neutral" | "teal";
  spacing?: "default" | "small" | "none";
}

const backgrounds = {
  white: "bg-background",
  neutral: "bg-secondary",
  teal: "bg-brand-teal text-white",
};

const spacings = {
  default: "section-spacing",
  small: "section-spacing-sm",
  none: "",
};

export function SectionWrapper({
  children,
  className,
  background = "white",
  spacing = "default",
}: SectionWrapperProps) {
  return (
    <section className={cn(backgrounds[background], spacings[spacing], className)}>
      {children}
    </section>
  );
}
