import nodemailer from "nodemailer";

type MailInput = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secureRaw = process.env.SMTP_SECURE;

  if (!host || !portRaw || !user || !pass) return null;

  const port = Number(portRaw);
  if (!Number.isFinite(port)) return null;

  const secure = secureRaw ? secureRaw === "true" : port === 465;

  return { host, port, secure, auth: { user, pass } };
}

export function smtpConfigured() {
  return !!getSmtpConfig();
}

export async function sendMail({ to, subject, text, replyTo }: MailInput) {
  const config = getSmtpConfig();
  if (!config) throw new Error("SMTP is not configured.");

  const from = process.env.CONTACT_FROM_EMAIL || config.auth.user;

  const transporter = nodemailer.createTransport(config);

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    replyTo,
  });
}
