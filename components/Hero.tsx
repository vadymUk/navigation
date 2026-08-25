import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Map,
  Truck,
  Tv,
  Package,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactLinks, contacts } from "@/data/contacts";

const valueProps = [
  { icon: Map, label: "Навігація для TIR" },
  { icon: Truck, label: "Програми для водія" },
  { icon: Tv, label: "Фільми та TV" },
  { icon: Package, label: "Готовий комплект" },
];

const installedApps = [
  "Sygic Truck",
  "iGO Primo NextGen",
  "CamSam plus",
  "Youtube Premium без реклами",
  "+7 програм",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:-right-32 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-10 py-10 sm:py-14 lg:flex-row lg:gap-14 lg:py-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-fade-in-up mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:px-4 sm:text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="truncate">
              Готовий планшетний комплект для TIR
            </span>
          </div>

          <h1 className="animate-fade-in-up text-[1.65rem] font-bold leading-[1.15] tracking-tight text-foreground min-[375px]:text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] [animation-delay:80ms]">
            Samsung Galaxy Tab для далекобійників по Європі
          </h1>

          <p className="animate-fade-in-up mx-auto mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted [animation-delay:160ms] sm:mt-5 sm:text-lg lg:mx-0">
            Купуєте не просто планшет — а{" "}
            <strong className="font-semibold text-foreground">
              готовий навігаційно-мультимедійний комплект
            </strong>{" "}
            для кабіни вантажівки. Програми вже встановлені — підключай і їдь.
          </p>

          <div className="animate-fade-in-up mt-6 grid grid-cols-2 gap-2 [animation-delay:240ms] sm:gap-3 lg:max-w-lg">
            {valueProps.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface-elevated/60 px-3 py-2.5 text-left transition-colors hover:border-accent/30 sm:px-4 sm:py-3"
              >
                <Icon
                  size={16}
                  className="shrink-0 text-accent sm:size-[18px]"
                />
                <span className="text-xs font-medium leading-tight text-foreground sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up mt-5 flex flex-wrap justify-center gap-2 [animation-delay:320ms] lg:justify-start">
            {installedApps.map((app) => (
              <span
                key={app}
                className="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium text-muted sm:text-sm"
              >
                {app}
              </span>
            ))}
          </div>

          <div className="animate-fade-in-up mt-8 flex flex-col gap-3 [animation-delay:400ms] sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href="#contact"
              size="lg"
              className="cta-glow w-full min-h-[52px] text-base sm:w-auto sm:min-w-[220px]"
            >
              Замовити планшет
              <ArrowRight size={18} />
            </Button>
            <Button
              href="#products"
              variant="secondary"
              size="lg"
              className="w-full min-h-[52px] sm:w-auto"
            >
              Подивитися планшети
            </Button>
          </div>

          <div className="animate-fade-in-up mt-5 space-y-2 [animation-delay:480ms]">
            <p className="text-xs text-muted sm:text-sm">
              <span className="font-medium text-foreground">Як замовити:</span>{" "}
              оберіть модель → зв&apos;яжіться з нами → отримайте готовий
              комплект
            </p>
            <a
              href={contactLinks.phone}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              <Phone size={16} />
              {contacts.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up relative flex w-full max-w-md flex-1 items-center justify-center [animation-delay:200ms] lg:max-w-lg">
          <div className="relative w-full">
            <div
              className="absolute inset-0 rounded-3xl bg-accent/15 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/images/Tab11lte4-64.jpg"
              alt="Планшет Samsung Galaxy Tab у кабіні вантажівки з навігацією"
              width={600}
              height={500}
              priority
              className="relative z-10 w-full drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted/60">
        <a
          href="#benefits"
          aria-label="Прокрутити далі"
          className="flex flex-col items-center gap-1 transition-colors hover:text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest">Далі</span>
          <ChevronDown size={20} className="animate-float" />
        </a>
      </div>
    </section>
  );
}
