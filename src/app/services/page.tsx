'use client';

import Link from "next/link";
import {
    Monitor,
    Megaphone,
    FileSpreadsheet,
    Scale,
    ClipboardList,
    BarChart3,
    Camera,
    ShoppingBag,
    Settings,
    Calendar
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
    title: string;
    Icon: LucideIcon;
    blurb: string;
    details: string[];
    how: string[];
};

const categories: Category[] = [
    {
        title: "Retail & Product Setup",
        Icon: ShoppingBag,
        blurb:
            "Support for boutiques and makers setting up inventory, point-of-sale systems, or selling online through Square, Etsy, or Shopify.",
        details: [
            "Inventory & SKU basics",
            "POS setup (Square) and training",
            "Etsy/Shopify getting started",
            "Shipping, pickup, and returns flow",
        ],
        how: [
            "Find people in similar inducstry, such as resturants setting up online menus"
        ]
    },
    {
        title: "Marketing & Social Media",
        Icon: Megaphone,
        blurb:
            "Learn how to promote your business with free and paid strategies — from Instagram and Facebook to Nextdoor and local partnerships.",
        details: [
            "Profile cleanup & bio/link updates",
            "Content ideas & light calendar",
            "Google Business Profile setup/tune-up",
            "Collabs, flyers, and local partnerships",
        ],
        how: [
            "Hire a local person to run campaigns and make creatives",
            "Expert advises business and the marketing person ",
        ]
    },
    {
        title: "Accounting & Bookkeeping",
        Icon: FileSpreadsheet,
        blurb:
            "Guidance on tracking income, managing expenses, and finding affordable bookkeeping help from experienced local professionals.",
        details: [
            "Simple chart of accounts",
            "Picking tools (Wave/QuickBooks) without bloat",
            "Receipt pipeline (email/phone → monthly folder)",
            "Intro to local bookkeepers if needed",
        ],
        how: [
            "Hire or seek volunteer for a few hours a month.",
        ]
    },
    {
        title: "Legal Help",
        Icon: Scale,
        blurb:
            "Access licensed professionals for guidance on business formation, contracts, and compliance — or find local free legal clinics.",
        details: [
            "LLC vs Sole Prop overview (plain English)",
            "Basic contract/invoice templates",
            "Where to find clinics/pro bono help",
            "Referrals to licensed pros",
        ],
        how: [
            "Hire or seek volunteer for a few hours a month.",
        ]
    },
    {
        title: "Business Plan Review",
        Icon: ClipboardList,
        blurb:
            "Get honest feedback on your plan, pricing, and growth strategy. Perfect for owners who need clear financial and operational insight.",
        details: [
            "1-page plan sanity check",
            "Pricing & margin review",
            "Break-even & simple cost model",
            "Next 90-day priorities",
        ],
        how: [
            "See local experts, retired business professors to donate time",
            "Hire a local admin to schedule"
        ]
    },
    {
        title: "Business Growth & Strategy",
        Icon: BarChart3,
        blurb:
            "Personalized guidance on scaling your business — from hiring and operations to expanding your offerings or moving into a larger space.",
        details: [
            "Weekly rhythm & lightweight scorecard",
            "When to hire vs. contract",
            "Expansion planning",
        ],
        how: [
            "See local experts, retired business professors to donate time",
            "Hire a local admin to schedule"
        ]
    },
    {
        title: "Branding & Visual Content",
        Icon: Camera,
        blurb:
            "Create a consistent visual identity with help on photos, logos, and social media style — perfect for boutiques and artists.",
        details: [
            "Quick brand kit (fonts/colors that fit you)",
            "Logo refresh ideas",
            "Shot list & simple photo/video tips",
            "Reel/post templates you can reuse",
        ],
        how: [
            "Hire a local designer for a few hours a month",
        ]
    },
    {
        title: "Tech & Tools",
        Icon: Monitor,
        blurb:
            "Websites, email setup, domains, online booking, payments, and automation tools — everything to keep your business running smoothly.",
        details: [
            "Website setup or refresh (simple, fast)",
            "Email & domain (Google Workspace/Zoho) configuration",
            "Online booking and payments",
            "Basic automations (forms → email, receipts, reminders)",
            "We can find people who have set up or used similiar systems to give you support."
        ],
        how: [
            "Hire local web developer for a few hours a month, seek volunteers",
            "We can find people who have set up or used similiar systems to give support.",
            "Find people in similar inducstry, such as resturants setting up online menus"
        ]
    },
    {
        title: "Operations & Time-Saving Tools",
        Icon: Settings,
        blurb:
            "Simplify the daily grind with smarter processes, communication, and workflows — saving time and reducing stress.",
        details: [
            "Review process and identify improvements",
            "Team training on effeciency",
            "Simple automations to cut busywork",
        ],
        how: [
            "Seek local experts in process and workflows to donate their time",
        ]
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        Services We Can Provide
                    </h1>
                    <p className="mt-2 text-gray-700 mt-5">
                        Learn more about our services below, or just tap <span className="font-semibold">Get Help</span> and we’ll work it out together.
                        <br />We can always seek out speciality help once we understand your needs.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                            href="/connect"
                            className="inline-flex items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-white font-semibold hover:bg-orange-600 transition"
                        >
                            <Calendar className="h-5 w-5" /> Get Help
                        </Link>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 font-medium">
                            100% Free • Volunteer-run • we aren't selling anything
                        </span>
                    </div>
                </div>
            </section>

            {/* Services: single column, left rail + right content (mapped from JSON) */}
            <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-4">
                <div className="space-y-6">
                    {categories.map(({ title, Icon, blurb, details, how }) => (
                        <article
                            key={title}
                            className="border border-gray-200 rounded-2xl bg-white p-6 hover:shadow-sm transition"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                {/* LEFT: icon + title (centered), narrower on small screens */}
                                <div className="w-24 sm:w-32 md:w-40 shrink-0 flex flex-col items-center text-center">
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
                                    <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                                        {title}
                                    </h3>
                                </div>

                                {/* RIGHT: blurb + details bullets */}
                                <div className="flex-1">
                                    <p className="text-gray-700">{blurb}</p>

                                    {details?.length > 0 && (
                                        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                                            {details.map((d) => (
                                                <li key={d}>{d}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {how?.length > 0 && (
                                        <>
                                            <h4 className="mt-4 text-lg font-semibold text-gray-800">How?</h4>
                                            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                                                {how.map((d) => (
                                                    <li key={d}>{d}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            {/* How it works */}
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    How this works
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Tell us what you need", text: "What’s working? What’s stuck? We’ll make a short list together." },
                        { title: "Pick simple tools", text: "Email, domain, booking, payments—whatever helps you move forward." },
                        { title: "Work side-by-side", text: "Often in person. We set things up with you and keep it easy." },
                        { title: "Come back anytime", text: "It’s community support. No fees. No upsells. Just help." },
                    ].map((s) => (
                        <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                            <p className="mt-2 text-gray-700">{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Quick answers</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {[
                        { q: "Is it really free?", a: "Yes. It’s a community project run by local volunteers. No fees and no sales pitch." },
                        { q: "Who is this for?", a: "Owners and makers in Sedona, Village of Oak Creek, and the Verde Valley—boutiques, artists, food & beverage, trades, and services." },
                    ].map((f) => (
                        <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
                            <p className="mt-2 text-gray-700">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Let’s work on this together
                    </h2>
                    <p className="mt-3 text-gray-600">
                        We’ll start with what’s working, what’s not, and take the next step—together.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/connect"
                            className="inline-block bg-orange-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 text-lg transition-colors"
                        >
                            Get Help
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
