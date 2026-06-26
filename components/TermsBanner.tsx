"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function TermsBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("terms-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("terms-accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="הודעת תנאי שימוש"
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-purple-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          האתר עושה שימוש בתוכן ובמידע למטרות מידע בלבד. המשך הגלישה באתר מהווה הסכמה ל
          <Link href="/terms" className="text-purple-700 underline font-medium hover:text-purple-900">
            תנאי השימוש
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/terms"
            className="text-sm text-purple-700 font-medium hover:text-purple-900 transition-colors"
          >
            קריאת התנאים
          </Link>
          <button
            onClick={handleAccept}
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            הבנתי ומאשר/ת
          </button>
        </div>
      </div>
    </div>
  );
}
