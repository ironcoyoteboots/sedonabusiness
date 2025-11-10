import Link from "next/link"; import {
  Monitor,
  Megaphone,
  FileSpreadsheet,
  Scale,
  ClipboardList,
  BarChart3,
  Users,
  Camera,
  ShoppingBag,
  Settings,
} from "lucide-react";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-screen h-[60vh] md:h-[70vh] overflow-hidden left-1/2 right-1/2 -mx-[50vw]">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero.jpg"  // optional fallback image
          >
            <source src="/video/biz.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-0 left-0 right-0 h-2 md:h-2 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Overlay content constrained to the same width as the rest of the page */}
        <div className="relative z-10 flex h-full items-start pt-12 md:pt-18">
          <div className="container text-center">
            <div className="mx-auto max-w-5xl px-4 -mt-2 md:-mt-2">
              {/* Brand title */}
              <div className="mb-3 md:mb-5">
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
                  <span className="text-white">Sedona</span>{' '}
                  <span className="text-orange-500">Business</span>{' '}
                  <span className="text-white">Help</span>
                </span>
              </div>

              {/* Subtitle headline */}
              <h1 className="font-bold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
               text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white">
                Helping Local Businesses Thrive
              </h1>
              <div className="bg-black/40 rounded-2xl p-4 inline-block mt-15">
                <p className="text-gray-100 text-lg md:text-2xl">
                  Websites, Marketing, Social Media, Accounting and more.
                <br /> A community project funded and run by local volunteers who want your business to succeed and grow.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/connect"
                  className="bg-orange-700 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-orange-500 text-sm md:text-lg"
                >
                  Get Help
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white/10 text-sm md:text-lg"
                >
                  Services
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
            Running a small business can be tough. Our experienced local volunteers want to help make it a little easier..
          </h2>
          <p className="text-gray-700 text-lg">
            Every small business hits roadblocks — things break, plans stall, and new opportunities can feel uncertain.
            Maybe you’re ready to reach more customers, grow your team, or move into a bigger space but aren’t sure how to take the next step.
            Our experienced local volunteers are here to help you turn that momentum into growth, with practical support and clear guidance to move your business forward with confidence.
          </p>
        </section>

        {/* --- Services --- */}
        <section id="services">

          <div className="grid gap-6 md:grid-cols-3 items-stretch mt-8">


            {/* Retail & Product Setup */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Retail & Product Setup
                </h3>
                <ShoppingBag className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Support for boutiques and makers setting up inventory, point-of-sale systems, or selling online through Square, Etsy, or Shopify.
                </p>
              </div>
            </div>
            

            {/* Marketing & Social Media */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Marketing & Social Media
                </h3>
                <Megaphone className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Learn how to promote your business with free and paid strategies — from Instagram and Facebook to Nextdoor and local partnerships.
                </p>
              </div>
            </div>

            {/* Accounting & Bookkeeping */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Accounting & Bookkeeping
                </h3>
                <FileSpreadsheet className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Guidance on tracking income, managing expenses, and finding affordable bookkeeping help from experienced local professionals.
                </p>
              </div>
            </div>

            {/* Legal Help */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Legal Help
                </h3>
                <Scale className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Access licensed professionals for guidance on business formation, contracts, and compliance — or find local free legal clinics.
                </p>
              </div>
            </div>

            {/* Business Plan Review */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Business Plan Review
                </h3>
                <ClipboardList className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Get honest feedback on your plan, pricing, and growth strategy. Perfect for owners who need clear financial and operational insight.
                </p>
              </div>
            </div>

            {/* Business Growth & Strategy */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Business Growth & Strategy
                </h3>
                <BarChart3 className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Personalized guidance on scaling your business — from hiring and operations to expanding your offerings or moving into a larger space.
                </p>
              </div>
            </div>

            {/* Branding & Visual Content */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Branding & Visual Content
                </h3>
                <Camera className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Create a consistent visual identity with help on photos, logos, and social media style — perfect for boutiques and artists.
                </p>
              </div>
            </div>

            {/* Tech & Tools */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Tech & Tools
                </h3>
                <Monitor className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Websites, email setup, domains, online booking, payments, and automation tools — everything to keep your business running smoothly.
                </p>
              </div>
            </div>

            {/* Operations & Time-Saving Tools */}
            <div className="group border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 hover:border-orange-500 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-orange-600 text-center">
                  Operations & Time-Saving Tools
                </h3>
                <Settings className="w-12 h-12 mx-auto text-orange-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
                <p className="mt-3 text-gray-700 text-base">
                  Simplify the daily grind with smarter processes, communication, and workflows — saving time and reducing stress.
                </p>
              </div>
            </div>
          </div>
        </section>




        {/* --- CTA --- */}
        <section className="container text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Let's work on this together
          </h3>
          <p className="mt-3 text-gray-600">
            We'll start with what’s working, what’s not, and together we go to the next level.
          </p>
          <div className="mt-6">
            <Link
              href="/connect"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 text-lg transition-colors"
            >
              Let’s talk
            </Link>
            <Link
              href="/services"
              className="inline-block text-orange-600 hover:text-orange-700 border-orange-600 hover:border-orange-700 font-semibold px-6 py-3 rounded-full text-lg transition-colors border  ml-6"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
