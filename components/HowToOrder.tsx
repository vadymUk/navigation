import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { orderSteps } from "@/data/order-steps";

export function HowToOrder() {
  return (
    <section id="how-to-order" className="section-padding bg-surface">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Як замовити"
            subtitle="Три простих кроки до вашого готового планшета для TIR"
          />
        </ScrollReveal>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div
            className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block"
            aria-hidden="true"
          />

          {orderSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 120}>
              <article className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-transform duration-300 hover:scale-105 sm:mb-5 sm:h-14 sm:w-14 sm:text-xl">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <CtaBanner
            variant="subtle"
            title="Готові почати?"
            description="Зв'яжіться з нами — узгодимо комплектацію та відповімо на всі питання."
            buttonText="Замовити планшет"
          />
        </div>
      </Container>
    </section>
  );
}
