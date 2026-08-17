import {
  Tablet,
  AppWindow,
  MapPinned,
  Film,
  Truck,
  Download,
  CarFront,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Tablet,
    title: "Планшет Samsung",
    description: "Оригінальний планшет Galaxy Tab обраної моделі",
  },
  {
    icon: AppWindow,
    title: "Попередньо встановлені програми",
    description: "Мінімальний пакет застосунків для навігації та роботи",
  },
  {
    icon: MapPinned,
    title: "Налаштована навігація",
    description: "Готові до використання навігаційні рішення для TIR",
  },
  {
    icon: Film,
    title: "Мультимедійні програми",
    description: "Застосунки для відео та TV через підтримуваний контент",
  },
  {
    icon: Truck,
    title: "Програми для водіїв",
    description: "Інструменти для тахографа, паркінгів та сервісів",
  },
  {
    icon: Download,
    title: "Додаткові програми",
    description: "Можливість встановлення інших застосунків за запитом",
  },
  {
    icon: CarFront,
    title: "Кріплення (за бажанням)",
    description: "Підберемо кріплення під ваш автомобіль та планшет",
  },
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
        aria-hidden="true"
      />
      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            title="Що ви отримуєте"
            subtitle="Повний комплект для роботи та відпочинку в дорозі — не просто планшет"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 60}>
              <div className="group h-full rounded-2xl border border-border bg-surface-elevated/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <item.icon size={22} />
                </div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:mt-10 sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check size={24} />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  Готовий до використання одразу після отримання
                </p>
                <p className="mt-1 text-sm text-muted">
                  Підключіть планшет у кабіні — навігація, програми для водія та
                  мультимедіа вже налаштовані.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
