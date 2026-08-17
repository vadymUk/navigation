import type { OrderFormProvider } from "@/lib/order-form/types";
import type { ContactFormData } from "@/types";
import { optionLabels } from "@/data/form-options";

/**
 * Resend email provider — ready to connect when API route is configured.
 *
 * Setup steps:
 * 1. npm install resend
 * 2. Create app/api/order/route.ts with Resend client
 * 3. Set RESEND_API_KEY and ORDER_NOTIFICATION_EMAIL in .env
 * 4. Swap activeProvider in lib/order-form/index.ts to resendProvider
 *
 * Example API route body: ContactFormData (same shape as frontend form)
 */
export const resendProvider: OrderFormProvider = {
  async send(data: ContactFormData): Promise<void> {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        messengerLabel: data.messenger ? optionLabels[data.messenger] : "—",
        lteLabel: data.lte ? optionLabels[data.lte] : "—",
        mountLabel: data.mount ? optionLabels[data.mount] : "—",
        extraAppsLabel: data.extraApps ? optionLabels[data.extraApps] : "—",
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        (error as { message?: string }).message ??
          "Не вдалося надіслати запит. Спробуйте ще раз.",
      );
    }
  },
};
