import { DynamicIcon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mountOptions } from "@/data/mounts";

export function Mounts() {
  return (
    <section id="mounts" className="section-padding bg-surface">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Кріплення для планшета"
            subtitle="Безпечна фіксація планшета в кабіні вантажівки під час руху"
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {mountOptions.map((mount, index) => (
            <ScrollReveal key={mount.id} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-border bg-surface-elevated p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <DynamicIcon name={mount.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {mount.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {mount.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <CtaBanner
            title="Підберемо кріплення під ваш автомобіль"
            description="Повідомте модель планшета та тип кабіни — запропонуємо сумісне рішення."
            buttonText="Підібрати кріплення"
          />
        </div>
      </Container>
    </section>
  );
}
