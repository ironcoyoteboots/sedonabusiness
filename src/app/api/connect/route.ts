import { NextResponse } from "next/server";
import { sendMail } from "@/lib/email";

export const runtime = "nodejs";

const isDev = process.env.NODE_ENV !== "production";

export async function POST(req: Request) {
  try {
    const body = await req.json();

const isDev = process.env.NODE_ENV !== "production";
if (isDev) {
  const k = process.env.RESEND_API_KEY || "";
  console.log("RESEND key loaded:", k.startsWith("re_"), "len:", k.length);
}

    // basic validation
    if (!body?.name || !body?.businessName || !body?.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = process.env.NOTIFY_TO || "sedonabusinesshelp@gmail.com";
    const subject = `New Help Request: ${body.businessName} (${body.name})`;

    const servicesList = (body.services?.length ? body.services : ["(no services selected)"])
      .map((s: string) => `• ${s}`).join("\n");

    const text = `
New Sedona Business Help request

Name: ${body.name}
Business: ${body.businessName}
Email: ${body.email}
Phone: ${body.phone || "-"}

Services:
${servicesList}

Details:
${body.details || "-"}
`.trim();

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#111">
        <h2>New Sedona Business Help request</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(body.businessName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone || "-")}</p>
        <p><strong>Services:</strong><br/>${
          (body.services?.length
            ? `<ul>${body.services.map((s: string) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`
            : "– (no services selected)")
        }</p>
        <p><strong>Details:</strong><br/>${escapeHtml(body.details || "-")}</p>
      </div>
    `;

    // Log what we’re about to send (safe fields only)
    if (isDev) {
      console.log("sendMail → to:", to, "subject:", subject);
    }

    await sendMail({
      to,
      subject,
      text,
      html,             // required in our helper
      replyTo: body.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("connect POST error:", msg);
    // Show detailed message only in dev
    return NextResponse.json(
      { error: isDev ? msg : "Email send failed" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]!));
}
