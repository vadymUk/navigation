"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { QuickContactButtons } from "@/components/QuickContactButtons";
import { contacts, contactLinks } from "@/data/contacts";
import { cn } from "@/lib/utils";
import { faqItems } from "@/data/faq";

function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-colors hover:border-accent/20"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full min-h-[56px] items-center justify-between gap-4 p-4 text-left sm:p-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-foreground sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={cn(
                  "shrink-0 text-muted transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Замовити планшет"
            subtitle="Заповніть форму або зв'яжіться з нами напряму — відповімо та допоможемо підібрати комплектацію"
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-surface-elevated p-5 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                Швидкий контакт
              </h3>
              <p className="mt-2 text-sm text-muted">
                Натисніть кнопку — ми відповімо та допоможемо підібрати
                комплектацію.
              </p>

              <div className="mt-6">
                <QuickContactButtons />
              </div>

              <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted">
                <p>
                  <span className="font-medium text-foreground">Телефон:</span>{" "}
                  <a href={contactLinks.phone} className="hover:text-accent">
                    {contacts.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Viber:</span>{" "}
                  <a href={contactLinks.viber} className="hover:text-accent">
                    {contacts.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">WhatsApp:</span>{" "}
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {contacts.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-5 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-foreground sm:text-xl">
                Форма замовлення
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Часті питання"
            subtitle="Відповіді на найпоширеніші запитання про планшети та комплектацію"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
