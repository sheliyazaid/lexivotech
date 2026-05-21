import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

function buildHtml(data: ContactPayload): string {
  return `
    <h2>New contact from Lexivo Tech website</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
    <p><strong>Budget:</strong> ${escapeHtml(data.budget || "—")}</p>
    <p><strong>Project:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function resolveFromAddress(): string {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();
  const fallback = "Lexivo Tech <onboarding@resend.dev>";
  if (!configured) return fallback;
  if (configured.includes("ylexivotech")) return fallback;
  if (configured.includes("@resend.dev")) {
    return configured.includes("<") ? configured : `Lexivo Tech <${configured}>`;
  }
  if (process.env.RESEND_DOMAIN_VERIFIED === "true") {
    return configured.includes("<") ? configured : `Lexivo Tech <${configured}>`;
  }
  return fallback;
}

async function sendViaResend(data: ContactPayload, to: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = resolveFromAddress();
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `New brief from ${data.name}`,
      html: buildHtml(data),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

async function sendViaSmtp(data: ContactPayload, to: string): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "587");
  if (!host || !user || !pass) throw new Error("SMTP is not configured");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? `"Lexivo Tech" <${user}>`,
    to,
    replyTo: data.email,
    subject: `New brief from ${data.name}`,
    html: buildHtml(data),
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Budget: ${data.budget || "—"}`,
      "",
      data.message,
    ].join("\n"),
  });
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const to = process.env.CONTACT_EMAIL_TO ?? "lexivotech@gmail.com";

  if (process.env.RESEND_API_KEY) {
    await sendViaResend(data, to);
    return;
  }

  await sendViaSmtp(data, to);
}
