import type { ContactFormData, ContactFormErrors } from "@/types";
import { tabletOptions } from "@/data/form-options";

const MIN_NAME_LENGTH = 2;
const MIN_PHONE_DIGITS = 9;

const validTabletValues = new Set<string>(tabletOptions.map((o) => o.value));

export function validateOrderForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = "Введіть ваше ім'я";
  } else if (name.length < MIN_NAME_LENGTH) {
    errors.name = "Ім'я повинно містити щонайменше 2 символи";
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (!data.phone.trim()) {
    errors.phone = "Введіть номер телефону";
  } else if (phoneDigits.length < MIN_PHONE_DIGITS) {
    errors.phone = "Введіть коректний номер телефону (щонайменше 9 цифр)";
  }

  if (!data.tablet) {
    errors.tablet = "Оберіть модель планшета або «Не визначився»";
  } else if (!validTabletValues.has(data.tablet)) {
    errors.tablet = "Оберіть модель зі списку";
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
