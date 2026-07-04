import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש | מכללת אמביציות",
  description: "תנאי השימוש באתר מכללת אמביציות של עדנה מימון.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">תנאי שימוש</h1>
          <p className="text-white/70">עדכון אחרון: 2025</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose-rtl">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">1. כללי</h2>
              <p>
                ברוכים הבאים לאתר מכללת אמביציות (להלן: &quot;האתר&quot;). השימוש באתר זה מהווה הסכמה לתנאי השימוש
                המפורטים להלן. אנא קראו אותם בעיון לפני השימוש באתר.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">2. תוכן האתר</h2>
              <p>
                כל התכנים המופיעים באתר זה — מאמרים, ציטוטים, תכנים חינוכיים ומידע על שירותים —
                שמורים לעדנה מימון ומכללת אמביציות. ניתן להשתמש בתכנים לכל מטרה חיובית,
                בתנאי שתציינו את שם הכותבת — עדנה מימון.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">3. פרטיות</h2>
              <p>
                המידע שנמסר לנו דרך טפסי יצירת הקשר נשמר בסודיות מלאה ואינו מועבר לצד שלישי כלשהו.
                אנו משתמשים בפרטים ליצירת קשר ולמשלוח מידע רלוונטי בלבד.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">4. שירותים</h2>
              <p>
                המידע על הסדנאות, הקורסים ואימון אישי המוצג באתר הוא לצורך מידע כללי. פרטים מדויקים
                (מחיר, זמינות, תאריכים) יאושרו ישירות מול עדנה מימון בטלפון או באמצעות טופס יצירת הקשר.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">5. אחריות</h2>
              <p>
                האתר מספק מידע כללי לצורך חינוך והעשרה. הוא אינו מהווה תחליף לייעוץ מקצועי רפואי
                או פסיכולוגי. לכל מצב חירום נפשי או רפואי יש לפנות לגורמי מקצוע מוסמכים.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">6. ניוזלטר</h2>
              <p>
                לאחר השארת הפרטים, תקבל את הניוזלטר שלנו, הכולל טיפים לשליטה בכעסים. במידה שלא תרצה
                להמשיך לקבל את הניוזלטר, תוכל לבטל הרשמה כבר במייל הראשון שתקבל.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">7. קישורים חיצוניים</h2>
              <p>
                האתר עשוי להכיל קישורים לאתרים חיצוניים. מכללת אמביציות אינה אחראית לתוכן
                אתרים אלה ולאמינות המידע שבהם.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-3">8. יצירת קשר</h2>
              <p>
                לשאלות בנוגע לתנאי השימוש ניתן לפנות אלינו:
              </p>
              <ul className="list-none space-y-3 mt-3">
                <li>
                  <a
                    href="https://wa.me/9720507378535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-2 rounded-full transition-colors text-sm"
                  >
                    💬 שלחו הודעה ב-WhatsApp
                  </a>
                </li>
                <li>✉️ דוא&quot;ל: ednamaim@gmail.com</li>
                <li>📍 כתובת: בצלאל 8, רמת גן</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mt-8">
              <p className="text-sm text-gray-600">
                השימוש באתר מכללת אמביציות מהווה הסכמה לכל תנאים המפורטים לעיל.
                תנאים אלה עשויים להתעדכן מעת לעת. עדכון משמעותי יפורסם בדף זה.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
