"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isOpen) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
      body.style.top = "0";
      body.style.left = "0";
      body.style.right = "0";
    } else {
      root.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
    }

    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "border-b border-border/50 bg-background/85 shadow-lg shadow-black/25 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <Container as="nav" aria-label="Головна навігація">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="relative z-50 shrink-0"
            onClick={closeMenu}
          >
            <Logo size="sm" />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              Замовити
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated/80 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-hover lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 top-0 left-0 z-40 h-screen w-screen overflow-hidden bg-background/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-full max-h-screen flex-col overflow-y-auto overscroll-contain pt-20 pb-8">
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              href="#contact"
              size="lg"
              className="w-full min-h-[52px]"
              onClick={closeMenu}
            >
              Замовити планшет
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
