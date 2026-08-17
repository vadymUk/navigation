import { ArrowRight, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { contacts, contactLinks } from "@/data/contacts";
import { navigationLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="border-b border-border/60 bg-gradient-to-b from-accent/5 to-transparent py-10 sm:py-12">
        <Container>
          <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Готові замовити планшет для TIR?
            </h2>
            <p className="max-w-md text-sm text-muted sm:text-base">
              Зв&apos;яжіться з нами — підберемо модель, програми та кріплення
            </p>
            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                Замовити планшет
                <ArrowRight size={18} />
              </Button>
              <Button
                href={contactLinks.phone}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone size={18} />
                {contacts.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {brand.description}
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              {brand.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
              Розділи
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={contactLinks.phone}
                  className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs text-muted/70">Телефон</span>
                    {contacts.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.viber}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <span className="block text-xs text-muted/70">Viber</span>
                  {contacts.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <span className="block text-xs text-muted/70">WhatsApp</span>
                  {contacts.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-center text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {year} {brand.name}. Усі права захищені.
            </p>
            <p className="max-w-xl sm:text-right">
              Сторонні програми та сервіси є власністю їхніх розробників.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
