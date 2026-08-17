import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trustItems } from "@/data/trust";

export function TrustBar() {
  return (
    <section
      aria-label="Гарантії та переваги сервісу"
      className="border-y border-border/60 bg-surface/80 py-6 sm:py-8"
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80}>
              <div className="flex items-start gap-3 rounded-xl p-2 sm:p-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
