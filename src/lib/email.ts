// lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Mail = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  from?: string;
};

export async function sendMail({ to, subject, text, html, replyTo, from }: Mail) {
  // Use Resend's default sender for zero-setup; replace after verifying your domain.
  const sender = from || 'Sedona Business Help <onboarding@resend.dev>';

  const { error } = await resend.emails.send({
    from: sender,
    to,
    subject,
    text,
    html,
    reply_to: replyTo,
  });

  if (error) throw new Error(error.message || "Resend send failed");
}
