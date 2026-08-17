export type Product = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  description: string;
  memory: string;
  lte: boolean;
  price: string;
  mainAdvantage: string;
  highlights?: string[];
};

export type ApplicationCategory = "navigation" | "driver" | "media";

export type Application = {
  id: string;
  name: string;
  description: string;
  category: ApplicationCategory;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type UseCase = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type MountOption = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type OrderStep = {
  step: number;
  title: string;
  description: string;
};

export type ContactFormData = {
  name: string;
  phone: string;
  messenger: string;
  tablet: string;
  lte: string;
  mount: string;
  extraApps: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
