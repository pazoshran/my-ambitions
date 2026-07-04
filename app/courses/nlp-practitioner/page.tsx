import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { courseTestimonials } from "@/data/courseTestimonials";
import ExpandableText from "@/components/ExpandableText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורס NLP Practitioner | מכללת אמביציות - עדנה מימון",
  description: "קורס NLP Practitioner מקצועי ויוקרתי עם עדנה מימון. 145 שעות אקדמיות, 3 תעודות, כלים לשינוי אמיתי. רמת גן.",
};

const audience = [
  "מטפלים מכל תחום, מאמנים אישיים, פסיכולוגים ועובדים סוציאליים",
  "כל מי שרוצה להגדיל משמעותית את ארגז הכלים שלו — לקידום אישי (רגשי/התנהגותי) ומקצועי",
];

const questions = [
  "האם את/ה מרצה אחרים כדי שיאהבו אותך?",
  "האם את/ה נפגע/ת הרבה?",
  "יש לך רגשות אשמה, פחדים, חרדות, פוביות או טראומות?",
  "עדיין לא מצאת את האושר המיוחל?",
  "את/ה מרגיש/ה תקוע/ה?",
  "רוצה לשנות כמה דברים חשובים בזוגיות שלך?",
  "קשה לך לשלוט במחשבות, או ב\"סרטים\" שרצים לך בראש?",
  "יש לך קול פנימי שמדבר אליך לא יפה — ורוצה לשנות אותו?",
  "קשה לך להיות החלטי/ת?",
  "העבר רודף אותך ולא נותן לך מנוח?",
  "כשאת/ה מסתכל/ת במראה — את/ה מוצא/ת קודם כל פגמים?",
  "חשוב לך לחיות חיי חירות רגשית ולפרוץ את הגבולות של עצמך?",
];

const curriculum = [
  "חמשת עקרונות ההצלחה", "הנחות היסוד של ה-NLP", "מודל התקשורת של ה-NLP", "מודל הלמידה",
  "אימון המוח להצלחה, לשמחה ולביטחון עצמי", "ניהול רגשות", "עקרונות תהליכי שינוי",
  "עקרונות תהליך ההנחיה הפרטנית", "מודל הרחבת התודעה", "תוצאה בנויה כהלכה",
  "כושר הבחנה וחדות חושים", "ראפור: כימיה אנושית ומערכות יחסים", "תקשורת בינאישית וסגנונות תקשורת",
  "מחולל התנהגויות חדשות", "מסע בין יועצים", "תהליך שחרור מתלות", "היררכיית הרעיונות",
  "תהליך שינוי החלטות", "תהליך שינוי היסטוריה אישית", "מודל הרמות הלוגיות של דילטס",
  "מעגל המצוינות", "מטא מודל — אומנות התשאול", "מילטון מודל — שפת ההשפעה",
  "מערכות ייצוג VAK ותת-אופנויות (Submodalities)", "עבודה עם חלקים", "עוגנים — אומנות ההתניות",
  "מטפורות", "אסטרטגיות (Strategies)", "מסגור ומסגור מחדש (Reframing)", "ריפריים בשישה צעדים",
  "דמיון מודרך", "טיים ליין (קו הזמן)", "אתיקה ואינטגרציה",
];

const bonuses = [
  "3 תעודות: תעודה בינלאומית יוקרתית, תעודת דמיון מודרך, ותעודת \"פריצת גבולות תודעתית\" של מכללת אמביציות",
  "סופרוויז'ן (פרקטיקום)",
  "לעבור את הקורס שוב בחינם כמסייעים — הזדמנות מצוינת להתקדם בתחום",
  "סדנת ניקוי רעלים רגשיים מעומק תת המודע",
  "קבוצת WhatsApp עם תמיכה תמידית",
  "טיפים ליצירת שפע בחיים",
  "חוברת עשירה בחומר וטכניקות — צעד אחר צעד",
];

const coursePhotos = ["/images/27729_217.jpg", "/images/27729_218.jpg", "/images/27729_250.jpg", "/images/27729_251.jpg", "/images/27729_267.jpg"];

