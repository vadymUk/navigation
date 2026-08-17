"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  RadioGroup,
  getInputClassName,
} from "@/components/ui/FormField";
import { submitOrderForm } from "@/lib/order-form";
import {
  validateOrderForm,
  hasValidationErrors,
} from "@/lib/validate-order-form";
import {
  tabletOptions,
  messengerOptions,
  lteOptions,
  mountOptions,
  extraAppsOptions,
} from "@/data/form-options";
import type { ContactFormData, ContactFormErrors } from "@/types";
import { cn } from "@/lib/utils";

const initialForm: ContactFormData = {
  name: "",
  phone: "",
  messenger: "",
  tablet: "",
  lte: "",
  mount: "",
  extraApps: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setSuccessMessage(null);
    setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateOrderForm(form);
    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors);
      setSubmitError("Перевірте виділені поля та спробуйте ще раз.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSuccessMessage(null);

    try {
      const result = await submitOrderForm(form);
      setSuccessMessage(result.message);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Помилка відправки. Спробуйте ще раз або зателефонуйте нам.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMessage) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center"
      >
        <CheckCircle2 size={48} className="mb-4 text-emerald-400" />
        <p className="text-lg font-semibold text-foreground">
          Запит надіслано!
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          {successMessage}
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSuccessMessage(null)}
        >
          Надіслати ще один запит
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Ім'я" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={getInputClassName(!!errors.name)}
            placeholder="Ваше ім'я"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </FormField>

        <FormField
          label="Телефон"
          htmlFor="phone"
          required
          error={errors.phone}
          hint="Формат: +48 576 222 842"
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={getInputClassName(!!errors.phone)}
            placeholder="+48 576 222 842"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </FormField>
      </div>

      <FormField
        label="Viber / WhatsApp/telephone"
        htmlFor="messenger-viber"
        hint="Оберіть зручний месенджер для зв'язку"
      >
        <RadioGroup
          name="messenger"
          value={form.messenger}
          options={messengerOptions}
          onChange={(value) => updateField("messenger", value)}
        />
      </FormField>

      <FormField
        label="Планшет"
        htmlFor="tablet"
        required
        error={errors.tablet}
      >
        <select
          id="tablet"
          name="tablet"
          value={form.tablet}
          onChange={(e) => updateField("tablet", e.target.value)}
          className={cn(getInputClassName(!!errors.tablet), "appearance-none")}
          aria-invalid={!!errors.tablet}
          aria-describedby={errors.tablet ? "tablet-error" : undefined}
        >
          <option value="">Оберіть модель</option>
          {tabletOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="LTE"
        htmlFor="lte-yes"
        hint="Чи потрібен мобільний інтернет у планшеті?"
      >
        <RadioGroup
          name="lte"
          value={form.lte}
          options={lteOptions}
          onChange={(value) => updateField("lte", value)}
        />
      </FormField>

      <FormField label="Кріплення" htmlFor="mount-yes">
        <RadioGroup
          name="mount"
          value={form.mount}
          options={mountOptions}
          onChange={(value) => updateField("mount", value)}
        />
      </FormField>

      <FormField label="Додаткові програми" htmlFor="extraApps-yes">
        <RadioGroup
          name="extraApps"
          value={form.extraApps}
          options={extraAppsOptions}
          onChange={(value) => updateField("extraApps", value)}
        />
      </FormField>

      <FormField label="Повідомлення" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(getInputClassName(), "min-h-[120px] resize-y")}
          placeholder="Додаткові побажання, питання або деталі замовлення..."
        />
      </FormField>

      {submitError && (
        <div
          role="alert"
          className="rounded-xl bg-red-500/10 p-4 text-sm text-red-400"
        >
          {submitError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full min-h-[52px]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Відправляємо...
          </>
        ) : (
          "Замовити"
        )}
      </Button>

      <p className="text-center text-xs text-muted">
        Натискаючи «Замовити», ви погоджуєтесь на обробку контактних даних для
        зв&apos;язку щодо замовлення.
      </p>
    </form>
  );
}
