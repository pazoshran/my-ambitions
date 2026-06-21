import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סדנה שליטה בכעסים עם המומחית עדנה מימון | מכללת אמביציות",
  description: "הסדנה שתלמד אותך להשתחרר מכעסים ולחצים באמצעות עבודה עם תת המודע. 6 מפגשים, שיטת NLP. עדנה מימון, רמת גן.",
};

const reasons = [
  {
    num: "1",
    text: "יכול להיות שאתה חווה תיסכול רב על כך שלא מבינים אותך, שלא רואים את הכאב שלך. הסביבה לא נותנת את היחס שאתה מצפה לו — כי הסביבה מתוסכלת בעצמה. יכול להיות שזה משתלט עליך בזמן אמת, ובכך התיסכול רק גדל.",
  },
  {
    num: "2",
    text: "איך הזוגיות? האם אתה מאושר? אם אתה חווה לחץ, סטרס, תיסכול, כעסים — הסדנה הזאת מדויקת לך. בסדנה תקבל כלים פרקטיים לשחרור וניהול כעסים.",
  },
  {
    num: "3",
    text: "אם יש לך ילדים, הם כבר למדו להתנהג כמוך. בסדנה תלמד איך לגרום להם להקשיב לך, איך ליצור תקשורת נעימה איתם, ואיך להשיג את מה שאתה רוצה בקלות.",
  },
];

const curriculum = [
  "מה זה תת מודע + הכנת המוח לשינוי + למה אנשים לא מצליחים לעשות שינוי לבד",
  "איך הגענו למה שהגענו, ואיך זה משפיע על חיינו",
  "מה יכלול השינוי — כלים פרקטיים לשינוי אמיתי",
  "איזה סוגי תודעה קיימים",
  "איך נשנה את התקשורת שלנו: בזוגיות, עם הילדים, ובכלל עם כל אחד",
  "שינוי התיכנות הקיים במוח, טיפול בטראומות עבר",
  "ריסטארט למוח — טכניקות מדויקות לניקוי רגשות מתת המודע",
  "הסוד הגדול להקשבה",
  "חיבור לילד הפנימי + מי אני באמת",
  "סיכום השינוי — כולל הסוד לשמירת השינוי לאורך זמן",
];

const testimonials = [
  { name: "חן", text: "המלצה חמה על הסדנה לשליטה בכעסים — שינוי אמיתי שרואים בשטח כבר אחרי המפגש הראשון." },
  { name: "שאולי", text: "אילו ידעתי שזה מה שאקבל, הייתי נרשם מזמן! הסדנה סחפה אותי קדימה בתחושות נפלאות." },
  { name: "יניב פנקר, אילת", text: "כלים פרקטיים שאני משתמש בהם כל יום. עדנה מומחית אמיתית בתחום." },
  { name: "לימור מעודד, חולון", text: "הזוגיות שלנו השתפרה מאוד. ממליצה בחום לכל אחד שחווה קשיים ברגשות." },
];

