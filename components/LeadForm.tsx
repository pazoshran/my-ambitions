"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export default function LeadForm({
  title = "השאירו פרטים ונחזור אליכם",
  subtitle,
  source = "",
}: {
  title?: string;
  subtitle?: string;
  source?: string;
}) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) return;
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: source ? `השארת פרטים — ${source}` : "השארת פרטים מהאתר",
          message: `פנייה חדשה דרך טופס השארת פרטים${source ? ` (${source})` : ""}.`,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "" });
        setTermsAccepted(false);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">הפרטים נשלחו בהצלחה!</h3>
        <p className="text-green-700">נחזור אליכם בהקדם האפשרי.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-bold text-purple-900 mb-1">{title}</h3>
      {subtitle && <p className="text-gray-600 text-sm mb-5">{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="השם שלך"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">אימייל *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="050-000-0000"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={`lead-terms-${source}`}
            required
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 accent-purple-700 shrink-0 cursor-pointer"
          />
          <label htmlFor={`lead-terms-${source}`} className="text-sm text-gray-600 cursor-pointer leading-relaxed">
            קראתי ואני מאשר/ת את{" "}
            <Link href="/terms" target="_blank" className="text-purple-700 underline hover:text-purple-900 font-medium">
              תנאי השימוש
            </Link>{" "}
            של האתר
          </label>
        </div>

        {formState === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
            שגיאה בשליחה. אנא נסו שוב או צרו קשר דרך WhatsApp.
          </div>
        )}

        <button
          type="submit"
          disabled={formState === "loading" || !termsAccepted}
          className="w-full bg-purple-800 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-lg"
        >
          {formState === "loading" ? "שולח..." : "שליחה"}
        </button>
      </form>
    </div>
  );
}
