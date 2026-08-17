import type { UseCase } from "@/types";

export const useCases: UseCase[] = [
  {
    id: "route-planning",
    title: "Планування маршруту",
    description: "Побудова та передача маршрутів між навігаційними програмами.",
    icon: "Route",
  },
  {
    id: "truck-nav",
    title: "Навігація вантажного автомобіля",
    description: "Маршрути з урахуванням параметрів TIR та обмежень для вантажівок.",
    icon: "Navigation",
  },
  {
    id: "address-search",
    title: "Пошук адрес та підприємств",
    description: "Швидкий пошук клієнтів, складів, сервісів та заправок по маршруту.",
    icon: "Search",
  },
  {
    id: "places",
    title: "Пошук корисних місць у дорозі",
    description: "Паркінги, зони відпочинку та інші об'єкти для водіїв вантажівок.",
    icon: "MapPin",
  },
  {
    id: "entertainment",
    title: "Фільми та телебачення під час відпочинку",
    description: "Перегляд відео та TV-контенту через підтримувані мультимедійні застосунки.",
    icon: "Clapperboard",
  },
  {
    id: "data-work",
    title: "Робота з маршрутами та іншими даними",
    description: "Конвертація та передача маршрутної інформації між програмами.",
    icon: "FileJson",
  },
];
