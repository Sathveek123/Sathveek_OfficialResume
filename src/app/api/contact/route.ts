import { NextResponse } from "next/server";
import { sendMail, smtpConfigured } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { name?: unknown; email?: unknown; message?: unknown }
    | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, and message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "sathveek12345@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const subject = `New portfolio message from ${name}`;
  const text = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

  if (smtpConfigured()) {
    try {
      await sendMail({
        to,
        subject,
        text,
        replyTo: email,
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : "Failed to send message." },
        { status: 502 },
      );
    }
  }

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      reply_to: email,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    const errBody = (await res?.json().catch(() => null)) as
      | { message?: string; error?: unknown }
      | null;
    return NextResponse.json(
      { error: errBody?.message || "Failed to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
