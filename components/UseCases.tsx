import { DynamicIcon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/data/use-cases";

export function UseCases() {
  return (
    <section id="use-cases" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Для чого це далекобійнику?"
            subtitle="Реальні сценарії використання планшета в роботі та під час відпочинку"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <ScrollReveal key={useCase.id} delay={index * 80}>
              <article className="group flex h-full gap-4 rounded-2xl border border-border bg-surface-elevated p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                  <DynamicIcon name={useCase.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {useCase.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{useCase.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
