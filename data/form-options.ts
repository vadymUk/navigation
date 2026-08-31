export const tabletOptions = [
  {
    value: "Samsung Galaxy Tab A11 4/64",
    label: "Samsung Galaxy Tab A11 4/64",
  },
  {
    value: "Samsung Galaxy Tab A11 LTE 4/64 5G",
    label: "Samsung Galaxy Tab A11 LTE 4/64 5G",
  },
  {
    value: "Samsung Galaxy Tab A11 8/128",
    label: "Samsung Galaxy Tab A11 8/128",
  },
  {
    value: "Samsung Galaxy Tab A11 LTE 8/128 5G",
    label: "Samsung Galaxy Tab A11 LTE 8/128 5G",
  },

  {
    value: "Samsung Galaxy Tab A11+ 6/128",
    label: "Samsung Galaxy Tab A11+ 6/128",
  },
  {
    value: "Samsung Galaxy Tab A11+ LTE 6/128 5G",
    label: "Samsung Galaxy Tab A11+ LTE 6/128 5G",
  },
  { value: "Не визначився", label: "Не визначився" },
] as const;

export const messengerOptions = [
  { value: "telephone", label: "Телефон" },
  { value: "viber", label: "Viber" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export const lteOptions = [
  { value: "yes", label: "Так" },
  { value: "no", label: "Ні" },
  { value: "consultation", label: "Потрібна консультація" },
] as const;

export const yesNoConsultOptions = [
  { value: "yes", label: "Так" },
  { value: "no", label: "Ні" },
  { value: "consultation", label: "Потрібна консультація" },
] as const;

export const mountOptions = yesNoConsultOptions;
export const extraAppsOptions = yesNoConsultOptions;

export const optionLabels: Record<string, string> = {
  yes: "Так",
  no: "Ні",
  consultation: "Потрібна консультація",
  viber: "Viber",
  whatsapp: "WhatsApp",
  telephone: "Телефон",
};
