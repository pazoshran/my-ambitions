import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סדנת שליטה בכעסים | מכללת אמביציות",
  description: "הסדנה הטובה בישראל לשחרור כעסים. 6 מפגשים, שיטת NLP, תוצאות מיידיות. עדנה מימון, רמת גן.",
};

const topics = [
  "הבנת מקור הכעס ואיך הוא פועל בתת המודע",
  "טכניקות NLP לשחרור מיידי של כעס ותסכול",
  "תרפיית קו הזמן לניקוי רגשות שליליים מהשורש",
  "שיפור התקשורת עם בני המשפחה והסביבה",
  "ניהול מצבי לחץ וכניסה לפרופורציות",
  "בניית ביטחון עצמי ואהבה עצמית",
];

export default function AngerManagementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🌊</div>
          <h1 className="text-4xl font-bold mb-4">סדנת שליטה בכעסים</h1>
          <p className="text-white/80 text-xl">הסדנה הטובה בישראל לשחרור כעסים והתפרצויות זעם</p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* About */}
          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">על הסדנה</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                סדנת שליטה בכעסים היא סדנה ייחודית המעצימה אותך המשתתף/ת, ומובילה אותך לשינוי הדרגתי,
                צעד צעד, באופן מושלם לשינוי בגישה שלך.
              </p>
              <p>
                השינוי יגרום לך לאהוב יותר את עצמך, להעריך את עצמך יותר, לבטוח בעצמך יותר,
                לתת לדברים לעבור מלידך, להיכנס יותר לפרופורציות, להיות יותר מסופק/ת ומאושר/ת.
              </p>
              <p>
                אתה שואל: &quot;בשישה מפגשים אפשר לשנות הרגלי שנים?&quot; התשובה היא כן — כי אנחנו עובדים
                ישירות עם תת המודע, שם נמצאים ההרגלים האוטומטיים שלנו.
              </p>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">פרטי הסדנה</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-purple-400">📅</span> 6 מפגשים שבועיים</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">⏰</span> 3.5 שעות כל מפגש (17:30–21:00)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📍</span> בצלאל 8, רמת גן (ליד תחנת סבידור)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">🚗</span> חניה חינם באזור</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">👥</span> קבוצה קטנה</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">🎓</span> תעודת השתתפות</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-4">מה תרוויח/י</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "שחרור כעסים מוכן ולא מוכן",
                  "שיפור ביחסים עם בני המשפחה",
                  "הגברת הסבלנות והשקט הפנימי",
                  "שיפור הביטחון העצמי",
                  "כלים לחיים ליישום מיידי",
                  "שינוי ממשי שנמשך לאורך זמן",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Topics */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">נושאים שנלמד</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4">
                  <span className="bg-purple-200 text-purple-900 font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-purple-900 text-white rounded-3xl p-8 text-center mb-10">
            <div className="text-yellow-300 text-4xl mb-3">❝</div>
            <p className="text-lg leading-relaxed mb-4">
              הסדנה הזאת לא רק מלמדת שליטה בכעסים — היא מלמדת שליטה בחיים.
              כי כשאנחנו שולטים ברגשות שלנו, אנחנו שולטים בכל מה שקורה סביבנו.
            </p>
            <p className="text-yellow-300 font-medium">— עדנה מימון</p>
          </div>

          {/* Registration */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">הירשמו לסדנה הבאה</h3>
            <p className="text-gray-600 mb-6">המקומות מוגבלים. צרו קשר עכשיו כדי לשריין את מקומכם</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0507378535" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                📞 050-737-8535
              </a>
              <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition-colors">
                WhatsApp
              </a>
              <Link href="/schedule" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
                תאריכים קרובים
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