export default function AngerManagementLandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_306.jpg" alt="" fill className="object-cover opacity-15" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/10 text-yellow-300 border border-yellow-300/30 rounded-full px-4 py-1 text-sm font-medium mb-6">
            18 שנות ניסיון | מאות לקוחות מרוצים | הצלחות מדברות בעד עצמן
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            סדנה שליטה בכעסים
            <span className="block text-yellow-300 mt-2">עם המומחית עדנה מימון</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-3">
            הסדנה שתלמד אותך איך להשתחרר מכעסים ולחצים באמצעות עבודה עם תת המודע
          </p>
          <p className="text-white/70 mb-8">
            בשיטה הכי מהירה, מוכחת, מוצלחת, בטוחה וטבעית — ללא כדורים!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0507378535" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors text-lg">
              📞 השאר/י פרטים עכשיו
            </a>
            <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3 reasons */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">3 סיבות שתרצה להצטרף לסדנה</h2>
          <p className="text-center text-gray-600 mb-10">שחרור וניהול כעסים בשיטת NLP</p>
          <div className="space-y-6">
            {reasons.map((r) => (
              <div key={r.num} className="flex gap-5 bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-10 h-10 bg-purple-800 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
                  {r.num}
                </div>
                <p className="text-gray-700 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-10 px-4 text-center" style={{ background: "linear-gradient(135deg, #5B2D8E, #7B4DB8)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-white text-xl font-bold mb-4">מוכן/ה לשינוי אמיתי? השאר/י פרטים עכשיו!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0507378535" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
              📞 050-737-8535
            </a>
            <Link href="/contact" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors">
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </section>

      {/* Expert section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <Image
                src="/images/27729_111.jpg"
                alt="עדנה מימון"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-md w-44 h-44 md:w-48 md:h-48"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">בואו ללמוד מהמומחית בתחום — עדנה מימון</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                מומחה הוא מי שלמד הרבה מהטובים ביותר בעולם, וגם רכש ניסיון עשיר בפועל. עדנה מהווה דוגמה בהתנהגות שלה ובגישה שלה — 18 שנות ניסיון עם מאות לקוחות מרוצים.
              </p>
              <div className="bg-white rounded-xl p-4 border border-purple-100">
                <p className="text-purple-900 font-medium text-lg leading-relaxed">
                  &quot;שינוי אמיתי עושים רק בתת המודע. בלי ניקוי רגשי בתת המודע, לא יהיה שינוי!&quot;
                </p>
                <p className="text-gray-500 text-sm mt-2">— עדנה מימון</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the workshop includes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-8">מה כוללת הסדנה</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <span className="w-6 h-6 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-8">פרטי הסדנה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 mb-4">לוגיסטיקה</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-purple-400">📅</span> 6 מפגשים פרונטליים, פעם בשבוע</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">⏰</span> 3.5 שעות כל מפגש | 17:30–21:00 (עם 2 הפסקות)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">📍</span> בצלאל 8, רמת גן (ליד תחנת ארלוזורוב/סבידור)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">🚗</span> חניה חינם בסביבה</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">👥</span> קבוצה קטנה לאינטראקציה אישית</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-purple-100 p-6">
              <h3 className="font-bold text-purple-900 mb-4">מה תרוויח/י</h3>
              <ul className="space-y-3 text-gray-700">
                {["שמחה, רוגע, שקט נפשי", "שחרור מכעסים ולחצים", "שיפור הזוגיות והתקשורת", "ביטחון, כבוד עצמי ואהבה עצמית", "שינוי שנשמר לאורך זמן", "כלים פרקטיים ליישום מיידי"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-purple-900 text-white rounded-3xl p-8">
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">לא, זו לא בושה לטפל בכעסים. אבל זו בושה לא לטפל בהם!</span>
              <br /><br />
              אתה לא אשם — גדלת בצורה מסוימת, וזה יצר את הכעסים. אך אם תבחר שלא לשנות, אתה תסחב את האחריות הזאת על גבך — ועם זה, את התיסכול של הסובבים אותך ושל עצמך.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">מה אומרים המשתתפים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-yellow-500 text-2xl mb-3">❝</div>
                <p className="text-gray-700 leading-relaxed mb-4">{t.text}</p>
                <p className="font-bold text-purple-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center text-white" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">עכשיו זה הזמן!</h2>
          <p className="text-white/80 text-lg mb-4">
            השאר/י פרטיך בטופס, או שלח/י WhatsApp
            <br />
            ותהיה/י את/ה השולט/ת במציאות שלך.
          </p>
          <p className="text-white/60 text-sm mb-8">המקומות מוגבלים — הסדנה מתמלאת מהר</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0507378535" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
              📞 050-737-8535
            </a>
            <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition-colors">
              💬 WhatsApp
            </a>
            <Link href="/contact" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors">
              טופס יצירת קשר
            </Link>
          </div>
          <div className="mt-8">
            <Link href="/schedule" className="text-yellow-300 underline text-sm hover:text-yellow-200 transition-colors">
              לתאריכי הסדנה הקרובים ←
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
