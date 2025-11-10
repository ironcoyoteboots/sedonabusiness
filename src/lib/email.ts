// src/lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Mail = {
  to: string | string[];
  subject: string;
  html: string;        // ← make html required to avoid template overload
  text?: string;
  replyTo?: string;
  from?: string;
};

export async function sendMail({ to, subject, html, text, replyTo, from }: Mail) {
  const sender = from || "Sedona Business Help <onboarding@resend.dev>";

  const options = {
    from: sender,
    to,
    subject,
    html,                      // guaranteed present
    ...(text ? { text } : {}), // only include if defined
    ...(replyTo ? { replyTo } : {}),
  };

  const { error } = await resend.emails.send(options);
  if (error) throw new Error(error.message || "Resend send failed");
}
