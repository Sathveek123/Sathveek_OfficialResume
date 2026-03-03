import { NextResponse } from "next/server";
import { sendMail, smtpConfigured } from "@/lib/mailer";

type LeadBody = {
  email?: unknown;
  firstName?: unknown;
  resource?: unknown;
  company?: unknown;
  intent?: unknown;
};

const leads: Array<{
  email: string;
  firstName: string;
  resource: string;
  company?: string;
  intent?: string;
  createdAt: string;
}> = [];

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as LeadBody | null;

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  const resource = typeof body?.resource === "string" ? body.resource.trim() : "";
  const company = typeof body?.company === "string" ? body.company.trim() : "";
  const intent = typeof body?.intent === "string" ? body.intent.trim() : "";

  if (!email || !email.includes("@") || !resource) {
    return NextResponse.json(
      { error: "Please provide a valid email and choose a resource." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "sathveek12345@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const item = {
    email,
    firstName,
    resource,
    company: company || undefined,
    intent: intent || undefined,
    createdAt: new Date().toISOString(),
  };

  leads.push(item);

  const subject = `New lead: ${resource}`;
  const text = [
    `Resource: ${resource}`,
    `Email: ${email}`,
    firstName ? `First name: ${firstName}` : null,
    company ? `Company: ${company}` : null,
    intent ? `Intent: ${intent}` : null,
    `Created: ${item.createdAt}`,
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
