// import { consoleProvider } from "@/lib/order-form/providers/console";
import { resendProvider } from "@/lib/order-form/providers/resend";
import type { SubmitResult } from "@/lib/order-form/types";
import type { OrderFormProvider } from "@/lib/order-form/types";
import type { ContactFormData } from "@/types";

/** Switch to resendProvider when /api/order is configured */
const activeProvider: OrderFormProvider = resendProvider;

const SUCCESS_MESSAGE =
  "Дякуємо! Ваш запит отримано. Ми зв'яжемося з вами для уточнення комплектації.";

export async function submitOrderForm(
  data: ContactFormData,
): Promise<SubmitResult> {
  await activeProvider.send(data);

  return {
    success: true,
    message: SUCCESS_MESSAGE,
  };
}

export { SUCCESS_MESSAGE };
