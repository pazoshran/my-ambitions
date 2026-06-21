import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אימון אישי | מכללת אמביציות - עדנה מימון",
  description: "אימון אישי 1:1 עם עדנה מימון. תוכנית מותאמת אישית לצרכים שלך — פחדים, חרדות, קריירה, זוגיות ועוד.",
};

export default function CoachingPage() {
  return (
    <div>
      <section className="relative py-16 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_306.jpg" alt="" fill className="object-cover opacity-25" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl font-bold mb-4">אימון אישי</h1>
          <p className="text-white/80 text-xl">פגישות 1:1 עם עדנה מימון — תוכנית שנבנית במיוחד עבורך</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">מהו האימון האישי?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                האימון האישי הוא תהליך אישי ועמוק שמותאם בדיוק לצרכים שלך. בניגוד לסדנאות קבוצתיות,
                כאן כל המיקוד הוא עליך בלבד.
              </p>
              <p>
                עדנה משתמשת בטכניקות NLP מתקדמות, תרפיית קו הזמן, דמיון מודרך ועוד כלים עוצמתיים
                כדי להביא שינוי מהיר, עמוק ומתמשך.
              </p>
              <p>
                רוב הלקוחות מרגישים שיפור ניכר כבר מהפגישה הראשונה.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">פרטים</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-purple-400">⏰</span> פגישות של שעה (או שעתיים)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📅</span> 10-12 פגישות לתוכנית רגילה</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📍</span> פנים אל פנים ברמת גן</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📞</span> תמיכה בין פגישות</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">תחומי טיפול</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "פחדים, חרדות ופוביות",
                  "ביטחון עצמי ודימוי עצמי",
                  "קריירה ומקצוע",
                  "זוגיות ויחסים",
                  "טראומות ועצב",
                  "עודף משקל ואכילה",
                  "OCD ואובססיביות",
                  "מצבי רוח ודיכאון",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xs">●</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Case study */}
          <div className="bg-purple-50 rounded-2xl p-8 mb-10">
            <h3 className="font-bold text-purple-900 text-lg mb-4">דוגמה מהשטח</h3>
            <p className="text-gray-700 leading-relaxed">
              מקרה טיפוסי: עובד הייטק בכיר שרצה לעבור לעצמאות. ממש לפני שהיה אמור להתפטר,
              התגלו לו פחדים שלא ידע שיש לו. בעזרת מספר פגישות אימון, פרץ את הגבולות,
              קיבל את ההחלטה ועשה את הצעד לעסק עצמאי מצליח.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-purple-900 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">רוצים להתחיל?</h3>
            <p className="text-white/80 mb-6">פגישת היכרות ראשונית — ללא התחייבות</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0507378535" className="bg-yellow-400 text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">
                📞 050-737-8535
              </a>
              <Link href="/contact" className="bg-white/15 border border-white/30 text-white font-bold px-6 py-2 rounded-full hover:bg-white/25 transition-colors">
                שלחו הודעה
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
