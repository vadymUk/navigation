import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "tab-a11 4/64",
    name: "Samsung Galaxy Tab A11 4RAM/64GB",
    shortName: "Tab A11 4/64",
    image: "/images/Taba11-4-64.jpg",
    description:
      'Компактний 8,7" планшет для кабіни вантажівки — зручний для навігації та щоденного використання в дорозі.',
    memory: "64 ГБ",
    lte: false,
    price: "1 150 zl",
    mainAdvantage: "Компактний формат для невеликої кабіни",
    highlights: ['8,7" дисплей', "Wi-Fi", "Android 15"],
  },
  {
    id: "tab-a11-lte 4/64",
    name: "Samsung Galaxy Tab A11 LTE 4RAM/64GB 5G",
    shortName: "Tab A11 LTE 4/64 5G",
    image: "/images/Tab11lte4-64.jpg",
    description:
      'Той самий зручний формат 8,7" з підтримкою мобільного інтернету — для навігації та  Wi-Fi.',
    memory: "64 ГБ",
    lte: true,
    price: "1 300 zl",
    mainAdvantage: "Інтернет у дорозі — LTE для навігації та Wi-Fi",
    highlights: ['8,7" дисплей', "5G", "Wi-Fi", "Android 15"],
  },
  {
    id: "tab-a11 8/128",
    name: "Samsung Galaxy Tab A11 8RAM/128GB",
    shortName: "Tab A11 8/128",
    image: "/images/Taba11-8-128.jpg",
    description:
      'Компактний 8,7" та потужний планшет 8/128 для роботи та кабіни вантажівки — зручний для навігації та щоденного використання в дорозі.',
    memory: "128 ГБ",
    lte: false,
    price: "1 550 zl",
    mainAdvantage: "Компактний формат та потужний для роботи та навігації",
    highlights: [
      '8,7" дисплей',
      "Wi-Fi",
      "Android 15",
      "8 ГБ RAM",
      "128 ГБ пам'яті",
    ],
  },
  {
    id: "tab-a11-lte 8/128",
    name: "Samsung Galaxy Tab A11 LTE 8RAM/128GB 5G",
    shortName: "Tab A11 LTE 8/128 5G",
    image: "/images/Taba11-8-128.jpg",
    description:
      'Компактний 8,7" та потужний планшет 8/128 для роботи та кабіни вантажівки — зручний для навігації та щоденного використання в дорозі. Підтримка мобільного інтернету LTE та Wi-Fi.',
    memory: "128 ГБ",
    lte: true,
    price: "1 700 zl",
    mainAdvantage:
      "Компактний формат та потужний для роботи та навігації з підтримкою 5G для швидкого інтернету в дорозі",
    highlights: [
      '8,7" дисплей',
      "5G",
      "Wi-Fi",
      "Android 15",
      "8 ГБ RAM",
      "128 ГБ пам'яті",
    ],
  },
  {
    id: "tab-a11-plus 6/128",
    name: "Samsung Galaxy Tab A11+ 6RAM/128GB",
    shortName: "Tab A11+ 6/128",
    image: "/images/Tab11+.jpg",
    description:
      'Великий 11" екран для комфортної навігації, мультимедіа та роботи з кількома програмами одночасно.',
    memory: "128 ГБ",
    lte: false,
    price: "1 500 zl",
    mainAdvantage: "Великий екран для навігації та мультимедіа",
    highlights: ['11" дисплей', "Wi-Fi", "6 ГБ RAM", "128 ГБ пам'яті"],
  },
  {
    id: "tab-a11-plus-lte 6/128",
    name: "Samsung Galaxy Tab A11+ LTE 6RAM/128GB 5G",
    shortName: "Tab A11+ 6/128 LTE 5G",
    image: "/images/Tab11+lte.jpg",
    description:
      'Великий 11" екран для комфортної навігації, мультимедіа та роботи з кількома програмами одночасно а також підтримка  LTE та Wi-Fi.',
    memory: "128 ГБ",
    lte: true,
    price: "1 650 zl",
    mainAdvantage:
      "Великий екран для навігації та мультимедіа та підтримка 5G для швидкого інтернету в дорозі",
    highlights: ['11" дисплей', "5G", "Wi-Fi", "6 ГБ RAM", "128 ГБ пам'яті"],
  },
];
