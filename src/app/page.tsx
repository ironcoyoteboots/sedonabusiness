import Link from "next/link";
import { Handshake, Target, Waypoints, ChartSpline } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO: full-bleed image, shorter height, content constrained to container */}
      <section className="relative w-screen h-[60vh] md:h-[70vh] overflow-hidden left-1/2 right-1/2 -mx-[50vw]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hikers.jpg"
            alt="Aligned hikers on a mountain trail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-0 left-0 right-0 h-2 md:h-2 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Overlay content constrained to the same width as the rest of the page */}
        <div className="relative z-10 flex h-full items-start pt-12 md:pt-18">
          <div className="container text-center">
            <div className="mx-auto max-w-5xl px-4 -mt-2 md:-mt-2">
              <h1 className="font-bold leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                             text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
                Helping leaders and teams align vision, process and delivery.
              </h1>
              <p className="mt-2 text-sm sm:text-base md:text-2xl text-gray-100 mt-13">
                When people are aligned, work moves smoothly, decisions stick, and results follow.              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/connect"
                  className="bg-cyan-500 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-cyan-700 text-sm md:text-lg"
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/ v"
                  className="border border-white text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white/10 text-sm md:text-lg"
                >
                  Client Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BELOW-THE-FOLD CONTENT (centered like before) */}
      <main className="container py-16 md:py-20 space-y-24">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight mb-4 text-gray-500">
            Growth brings complexity. It becomes harder to stay <span className="text-cyan-600">aligned.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Most slowdowns aren’t about talent. They’re about alignment.
            We partner with teams to spot where priorities or communication have slipped out of sync,
            then we refine delivery together until engagement, momentum, and predictability return.
          </p>
        </section>

        {/* --- Pillars --- */}
        <section>
          <div className="grid gap-6 md:grid-cols-3 items-stretch mt-8">
            {/* Align Leadership */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                  Align Leadership
                </h3>
                <Handshake className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Partnering with leaders and teams across product, engineering and design to create shared priorities,
                  clear goals and genuine alignment on what matters most. When teams and leadership are aligned,
                  direction becomes consistent and decisions get easier.
                </p>
              </div>
            </div>

            {/* Align Delivery */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                  Align Delivery
                </h3>
                <Waypoints className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Together we design delivery systems that fit your team, not just someone else’s playbook.
                  From working agreements to visibility and flow, we bring structure without killing momentum.
                </p>
              </div>
            </div>

            {/* Align Growth */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                  Align Growth
                </h3>
                <ChartSpline className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Partnering with product, project and engineering teams to strengthen how they collaborate,
                  communicate and work. The result is stronger teams, better engagement, and a healthier culture.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* --- Quotes --- */}
        <section className="bg-gray-50 py-16 mt-12 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              <blockquote className="italic">
                “Nick brought clarity and calm during a chaotic product transition. We shipped faster than we thought possible.”
                <footer className="mt-3 text-sm text-gray-500">VP Engineering, Fintech Startup</footer>
              </blockquote>
              <blockquote className="italic">
                “He helped us simplify priorities and rebuild trust between product and engineering.”
                <footer className="mt-3 text-sm text-gray-500">CTO, Consumer App</footer>
              </blockquote>
              <blockquote className="italic">
                “Nick changed how our leaders think about focus — we got momentum back fast.”
                <footer className="mt-3 text-sm text-gray-500">Head of Product, Series A SaaS</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* --- Promise --- */}
        <section className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="h-px bg-gray-200 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600">The Align Commitment</h2>
            <p className="mt-2 text-base text-gray-600">
              A simple promise - if you don’t see value in the first month, you don’t pay.
            </p>
            <div className="h-px bg-gray-200 mt-4" />
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="container text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Ready to bring alignment to your team?
          </h3>
          <p className="mt-3 text-gray-600">
            Let’s talk about what’s working, what’s not, and where clarity could unlock your next level.
          </p>
          <div className="mt-6">
            <Link
              href="/connect"
              className="inline-block bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-700 text-lg transition-colors"
            >
              Let’s talk
            </Link>
          </div>
        </section>




      </main>
    </>
  );
}
