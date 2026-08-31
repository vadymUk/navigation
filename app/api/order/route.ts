import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormData & {
      messengerLabel?: string;
      lteLabel?: string;
      mountLabel?: string;
      extraAppsLabel?: string;
    };

    const to = process.env.ORDER_NOTIFICATION_EMAIL;
    if (!to || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 503 },
      );
    }

    const submittedAt = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    });

    await resend.emails.send({
      from: "Замовлення навігаційного планшета <onboarding@resend.dev>",
      to,
      subject: `Нове замовлення: ${data.name}`,
      html: `
        <h2>Нове замовлення планшета</h2>
        <p><strong>Дата та час:</strong> ${escapeHtml(submittedAt)}</p>
        <p><strong>Ім'я:</strong> ${data.name}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Месенджер:</strong> ${data.messengerLabel ?? "—"}</p>
        <p><strong>Планшет:</strong> ${data.tablet}</p>
        <p><strong>LTE:</strong> ${data.lteLabel ?? "—"}</p>
        <p><strong>Кріплення:</strong> ${data.mountLabel ?? "—"}</p>
        <p><strong>Додаткові програми:</strong> ${data.extraAppsLabel ?? "—"}</p>
        <p><strong>Повідомлення:</strong> ${data.message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
