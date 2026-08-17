import type { MountOption } from "@/types";

export const mountOptions: MountOption[] = [
  {
    id: "windshield",
    title: "Кріплення на лобове скло",
    description:
      "Надійне кріплення з присоскою для зручного розташування планшета перед водієм.",
    icon: "Car",
  },
  {
    id: "dashboard",
    title: "Кріплення на панель",
    description:
      "Фіксація на приладовій панелі або торпедо — стабільне положення під час руху.",
    icon: "LayoutDashboard",
  },
  {
    id: "other",
    title: "Інші сумісні варіанти",
    description:
      "Альтернативні типи кріплень залежно від моделі планшета та кабіни автомобіля.",
    icon: "Settings2",
  },
];
