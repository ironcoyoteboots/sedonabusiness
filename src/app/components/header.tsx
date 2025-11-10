"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null; // hide header on home page

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="group text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-gray-500 group-hover:text-gray-400">Sedona</span>
            <span className="text-orange-600 group-hover:text-orange-400">Business</span>
            <span className="text-gray-500 group-hover:text-gray-400">Help</span>
          </Link>

          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/services" className="hover:text-orange-600 transition">
              Services
            </Link>
            <Link href="/connect" className="hover:text-orange-600 transition">
              Get Help
            </Link>
          </nav>
        </div>
      </header>

      {/* Spacer so content sits below fixed header */}
      <div className="h-16" />
    </>
  );
}
