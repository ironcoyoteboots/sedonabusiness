// app/connect/page.tsx
import Link from "next/link";

export const metadata = {
    title: "Connect — Align Delivery",
    description: "Schedule a conversation with Nick Parsons at Align Delivery.",
};

export default function ConnectPage() {
    return (
        <section className="py-20 text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-4xl font-semibold text-gray-600 mb-6">
                    Let’s connect
                </h1>
                <p className="text-lg text-gray-700 mb-10">
                    I work directly with founders, VCs, and product leaders to help teams
                    regain alignment and momentum. You can schedule a short introductory
                    call below — no pressure, just a conversation to explore where I can help.
                </p>

                {/* Booking Card */}
                <div className="rounded-2xl border border-gray-200 shadow-sm p-8 bg-white max-w-xl mx-auto text-gray-700 ">
                    <p className="mb-6 mt-2">
                        <a
                            href="https://calendar.app.google/WrovkBR14NvqZaqR8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-cyan-700 text-lg transition-colors"
                        >
                            Open Scheduler
                        </a>
                    </p>
                    <p>
                        Choose a time that works best for you or email me directly at{" "}
                        <a
                            href="mailto:nick@aligndelivery.com"
                            className="text-cyan-600 hover:underline"
                        >
                            nick@aligndelivery.com
                        </a>
                        .
                    </p>
                </div>

                {/* Back link */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
