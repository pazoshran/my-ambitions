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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-right">
        <h2 className="text-xl font-bold text-purple-900 mb-3">ברוכים הבאים למכללת אמביציות</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          כדי להמשיך לגלוש באתר, עליך לאשר שקראת את{" "}
          <Link href="/terms" target="_blank" className="text-purple-700 underline font-medium hover:text-purple-900">
            תנאי השימוש
          </Link>{" "}
          שלנו ואתה מסכים/ה להם.
        </p>
        <p className="text-gray-500 text-xs mb-5">
          האתר כולל מידע על קורסים, סדנאות ואימון אישי. השימוש באתר מהווה הסכמה לתנאי השימוש.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            קראתי ומאשר/ת את תנאי השימוש
          </button>
          <Link
            href="/terms"
            target="_blank"
            className="flex-1 text-center border border-purple-200 text-purple-800 font-medium py-3 rounded-xl hover:bg-purple-50 transition-colors"
          >
            קריאת תנאי השימוש
          </Link>
        </div>
      </div>
    </div>
  );
}
