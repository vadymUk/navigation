import type { ContactFormData } from "@/types";

export type SubmitResult = {
  success: boolean;
  message: string;
};

export interface OrderFormProvider {
  send(data: ContactFormData): Promise<void>;
}
