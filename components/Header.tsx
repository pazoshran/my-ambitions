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
  { href: "/coaching", label: "אימון אישי" },
  { href: "/articles", label: "מאמרים" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
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
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-white/20 text-white"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0507378535"
            className="hidden sm:flex items-center gap-1.5 bg-gold text-dark font-bold text-sm px-3 py-1.5 rounded-full hover:bg-gold-light transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            050-737-8535
          </a>
          <button
            className="lg:hidden text-white p-1.5"
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
        <div className="lg:hidden bg-primary-dark border-t border-white/10 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-white/20 text-white"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0507378535"
            className="flex items-center gap-2 text-gold font-bold px-3 py-2"
          >
            📞 050-737-8535
          </a>
        </div>
      )}
    </header>
  );
}
