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
    id: "sygic-truck",
    name: "Sygic Truck",
    description:
      "Остання версія навігації, спеціально орієнтована на вантажні автомобілі. Допомагає будувати маршрути з урахуванням параметрів вантажного автомобіля та дорожніх обмежень таких автомобілів.",
    category: "navigation",
  },
  {
    id: "tottom-go-truck",
    name: "Tottom Go Truck",
    description:
      "Всім відома та популярна версія навігації для вантажних автомобілів. Допомагає будувати маршрути з урахуванням параметрів вантажного автомобіля та дорожніх обмежень таких автомобілів.",
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
    id: "igo-world",
    name: "iGO World NextGen",
    description:
      "Навігаційне рішення для поїздок Європою з можливістю роботи з офлайн-картами залежно від встановленої конфігурації.",
    category: "navigation",
  },
  {
    id: "igo-avic",
    name: "iGO Avic NextGen",
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
    id: "map2geo",
    name: "Map2Geo",
    description:
      "Інструмент для роботи з маршрутами та передачі/конвертації маршрутної інформації між навігаційними рішеннями залежно від конфігурації.",
    category: "driver",
  },
  {
    id: "droid-dash-cam",
    name: "Droid Dash Cam",
    description:
      "Застосунок для запису відео з автомобільної камери та перегляду записаного матеріалу.",
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
    description: "Застосунок для перегляду відео контенту через інтернет.",
    category: "media",
  },
  {
    id: "iptv-pro",
    name: "IPTV Pro",
    description:
      "Програвач IPTV-потоків, який дозволяє використовувати сумісні IPTV-плейлисти. Для перегляду телевізійного контенту через інтернет.",
    category: "media",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    description:
      "Преміум-версія YouTube без реклами та з можливістю офлайн-перегляду відео.",
    category: "media",
  },
  {
    id: "hdSpinTV",
    name: "HD Spin TV",
    description:
      "Застосунок для перегляду телевізійного та відеомедійного контенту високої чіткості через інтернет.",
    category: "media",
  },
  {
    id: "lift",
    name: "Lift",
    description: "Для перегляду відео контенту через інтернет.",
    category: "media",
  },
  {
    id: "football-live",
    name: "Football Live",
    description:
      "Застосунок для перегляду прямих трансляцій футбольних матчів через інтернет.",
    category: "media",
  },
  {
    id: "zona-tv",
    name: "Zona TV",
    description:
      "Застосунок для перегляду телевізійного та відеомедійного контенту через інтернет.",
    category: "media",
  },
];
