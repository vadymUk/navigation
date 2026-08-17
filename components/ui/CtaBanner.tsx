import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "subtle";
  className?: string;
};

export function CtaBanner({
  title,
  description,
  buttonText = "Замовити планшет",
  buttonHref = "#contact",
  variant = "default",
  className,
}: CtaBannerProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "rounded-2xl border p-6 text-center sm:p-8",
          variant === "default"
            ? "border-accent/25 bg-gradient-to-br from-accent/10 via-surface-elevated to-surface-elevated"
            : "border-border bg-surface-elevated",
          className,
        )}
      >
        <h3 className="text-lg font-bold text-foreground sm:text-xl">
          {title}
        </h3>
        {description && (
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
        <Button href={buttonHref} size="lg" className="mt-5 w-full sm:w-auto">
          {buttonText}
          <ArrowRight size={18} />
        </Button>
      </div>
    </ScrollReveal>
  );
}
