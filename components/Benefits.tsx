import { DynamicIcon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/benefits";

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-surface">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Чому обирають нас"
            subtitle="Готове рішення для навігації та мультимедіа у вантажному автомобілі"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.id} delay={index * 80}>
              <article className="group h-full rounded-2xl border border-border bg-surface-elevated p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                  <DynamicIcon name={benefit.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