export default function NLPPractitionerPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_217.jpg" alt="" fill className="object-cover opacity-15" priority />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">קורס NLP Practitioner</h1>
          <p className="text-white/85 text-xl">קורס מקצועי ויוקרתי שמשנה חיים — כלים לשינוי מהיר, אפקטיבי ולאורך זמן</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span className="bg-white/15 rounded-full px-4 py-1 text-sm">145 שעות אקדמיות</span>
            <span className="bg-white/15 rounded-full px-4 py-1 text-sm">3 תעודות</span>
            <span className="bg-white/15 rounded-full px-4 py-1 text-sm">קרן השתלמות / שבתון</span>
          </div>
          <div className="mt-8">
            <a href="#lead-form" className="inline-block btn btn-gold text-lg">
              השאירו פרטים
            </a>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">למי מיועד הקורס?</h2>
          <div className="space-y-3 mb-6">
            {audience.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <span className="text-yellow-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{a}</span>
              </div>
            ))}
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              אם את/ה רוצה לחולל שינוי מהיר ואפקטיבי לאורך זמן — לשנות התנהגויות, להעלים רגשות שליליים,
              לפרוץ גבולות, לחזק את הביטחון העצמי ולהגשים את עצמך מכל הבחינות — הקורס הזה בשבילך.
            </p>
            <p>
              אנחנו מאמינים שבני אדם יכולים להגיע לשליטה בחייהם, ולהוות השראה לאחרים. בקורס תלמדו איך
              לאמן את מוחכם להצלחה, לחשיבה חיובית ולביטחון עצמי.
            </p>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-14 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">האם זה מדבר אליך?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100">
                <span className="text-purple-400 font-bold mt-0.5">?</span>
                <span className="text-gray-700 text-sm">{q}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-purple-900 font-medium text-center">
            אצלנו תלמד/י את הקורס באופן חווייתי, מסקרן ומהפנט — ותקבל/י כלים אמיתיים לשינוי.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-3">הנושאים הנלמדים בקורס</h2>
          <p className="text-gray-500 text-sm mb-8">הצגת הנושאים אינה לפי סדר כרונולוגי</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <span className="w-6 h-6 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-8">תמונות מתוך הקורס</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coursePhotos.map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-sm">
                <Image src={src} alt="מתוך קורס NLP Practitioner" width={480} height={320} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-purple-900 text-white rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">מניסיוני האישי</h2>
          <div className="space-y-4 leading-relaxed text-white/90">
            <p>
              לפני שלמדתי NLP הייתי מנחת קבוצות ומאמנת אישית — אך לא היו לי מספיק כלים ליצור שינוי מהיר
              אצל אנשים, וגם אצלי. מאז שסיימתי את הקורס, קפיצת המדרגה שלי הייתה ענקית!
            </p>
            <p>
              הביטחון העצמי שלי עלה, האמונה שלי בעצמי התחזקה, נהייתי רגועה ותקשורתית יותר — ופתאום,
              לנגד עיניי, הלקוחות שלי עברו שינוי מהיר באופן שלא ניתן לתאר במילים.
            </p>
            <p className="font-medium text-yellow-200">
              זהו קורס משנה חיים. אצלנו תלמדו NLP אקסטרא — הרבה יותר מ-NLP: בנוסף לקורס המקורי תקבלו
              סדנת ניקוי רגשות שליליים מעומק תת המודע, ועוד הפתעות רבות.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">הבונוסים שתקבלו בהרשמה</h2>
          <div className="space-y-3">
            {bonuses.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100">
                <span className="text-yellow-500 text-lg mt-0.5">🎁</span>
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">פרטי הקורס</h2>
          <div className="bg-white rounded-2xl border border-purple-100 divide-y divide-purple-50">
            <div className="flex flex-col sm:flex-row px-6 py-4"><div className="font-bold text-purple-900 sm:w-1/3">שעות לימוד</div><div className="text-gray-700">145 שעות אקדמיות</div></div>
            <div className="flex flex-col sm:flex-row px-6 py-4"><div className="font-bold text-purple-900 sm:w-1/3">הסמכה</div><div className="text-gray-700">מתאים לעובדי הוראה — קרן השתלמות לשנת שבתון</div></div>
            <div className="flex flex-col sm:flex-row px-6 py-4"><div className="font-bold text-purple-900 sm:w-1/3">מיקום</div><div className="text-gray-700">בצלאל 8, רמת גן, ליד תחנת רכבת סבידור</div></div>
            <div className="flex flex-col sm:flex-row px-6 py-4"><div className="font-bold text-purple-900 sm:w-1/3">חניה</div><div className="text-gray-700">חניה בכחול לבן או באחד משפע החניונים בסביבה</div></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-8">המלצות בוגרי הקורס</h2>
          <div className="columns-1 md:columns-2 gap-6">
            {courseTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 mb-6 break-inside-avoid">
                <div className="text-yellow-500 text-2xl mb-3">❝</div>
                <ExpandableText text={t.text} limit={220} className="text-gray-700 leading-[1.7] mb-4" />
                <p className="font-bold text-purple-900 text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">מעוניינים בקורס?</h2>
          <p className="text-center text-gray-600 mb-8">השאירו פרטים ונחזור אליכם עם כל המידע ותאריכי הקורסים הקרובים.</p>
          <LeadForm
            title="השארת פרטים — קורס NLP Practitioner"
            subtitle="ללא התחייבות — נכיר ונראה אם הקורס מתאים לך."
            source="קורס NLP Practitioner"
          />
          <div className="mt-6 text-center">
            <Link href="/courses/nlp" className="text-purple-700 underline text-sm hover:text-purple-900 transition-colors">
              ← לקורס ה-NLP הבסיסי
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
