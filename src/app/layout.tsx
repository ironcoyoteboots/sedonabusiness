import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Sedona Business Help",
  description: "Free help for Sedona small businesses — websites, marketing, tech support, and advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-600 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200">
          <div className="container py-8 text-center text-sm text-gray-500">
            © {year} Sedona Business Help
          </div>
        </footer>
      </body>
    </html>
  );
}
