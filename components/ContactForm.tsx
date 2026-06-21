"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    if (!termsAccepted) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
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
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">ההודעה נשלחה בהצלחה!</h3>
        <p className="text-green-700">נחזור אליך בהקדם האפשרי.</p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-green-600 underline text-sm"
        >
          שלח הודעה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">דוא&quot;ל</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">נושא</label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        >
          <option value="">בחר נושא...</option>
          <option value="סדנת שליטה בכעסים">סדנת שליטה בכעסים</option>
          <option value="סדנת ביטחון עצמי">סדנת ביטחון עצמי</option>
          <option value="סדנת זוגיות">סדנת זוגיות</option>
          <option value="סדנאות אחרות">סדנאות אחרות</option>
          <option value="קורס NLP">קורס NLP</option>
          <option value="אימון אישי">אימון אישי</option>
          <option value="שאלה כללית">שאלה כללית</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">הודעה *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
          placeholder="כתבו כאן את שאלתכם או בקשתכם..."
        />
      </div>

      {formState === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
          שגיאה בשליחה. אנא נסו שוב או צרו קשר ישירות בטלפון.
        </div>
      )}

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          required
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mt-1 w-4 h-4 accent-purple-700 shrink-0 cursor-pointer"
        />
        <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
          קראתי ואני מאשר/ת את{" "}
          <Link href="/terms" target="_blank" className="text-purple-700 underline hover:text-purple-900 font-medium">
            תנאי השימוש
          </Link>{" "}
          של האתר
        </label>
      </div>

      <button
        type="submit"
        disabled={formState === "loading" || !termsAccepted}
        className="w-full bg-purple-800 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-lg"
      >
        {formState === "loading" ? "שולח..." : "שלח הודעה"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        המידע שלך נשמר בסודיות מלאה ולא יועבר לצד שלישי כלשהו.
      </p>
    </form>
  );
}
