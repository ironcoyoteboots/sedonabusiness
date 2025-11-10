import { Resend } from "resend";

type Mail = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from?: string;
};

export async function sendMail({ to, subject, html, text, replyTo, from }: Mail) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not set");

  const resend = new Resend(apiKey);
  const sender = from || "Sedona Business Help <support@sedonabusiness.help>";

  const result = await resend.emails.send({
    from: sender,
    to,
    subject,
    html,
    ...(text ? { text } : {}),
    ...(replyTo ? { replyTo } : {}),
  });

  if (result.error) {
    // include details if present (super helpful)
    const details = (result as any).error?.details
      ? ` | details: ${JSON.stringify((result as any).error.details)}`
      : "";
    throw new Error(`Resend: ${result.error.message}${details}`);
  }
}
