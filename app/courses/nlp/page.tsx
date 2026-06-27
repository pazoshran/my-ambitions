import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורס NLP | מכללת אמביציות - עדנה מימון",
  description: "קורס NLP מורחב ומקצועי. 17 מפגשים, 54 שעות אקדמיות. שיטות לשינוי מחשבות, רגשות והתנהגויות. רמת גן.",
};

const curriculum = [
  "מבוא ל-NLP — עקרונות יסוד ומודלים",
  "מפות עולם ואמונות — כיצד אמונות מעצבות את חיינו",
  "תקשורת מיטבית — מודל Milton, Meta-model",
  "Submodalities — שינוי אופן עיבוד מידע",
  "עיגון (Anchoring) — יצירת מצבי רוח חיוביים",
  "Reframing — שינוי פרשנות לסיטואציות",
  "Parts Integration — פתרון קונפליקטים פנימיים",
  "Timeline Therapy — ניקוי רגשות שליליים מהשורש",
  "Strategies — הבנה ושינוי דפוסי חשיבה",
  "Swish Pattern — שינוי הרגלים ועצבנות",
  "Phobia Cure — הסרת פוביות בזמן קצר",
  "Future Pacing — תכנון ויצירת עתיד רצוי",
  "הנחות יסוד של NLP",
  "ערכים ומטאפרוגרמות",
  "דמיון מודרך בסגנון אריקסוניאני",
  "עבודה עם זוגות ומשפחות",
  "אינטגרציה ויישום מעשי",
];

const bonuses = [
  "קבוצת WhatsApp לתמיכה שוטפת",
  "חזרה חינמית על מפגשים שפוספסו",
  "גישה לחומרי עזר דיגיטליים",
  "שעת ייעוץ פרטית עם עדנה",
  "2 נקודות זכות להשתלמות ממשרד החינוך",
];

export default function NLPCoursePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_288.jpg" alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">🌟</div>
          <h1 className="text-4xl font-bold mb-4">קורס NLP</h1>
          <p className="text-white/80 text-xl">&quot;כישורים לחיים עם ביטחון עצמי&quot;</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span className="bg-white/15 text-white rounded-full px-4 py-1 text-sm">17 מפגשים</span>
            <span className="bg-white/15 text-white rounded-full px-4 py-1 text-sm">54 שעות אקדמיות</span>
            <span className="bg-white/15 text-white rounded-full px-4 py-1 text-sm">2 נ&quot;ז להשתלמות</span>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* About */}
          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">על הקורס</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                קורס ה-NLP שלנו הוא הקורס שיגרום לך להבין שהכל אפשרי! הכל! בקורס תלמד/י טכניקות
                לשינוי בקלות יותר דרך תת המודע — כי ממנו מגיע השינוי האמיתי.
              </p>
              <p>
                תוכל/י לשנות הלכי רוח מיידית, לשנות את ה&quot;סרטים בראש&quot;, לשנות את הקולות הפנימיים,
                לפתור קונפליקטים בקלות, להעלים פוביות וחרדות, לטפל בטראומות ועוד.
              </p>
              <p>
                זהירות: הקורס כל כך טוב ומלהיב, שאתה עוד תאמין שאת/ה יוצר/ת ניסים!
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">פרטי הקורס</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-purple-400">📅</span> 17 מפגשים, אחד לשבוע</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">⏰</span> 4 שעות כל מפגש</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">🎓</span> 54 שעות אקדמיות</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📍</span> בית רגב קפיטל, בצלאל 4, רמת גן (קרקע)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">🚗</span> חניה חינם בבניין</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📜</span> 2 נקודות זכות ממשרד החינוך</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">בונוסים כלולים</h3>
              <ul className="space-y-3 text-gray-700">
                {bonuses.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">★</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">תכנית הלימודים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {curriculum.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-3">
                  <span className="bg-purple-200 text-purple-900 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who is it for */}
          <div className="bg-white border border-purple-100 rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold text-purple-900 mb-4">למי מיועד הקורס?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              הקורס מיועד לכל מי שרוצה לשפר את חייו, לרכוש כלים מעשיים לשינוי, ולהבין איך תת המודע
              עובד. הוא מתאים גם למטפלים, מאמנים, מורים ואנשי מקצוע שרוצים להרחיב את ארגז הכלים שלהם.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["אנשים פרטיים", "מטפלים ומאמנים", "פסיכולוגים", "עובדים סוציאליים", "מורים ומחנכים", "אנשי עסקים"].map((t) => (
                <div key={t} className="text-center bg-purple-50 rounded-lg py-2 px-3 text-sm text-purple-800 font-medium">{t}</div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-900 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">מעוניין/ת בפרטים נוספים?</h3>
            <p className="text-white/80 mb-6">צרו קשר לפרטים על התאריכים הקרובים ועלות הקורס</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-yellow-400 text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">
                צרו קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
