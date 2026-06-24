import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סדנאות | מכללת אמביציות - עדנה מימון",
  description: "סדנאות NLP: שליטה בכעסים, ביטחון עצמי, זוגיות, תקשורת בינאישית ועוד. שינוי אמיתי בשיטות מוכחות.",
};

export default function WorkshopsPage() {
  return (
    <div>
      <section className="relative py-16 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_195.jpg" alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">הסדנאות שלנו</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            כולן בשיטת NLP ותרפיית קו הזמן — שינוי מהיר, עמוק ומתמשך
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((w) => (
              <div key={w.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-800 to-purple-500" />
                <div className="p-8">
                  <div className="text-5xl mb-4">{w.icon}</div>
                  <h2 className="text-2xl font-bold text-purple-900 mb-2">{w.title}</h2>
                  <p className="text-yellow-600 font-medium mb-4">{w.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{w.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">📅 {w.sessions} מפגשים</span>
                    <span className="flex items-center gap-1">⏰ {w.sessionLength} כל מפגש</span>
                  </div>
                  <Link
                    href={w.href}
                    className="block text-center bg-purple-800 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
                  >
                    פרטים נוספים
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What all workshops share */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-10">מה משותף לכל הסדנאות?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "🎯", title: "תוצאות מדידות", desc: "שינוי אמיתי שרואים בשטח כבר אחרי המפגש הראשון" },
              { icon: "🧠", title: "שיטת NLP", desc: "עבודה עם תת המודע לשינוי עמוק ומהיר" },
              { icon: "👥", title: "קבוצה קטנה", desc: "קבוצות קטנות לאינטראקציה אישית ועמוקה" },
              { icon: "📍", title: "מיקום נוח", desc: "בצלאל 8, רמת גן — ליד תחנת רכבת סבידור, חניה חינם" },
              { icon: "❤️", title: "אוירה תומכת", desc: "סביבה בטוחה, חמה ואכפתית לשינוי" },
              { icon: "🔄", title: "שינוי הדרגתי", desc: "צעד אחר צעד, בקצב שלך, לתוצאות מתמשכות" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-purple-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-purple-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">מעוניין/ת להירשם?</h2>
          <p className="text-gray-600 mb-6">צרו קשר לבדיקת תאריכים, פרטים ועלות</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition-colors">
              💬 שלחו WhatsApp
            </a>
            <Link href="/schedule" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
              תאריכי סדנאות
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
