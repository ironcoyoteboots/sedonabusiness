import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

// Import Inter from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});




export const metadata = {
  title: "Align Delivery",
  description:
    "Helping leaders and teams align vision, process, and delivery for predictable results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      {/* Apply Inter globally */}
      <body
        className={`${inter.className} text-gray-600 min-h-screen flex flex-col`}
        style={{ fontFamily: inter.style.fontFamily }} >

        {/* FIXED HEADER */}
        <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="group text-2xl font-bold tracking-tight">
              <span className="text-gray-600 group-hover:text-gray-400">Align</span>
              <span className="text-cyan-600 group-hover:text-cyan-400">
                Delivery
              </span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link
                href="/clients"
                className="hover:text-cyan-600 transition"
              >
                Client Stories
              </Link>
              <Link
                href="/connect"
                className="hover:text-cyan-600 transition"
              >
                Connect
              </Link>
            </nav>
          </div>
        </header>

        {/* SPACER so content starts directly under the fixed header */}
        <div className="h-16" />

        {/* PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200">
          <div className="container py-8 text-center text-sm text-gray-500">
            © {year} Align Leadership — Nick Parsons
          </div>
        </footer>
      </body>
    </html>
  );
}
