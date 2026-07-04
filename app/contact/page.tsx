import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | מכללת אמביציות - עדנה מימון",
  description: "צרו קשר עם עדנה מימון לפרטים על סדנאות, קורסים ואימון אישי — דרך WhatsApp, אימייל או טופס יצירת קשר.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">צור קשר</h1>
          <p className="text-white/80 text-xl">נשמח לענות על כל שאלה ולעזור לכם להתחיל</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-purple-900 mb-8">פרטי התקשרות</h2>

              <div className="space-y-6">
                <a href="mailto:ednamaim@gmail.com" className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors group">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white text-xl shrink-0 group-hover:bg-purple-700 transition-colors">
                    ✉️
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">דוא&quot;ל</div>
                    <div className="font-bold text-purple-900">ednamaim@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">כתובת</div>
                    <div className="font-bold text-purple-900">בצלאל 8, רמת גן</div>
                    <div className="text-gray-600 text-sm">ליד תחנת רכבת סבידור</div>
                  </div>
                </div>

              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="font-bold text-purple-900 mb-2">שעות פעילות</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  <div>ראשון – חמישי: 10:00–18:00</div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-purple-900 mb-8">שלחו הודעה</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
