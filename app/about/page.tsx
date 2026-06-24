import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מי אנחנו | מכללת אמביציות - עדנה מימון",
  description: "הכירו את עדנה מימון, מאסטרית NLP עם 18+ שנות ניסיון. הסמכות בינלאומיות, ניסיון עשיר ואהבה אמיתית לאנשים.",
};

const credentials = [
  "NLP Trainer / Dr. Richard Bandler (תעודת הוראה בינלאומית ללמד NLP)",
  "NLP Master Practitioner / Dr. Richard Bandler",
  "NLP Practitioner / Dr. Richard Bandler",
  "NLP Coach / Dr. Richard Bandler",
  "NHR - Neuro Hypnotic Repatterning / Dr. Richard Bandler",
  "Persuasion Engineering / Dr. Richard Bandler",
  "Master Timeline Therapy / Dr. Tad James",
  "NLP Trainer's Training / Dr. Tad James",
  "NLP Master Coach / Dr. Tad James",
  "NLP Master Hypnotherapy / Dr. Tad James",
  "APG - Accessing Personal Genius / Michael Hall",
  "Provocative Therapy / Nick Kemp",
  "Strategies of Genius / Robert Dilts",
  "Art of Authentic Charisma / Robert Dilts",
  "The Hero's Journey / Stephen Gilligan",
  "Metaphors of Movement / Andrew T. Austin",
  "Date With Destiny / Tony Robbins",
  "HPA: High Performance Academy / Brendon Burchard",
  "Theta Healing + Theta Healing Advanced DNA",
  "Embodiment / Paul Linden",
  "CBT, Mindfulness, IEMT, Access Bars Consciousness",
  "תואר B.A. באנגלית",
  "תעודת הוראה",
  "מאמנת אישית בכירה מוסמכת — ממציא השיטה",
  "מאמנת אישית בכירה — לשכת המאמנים בישראל (MCIL)",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">מי אנחנו</h1>
          <p className="text-white/80 text-xl">מכללת אמביציות — עדנה מימון</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="shrink-0 flex justify-center">
                <Image
                  src="/images/27729_111.jpg"
                  alt="עדנה מימון"
                  width={220}
                  height={220}
                  className="rounded-2xl object-cover shadow-md w-48 h-48 md:w-56 md:h-56"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-4">על עדנה מימון</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  עדנה מימון היא מאסטרית NLP, מאמנת אישית בכירה מוסמכת ומנחת סדנאות עם ניסיון של 18+ שנים.
                  היא מתמחה בשחרור כעסים, שיפור ביטחון עצמי, טיפול בפחדים וחרדות, שיפור זוגיות ואימון אישי.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  עדנה למדה מהמומחים הגדולים בעולם — Dr. Richard Bandler (ממציא ה-NLP), Dr. Tad James,
                  Tony Robbins, Robert Dilts ועוד.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                מי שמערכת היחסים שלו עם עצמו טובה — מערכת היחסים שלו עם כולם תהיה טובה.
                זוהי האמונה המרכזית שמובילה את עבודתה של עדנה.
              </p>
              <p>
                עדנה עבדה כמורה שנים רבות, וראתה את קשיי התלמידים. הבינה שחייבת להיות דרך נוספת לעזור —
                דרך שלא מלמדים בלימודי הוראה. לאחר מחקר ולמידה מעמיקה, מצאה את הדרך הזאת ב-NLP.
              </p>
              <p>
                כיום היא מאמנת מבוגרים (מגיל 16 ומעלה) ומנחה סדנאות לביטחון עצמי לנוער עד גיל 14.5.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">תחומי התמחות</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "שליטה בכעסים ושחרור כעסים",
                "שיפור ביטחון עצמי ודימוי עצמי",
                "טיפול בפחדים, חרדות ופוביות",
                "שיפור הזוגיות ותקשורת זוגית",
                "תרפיית קו הזמן (Timeline Therapy)",
                "טיפול בטראומות ו-OCD",
                "העלמת רגשות שליליים",
                "ניהול מצבי רוח ורגשות",
                "פריצת גבולות והרחבת תודעה",
                "אימון אישי לקריירה ועצמאות",
                "סדנאות נוער לביטחון עצמי",
                "טיפול בעודף משקל דרך תת המודע",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-purple-100">
                  <span className="text-yellow-500 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">הסמכות ותעודות</h2>
            <div className="bg-white rounded-2xl border border-purple-100 divide-y divide-purple-50">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3 px-6 py-3">
                  <span className="text-purple-400 mt-0.5">🎓</span>
                  <span className="text-gray-700 text-sm">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-purple-900 text-white rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4">רוצים לדעת יותר?</h3>
            <p className="text-white/80 mb-6">צרו קשר עכשיו ונשמח לענות על כל שאלה</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
                💬 שלחו WhatsApp
              </a>
              <Link href="/contact" className="bg-white/15 border border-white/30 text-white font-bold px-6 py-2 rounded-full hover:bg-white/25 transition-colors">
                טופס יצירת קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
