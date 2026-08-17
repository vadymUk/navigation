import type { OrderFormProvider } from "@/lib/order-form/types";
import type { ContactFormData } from "@/types";
import { optionLabels } from "@/data/form-options";

/**
 * Development / fallback provider — logs submission to console.
 * Replace with resendProvider in lib/order-form/index.ts when ready.
 */
export const consoleProvider: OrderFormProvider = {
  async send(data: ContactFormData): Promise<void> {
    const payload = {
      ...data,
      messengerLabel: data.messenger ? optionLabels[data.messenger] : "—",
      lteLabel: data.lte ? optionLabels[data.lte] : "—",
      mountLabel: data.mount ? optionLabels[data.mount] : "—",
      extraAppsLabel: data.extraApps ? optionLabels[data.extraApps] : "—",
      submittedAt: new Date().toISOString(),
    };

    console.log("[OrderForm] Submission:", payload);
  },
};
