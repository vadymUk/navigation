import type { Application, ApplicationCategory } from "@/types";

export const appCategoryMeta: Record<
  ApplicationCategory,
  { label: string; description: string }
> = {
  navigation: {
    label: "NAVIGATION",
    description: "Навігація та маршрути для вантажних автомобілів по Європі",
  },
  driver: {
    label: "DRIVER TOOLS",
    description:
      "Інструменти для водія: тахограф, сервіси, маршрути та попередження",
  },
  media: {
    label: "MULTIMEDIA",
    description: "Відео та TV через підтримувані мультимедійні застосунки",
  },
};

export const applicationCategoryOrder: ApplicationCategory[] = [
  "navigation",
  "driver",
  "media",
];

export const applications: Application[] = [
  {
    id: "sygic-truck-new",
    name: "Sygic Truck новий",
    description:
      "Остання версія навігації, спеціально орієнтована на вантажні автомобілі. Допомагає будувати маршрути з урахуванням параметрів вантажного автомобіля та дорожніх обмежень таких автомобілів.",
    category: "navigation",
  },
  {
    id: "sygic-truck-classic",
    name: "Sygic Truck класичний",
    description:
      "Класична версія навігації для вантажних автомобілів. Допомагає будувати маршрути з урахуванням параметрів вантажного автомобіля та дорожніх обмежень таких автомобілів.",
    category: "navigation",
  },
  {
    id: "igo-primo",
    name: "iGO Primo NextGen",
    description:
      "Навігаційне рішення для поїздок Європою з можливістю роботи з офлайн-картами залежно від встановленої конфігурації.",
    category: "navigation",
  },
  {
    id: "igo-primo-world",
    name: "iGO World NextGen",
    description:
      "Навігаційне рішення для поїздок Європою з можливістю роботи з офлайн-картами залежно від встановленої конфігурації.",
    category: "navigation",
  },
  {
    id: "google-maps",
    name: "Google Maps",
    description:
      "Пошук адрес, підприємств, сервісів, заправок, ресторанів та інших об'єктів по маршруту.",
    category: "navigation",
  },
  {
    id: "camsam",
    name: "CamSam plus",
    description:
      "Допомагає водієві отримувати інформацію про камери контролю швидкості та інші попередження, доступні в сервісі.",
    category: "driver",
  },
  {
    id: "lkw-app",
    name: "LKW App",
    description:
      "Корисна інформація для водіїв вантажних автомобілів, зокрема об'єкти та сервіси, актуальні для далекобійників.",
    category: "driver",
  },
  {
    id: "tachoplus",
    name: "TachoPlus",
    description:
      "Інструменти для роботи з інформацією, пов'язаною з тахографом та режимами роботи водія.",
    category: "driver",
  },
  {
    id: "send-to-navigation",
    name: "Send to Navigation",
    description:
      "Допомагає передавати знайдену адресу або місце до вибраної навігаційної програми.",
    category: "driver",
  },
  {
    id: "map2map",
    name: "Map2Map",
    description:
      "Інструмент для роботи з маршрутами та передачі/конвертації маршрутної інформації між навігаційними рішеннями залежно від конфігурації.",
    category: "driver",
  },
  {
    id: "anwap-movies",
    name: "Anwap Movies",
    description: "Мультимедійний застосунок для перегляду відеоконтенту.",
    category: "media",
  },
  {
    id: "allatv",
    name: "AllaTV",
    description:
      "Застосунок для перегляду телевізійного контенту через інтернет.",
    category: "media",
  },
  {
    id: "iptv-pro",
    name: "IPTV Pro",
    description:
      "Програвач IPTV-потоків, який дозволяє використовувати сумісні IPTV-плейлисти.",
    category: "media",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    description:
      "Преміум-версія YouTube без реклами та з можливістю офлайн-перегляду відео.",
    category: "media",
  },
];
