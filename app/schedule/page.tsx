import Link from "next/link";
import { scheduleDates } from "@/data/workshops";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תאריכי סדנאות | מכללת אמביציות",
  description: "תאריכים קרובים לסדנאות שליטה בכעסים ועוד. רמת גן, ליד תחנת רכבת סבידור.",
};

export default function SchedulePage() {
  return (
    <div>
      <section className="py-20 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">תאריכי סדנאות</h1>
          <p className="text-white/80 text-xl">התאריכים הקרובים לסדנאות שלנו</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {scheduleDates.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-purple-100 shadow-sm mb-8 overflow-hidden">
              <div className="bg-purple-800 text-white px-8 py-4">
                <h2 className="text-2xl font-bold">{s.workshop}</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">מיקום</div>
                    <div className="text-gray-800 font-medium">{s.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">שעות</div>
                    <div className="text-gray-800 font-medium">{s.time} (כולל 2 הפסקות)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">מספר מפגשים</div>
                    <div className="text-gray-800 font-medium">{s.sessions} מפגשים שבועיים</div>
                  </div>
                </div>

                <h3 className="font-bold text-purple-900 mb-4">תאריכי התחלה קרובים:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {s.dates.map((date) => (
                    <div
                      key={date}
                      className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center"
                    >
                      <div className="text-3xl mb-2">📅</div>
                      <div className="font-bold text-purple-900 text-lg">{date}</div>
                      <div className="text-gray-600 text-sm mt-1">מפגש ראשון</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                  <p className="text-gray-700 mb-4">
                    <strong>המקומות מוגבלים!</strong> כדי לשריין את מקומך, צרו קשר בהקדם.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a href="/contact" className="bg-purple-800 text-white font-bold px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                      צרו קשר
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Info box */}
          <div className="bg-purple-50 rounded-2xl p-8">
            <h3 className="font-bold text-purple-900 mb-4">מידע כללי</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">📍</span>
                <span>המיקום: בצלאל 8, רמת גן — ליד תחנת רכבת סבידור מרכז (אזור הבורסה)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">🚗</span>
                <span>חניה: ניתן לחנות ברחוב ובחניונים הסמוכים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">💳</span>
                <span>ניתן לשלם בכרטיס אשראי, מזומן ועסקאות תשלומים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">📞</span>
                <span>לתאריכים נוספים ולסדנאות אחרות — צרו קשר ישירות</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
