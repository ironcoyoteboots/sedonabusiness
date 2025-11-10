// src/lib/email.ts
import { Resend } from "resend";

type Mail = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string | string[];
  from?: string;
};

type ResendData = { id: string };
type ResendError = { message: string; name?: string; statusCode?: number; details?: unknown };
type ResendResponse = { data: ResendData | null; error: ResendError | null };

function hasDetails(err: unknown): err is { details: unknown } {
  return typeof err === "object" && err !== null && "details" in err;
}

export async function sendMail({
  to,
  subject,
  html,
  text,
  replyTo,
  from,
}: Mail): Promise<string> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not set");

  const resend = new Resend(apiKey);
  const sender = from || "Sedona Business Help <support@sedonabusiness.help>";

  const { data, error } = (await resend.emails.send({
    from: sender,
    to,
    subject,
    html,
    ...(text ? { text } : {}),
    ...(replyTo ? { replyTo } : {}),
  })) as ResendResponse;

  if (error) {
    const details = hasDetails(error) ? ` | details: ${JSON.stringify((error as { details: unknown }).details)}` : "";
    throw new Error(`Resend: ${error.message}${details}`);
  }

  if (!data?.id) {
    throw new Error("Resend: no message id returned");
  }

  return data.id;
}
