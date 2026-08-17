import { Navigation, Truck, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  applications,
  appCategoryMeta,
  applicationCategoryOrder,
} from "@/data/applications";
import type { ApplicationCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<ApplicationCategory, typeof Navigation> = {
  navigation: Navigation,
  driver: Truck,
  media: Clapperboard,
};

const categoryAccent: Record<ApplicationCategory, string> = {
  navigation: "border-blue-500/30 bg-blue-500/5",
  driver: "border-amber-500/30 bg-amber-500/5",
  media: "border-purple-500/30 bg-purple-500/5",
};

const categoryIconColor: Record<ApplicationCategory, string> = {
  navigation: "text-blue-400 bg-blue-400/15",
  driver: "text-amber-400 bg-amber-400/15",
  media: "text-purple-400 bg-purple-400/15",
};

function getAppsByCategory(category: ApplicationCategory) {
  return applications.filter((app) => app.category === category);
}

export function Applications() {
  return (
    <section id="applications" className="section-padding bg-surface">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Мінімальний пакет програм"
            subtitle="Попередньо встановлені застосунки — розділені за категоріями для зручності"
          />
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12">
          {applicationCategoryOrder.map((category, catIndex) => {
            const meta = appCategoryMeta[category];
            const CatIcon = categoryIcons[category];
            const apps = getAppsByCategory(category);

            return (
              <ScrollReveal key={category} delay={catIndex * 100}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border",
                    categoryAccent[category],
                  )}
                >
                  <div className="flex flex-col gap-3 border-b border-border/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                          categoryIconColor[category],
                        )}
                      >
                        <CatIcon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground sm:text-base">
                          {meta.label}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted sm:text-sm">
                          {meta.description}
                        </p>
                      </div>
                    </div>
                    <span className="w-fit rounded-full bg-surface-elevated px-3 py-1 text-xs font-medium text-muted">
                      {apps.length} програм
                    </span>
                  </div>

                  <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:grid-cols-3">
                    {apps.map((app) => (
                      <article
                        key={app.id}
                        className="rounded-xl border border-border/60 bg-surface-elevated/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md"
                      >
                        <h4 className="font-semibold text-foreground">
                          {app.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {app.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-border bg-surface-elevated p-5 text-center sm:p-6">
            <p className="text-sm text-muted sm:text-base">
              За бажанням клієнта можемо встановити додаткові програми.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted/80 sm:text-sm">
              Сторонні програми є власністю їхніх розробників. Деякі сервіси можуть
              вимагати окремої підписки або ліцензії. Мультимедійні застосунки
              працюють із підтримуваним контентом та плейлистами.
            </p>
            <Button href="#contact" variant="secondary" className="mt-4">
              Запитати про додаткові програми
            </Button>
          </div>

          <CtaBanner
            variant="subtle"
            title="Потрібна інша конфігурація програм?"
            description="Розкажіть, які застосунки вам потрібні — підготуємо індивідуальний пакет."
            buttonText="Обговорити комплектацію"
          />
        </div>
      </Container>
    </section>
  );
}
