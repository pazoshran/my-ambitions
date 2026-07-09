"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "מי אנחנו" },
  { href: "/workshops", label: "סדנאות" },
  { href: "/courses/nlp", label: "כישורים לחיים עם ביטחון עצמי" },
  { href: "/courses/nlp-practitioner", label: "Practitioner" },
  { href: "/coaching", label: "אימון אישי" },
  { href: "/articles", label: "מאמרים" },
  { href: "/stories", label: "סיפורים עם מוסר השכל" },
  { href: "/testimonials", label: "המלצות" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-purple-100/80 shadow-[0_2px_16px_-8px_rgba(61,30,96,0.25)]">
      <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 transition-transform hover:scale-[1.03]">
          <Image
            src="/images/27729_297.png"
            alt="מכללת אמביציות"
            width={150}
            height={75}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                  active ? "text-purple-900" : "text-gray-600 hover:text-purple-900 hover:bg-purple-50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold transition-transform origin-center ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn btn-gold !px-5 !py-2 text-sm"
          >
            צרו קשר
          </Link>
          <button
            className="xl:hidden text-purple-900 p-1.5 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
            aria-expanded={menuOpen}
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
        <div className="xl:hidden bg-white border-t border-purple-100 px-4 py-3 space-y-1 animate-[fadeInUp_0.25s_ease-out]">
          {[...navLinks, { href: "/contact", label: "צור קשר" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
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
