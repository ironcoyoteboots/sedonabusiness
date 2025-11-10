// app/connect/page.tsx
"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Tech & Tools (website, email, domains, booking, payments)",
  "Marketing & Social Media (Instagram, Facebook, Nextdoor, ads)",
  "Accounting & Bookkeeping",
  "Legal Help",
  "Business Plan Review",
  "Business Growth & Strategy",
  "Customer Growth & Community",
  "Branding & Visual Content",
  "Retail & Product Setup (POS, Square/Etsy/Shopify)",
  "Operations & Time-Saving Tools",
];

export default function ConnectPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim(),
      businessName: form.get("businessName")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      phone: form.get("phone")?.toString().trim(),
      services: SERVICE_OPTIONS.filter((_, i) => form.get(`svc_${i}`)),
      details: form.get("details")?.toString().slice(0, 400) ?? "",
    };

    try {
      const res = await fetch("/api/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setOk(true);
      setMsg("Thanks! We received your request and will reach out soon.");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setOk(false);
      setMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-gray-600 mb-6 text-center">
          Get Free Help
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Tell us a bit about your business and what you need. A volunteer will contact you.
        </p>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 shadow-sm p-8 bg-white text-gray-700">
          {/* Contact */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Your Name *</label>
              <input name="name" required className="rounded-xl border p-3" placeholder="Full name" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Business Name *</label>
              <input name="businessName" required className="rounded-xl border p-3" placeholder="e.g., Red Rock Goods" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email *</label>
              <input type="email" name="email" required className="rounded-xl border p-3" placeholder="name@example.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Phone</label>
              <input name="phone" className="rounded-xl border p-3" placeholder="(928) 555-1234" />
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <label className="text-sm font-medium">What do you need help with? *</label>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((label, i) => (
                <label key={i} className="flex items-start gap-3 rounded-xl border p-3 cursor-pointer hover:border-orange-400">
                  <input type="checkbox" name={`svc_${i}`} className="mt-1" />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Details (<= 400) */}
          <div className="mt-8">
            <label className="text-sm font-medium">Any extra details (optional, 400 characters)</label>
            <textarea
              name="details"
              maxLength={400}
              rows={4}
              className="mt-2 w-full rounded-xl border p-3"
              placeholder="Share links, timelines, or context you think will help"
            />
            <p className="text-xs text-gray-500 mt-1">We’ll include these details in the email to the volunteer team.</p>
          </div>

          {/* Submit */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Help"}
            </button>
            {ok === true && <span className="text-green-600 text-sm">{msg}</span>}
            {ok === false && <span className="text-red-600 text-sm">{msg}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
