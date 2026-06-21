import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מהי שיטת NLP | מכללת אמביציות",
  description: "הסבר מלא על שיטת NLP — מה זה, איך זה עובד ולמה זה כל כך יעיל. עדנה מימון, מכללת אמביציות.",
};

export default function WhatIsNLPPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">מהי שיטת NLP?</h1>
          <p className="text-white/80 text-xl">Neuro Linguistic Programming — ניתוב לשוני פיזיולוגי</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Definition */}
          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">מה זה NLP?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              NLP הוא קיצור של המלים: <strong>Neuro Linguistic Programming</strong> ובעברית: <strong>ניתוב לשוני פיזיולוגי</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center border border-purple-100">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-bold text-purple-900 mb-2">Neuro</h3>
                <p className="text-gray-600 text-sm">הדרך בה אנו קולטים ומעבדים מידע דרך החושים — מגיע למערכת העצבית</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-purple-100">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-purple-900 mb-2">Linguistic</h3>
                <p className="text-gray-600 text-sm">מערכת סמלים ושפה — שפת מילים, שפת גוף, מחשבות ועוד</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-purple-100">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="font-bold text-purple-900 mb-2">Programming</h3>
                <p className="text-gray-600 text-sm">תכנות — דפוסי התנהגות וחשיבה, הרגלים ואוטומטים</p>
              </div>
            </div>
          </div>

          {/* Why NLP works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">למה NLP עובד?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                NLP היא שיטה ליצירת שינוי ממוקדת המקצרת תהליכים. היא עובדת <strong>ישירות על תת המודע</strong>,
                שם נמצאים ההרגלים, האמונות והדפוסים שמנהלים את חיינו.
              </p>
              <p>
                בניגוד לפסיכולוגיה קלאסית שעובדת על הסימפטום, NLP הולך לשורש — לאמונות ולתכנות
                שיצרו את הבעיה מלכתחילה. לכן התוצאות <strong>מהירות ומתמשכות</strong>.
              </p>
            </div>
          </div>

          {/* Core principles */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">הנחות יסוד של NLP</h2>
            <div className="space-y-4">
              {[
                {
                  title: "משמעות התקשורת נמדדת בתגובה שמתקבלת",
                  desc: "אם האחר לא מבין אותך — זה הזמן לשנות את הדרך שבה אתה מתקשר, לא להאשים אותו.",
                },
                {
                  title: "גוף ונפש הם חלקים של אותה המערכת",
                  desc: "מה שקורה בגוף משפיע על הנפש ולהיפך. כאב גופני לעיתים נובע ממצב נפשי.",
                },
                {
                  title: "אנו מגיבים לפי המפות שלנו, לא למציאות עצמה",
                  desc: "כל אדם פרש את העולם דרך הפרשנות שלו. אין נכון או לא נכון — יש רק זוויות ראיה שונות.",
                },
                {
                  title: "לכל אדם יש את כל המשאבים הדרושים לו",
                  desc: "NLP מאמין שכל אחד מסוגל לשינוי. לפעמים צריך פשוט לגלות את המשאבים שכבר קיימים.",
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-xl border border-purple-100 p-6">
                  <h3 className="font-bold text-purple-900 mb-2">✦ {p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What can NLP treat */}
          <div className="bg-purple-50 rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold text-purple-900 mb-6">מה NLP יכול לעזור בו?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "פחדים וחרדות", "פוביות", "כעסים", "ביטחון עצמי", "זוגיות",
                "טראומות", "OCD", "עודף משקל", "דיכאון", "קריירה",
                "חרדות מבחנים", "הרגלים שליליים",
              ].map((item) => (
                <div key={item} className="bg-white text-center py-2 px-3 rounded-lg text-sm text-purple-800 border border-purple-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* NLP vs Psychology */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold text-purple-900 mb-6">NLP לעומת פסיכולוגיה</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-right p-3 text-purple-900 font-bold">פסיכולוגיה</th>
                    <th className="text-right p-3 text-purple-900 font-bold">NLP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["תהליך ארוך (חודשים/שנים)", "שינוי מהיר (מפגשים ספורים)"],
                    ["מיקוד בעבר ובסיבה", "מיקוד בפתרון ובעתיד"],
                    ["עבודה על תסמינים", "עבודה על שורש הבעיה"],
                    ["ניתוח ושיחה", "טכניקות ישירות לשינוי"],
                  ].map(([psych, nlp]) => (
                    <tr key={psych}>
                      <td className="p-3 text-gray-600">{psych}</td>
                      <td className="p-3 text-green-700 font-medium">{nlp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">רוצים לחוות NLP בעצמכם?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/workshops" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                לסדנאות NLP
              </Link>
              <Link href="/courses/nlp" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
                לקורס NLP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
