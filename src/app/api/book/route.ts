import { NextResponse } from "next/server";
import { sendMail, smtpConfigured } from "@/lib/mailer";

type BookBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  what?: unknown;
  challenge?: unknown;
  stack?: unknown;
  meetingType?: unknown;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as BookBody | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const company = typeof body?.company === "string" ? body.company.trim() : "";
  const what = typeof body?.what === "string" ? body.what.trim() : "";
  const challenge = typeof body?.challenge === "string" ? body.challenge.trim() : "";
  const stack = typeof body?.stack === "string" ? body.stack.trim() : "";
  const meetingType = typeof body?.meetingType === "string" ? body.meetingType.trim() : "";

  if (!name || !email || !email.includes("@") || !what || !challenge || !meetingType) {
    return NextResponse.json(
      { error: "Please fill in name, email, what you're building, challenge, and meeting type." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "sathveek12345@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const createdAt = new Date().toISOString();
  const subject = `New strategy call request (${meetingType} min) — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company/Project: ${company}` : null,
    `Meeting type: ${meetingType} min`,
    stack ? `Stack: ${stack}` : null,
    "",
    "What they're building:",
    what,
    "",
    "Biggest challenge:",
    challenge,
    "",
    `Created: ${createdAt}`,
  ]
    .filter(Boolean)
    .join("\n");

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
        { error: err instanceof Error ? err.message : "Failed to submit." },
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
      { error: errBody?.message || "Failed to submit." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
