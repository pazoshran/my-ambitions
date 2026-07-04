"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "מי אנחנו" },
  { href: "/workshops", label: "סדנאות" },
  { href: "/courses/nlp", label: "קורס NLP" },
  { href: "/courses/nlp-practitioner", label: "NLP Practitioner" },
  { href: "/coaching", label: "אימון אישי" },
  { href: "/articles", label: "מאמרים" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/27729_297.png"
            alt="מכללת אמביציות"
            width={150}
            height={75}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${
                pathname === link.href
                  ? "bg-purple-100 text-purple-900"
                  : "text-gray-600 hover:text-purple-900 hover:bg-purple-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-purple-900 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-purple-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                pathname === link.href
                  ? "bg-purple-100 text-purple-900"
                  : "text-gray-600 hover:text-purple-900 hover:bg-purple-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
