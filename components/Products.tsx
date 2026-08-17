import Image from "next/image";
import { Wifi, Signal, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Планшети Samsung Galaxy Tab"
            subtitle="Оберіть модель для вашої кабіни та маршрутів по Європі"
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/5">
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-surface">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105 sm:p-6"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
                        product.lte
                          ? "bg-accent text-accent-foreground"
                          : "bg-surface-elevated/90 text-foreground backdrop-blur-sm",
                      )}
                    >
                      {product.lte ? (
                        <>
                          <Signal size={12} />
                          LTE
                        </>
                      ) : (
                        <>
                          <Wifi size={12} />
                          Wi-Fi
                        </>
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold leading-tight text-foreground sm:text-xl">
                    {product.shortName}
                  </h3>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {product.name}
                  </p>

                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-accent/5 px-3 py-2.5">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium leading-snug text-foreground">
                      {product.mainAdvantage}
                    </p>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.highlights?.map((h) => (
                      <span
                        key={h}
                        className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-muted">
                    Пам&apos;ять: {product.memory}
                  </p>

                  <p className="mt-3 text-xl font-bold text-accent sm:text-2xl">
                    {product.price}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
                    <Button href="#contact" size="md" className="w-full min-h-[44px]">
                      Замовити
                    </Button>
                    <Button
                      href="#applications"
                      variant="outline"
                      size="md"
                      className="w-full min-h-[44px]"
                    >
                      Програми
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <CtaBanner
            title="Не впевнені, яку модель обрати?"
            description="Зателефонуйте — допоможемо підібрати планшет під ваш автомобіль та маршрути."
            buttonText="Отримати консультацію"
          />
        </div>
      </Container>
    </section>
  );
}
