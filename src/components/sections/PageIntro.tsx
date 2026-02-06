import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function PageIntro({ title, subtitle, className, centered = false }: PageIntroProps) {
  return (
    <div className={cn("section-spacing", className)}>
      <div className={cn("container-content", centered && "text-center")}>
        <h1 className="text-balance animate-fade-in">{title}</h1>
        {subtitle && (
          <p
            className={cn(
              "mt-6 text-lg md:text-xl text-muted-foreground max-w-text animate-slide-up",
              centered && "mx-auto"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
