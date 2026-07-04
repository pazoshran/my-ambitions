import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אימון אישי | מכללת אמביציות - עדנה מימון",
  description: "מהו אימון אישי? תהליך אישי לגיבוש מטרות ולשינוי אמיתי בחיים, עם עדנה מימון. אימון אישי בתל אביב וראשון לציון.",
};

const conclusionQuestions = [
  "האם הגשמתי את עצמי?",
  "האם עשיתי הכל כדי להגשים את עצמי?",
  "האם חייתי את החלום שלי?",
  "האם חייתי את החיים, או רק לידם?",
  "האם אני חי/ה את החיים שלי, או של מישהו אחר?",
  "האם השארתי לילדי ולנכדי ולניני מורשת שבה אני גאה מאוד?",
  "האם השארתי לעולם ולדורות הבאים מזכרת משמעותית?",
  "האם עסקתי הרבה בהתפתחות אישית?",
  "האם טיפלתי ברגשותי, או רוב חיי הייתי בן אדם חמוץ ומאשים?",
];

export default function CoachingPage() {
  return (
    <div>
      <section className="relative py-16 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_306.jpg" alt="" fill className="object-cover opacity-25" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">אימון אישי</h1>
          <p className="text-white/80 text-xl">מהו אימון אישי?</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-2">מהו אימון אישי?</h2>
            <p>
              אנו זקוקים למאמן בתחומים רבים בחיינו, בדיוק כמו שספורטאי זקוק למאמן כדי להתאמן, להגיע
              להישגים ולהשיג מטרות.
            </p>
            <p>
              לכל אחד מאתנו שאיפות וחלומות להתקדם בחיים, לעבור ממצב מסוים אל מצב אידיאלי וטוב יותר.
              באימון אישי, המתאמן נעזר במאמן/מאמנת אישית לגיבוש והגדרת מטרותיו ועובר תהליך אימון על מנת
              להשיגם.
            </p>
            <p>
              בדרך כלל, תהליך אימון אישי כולל 10-12 מפגשים של שעה. יחד עם זאת, קיימים תהליכים של 20
              מפגשים של שעה, או 6-8 מפגשים של שעתיים (בשיטת NLP). זה אינדיווידואלי.
            </p>
          </div>

          {/* Case study */}
          <div className="mt-12 bg-purple-50 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">דוגמה ללקוחה שעברה תהליך אימון אישי</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                אישה כבת 30+, נשואה +2, עובדת היי טק במשך שנים רבות. אותה אישה הייתה כבויה, חסרת חיים
                וחסרת אנרגיות. למרות שקיבלה משכורת מכובדת, תנאים מעולים והערכה רבה ממנהליה על ביצוע
                עבודתה הטובה, עיניה היו כבויות. ראשה היה שמוט. דיברה ללא חשק.
              </p>
              <p>
                היא הרגישה חלשה, פיזית ורגשית. אף פעם לא ייחסה חשיבות לרצונותיה האישיים, לא לקחה ברצינות
                את התחושות הפנימיות שלה עד לאותו רגע שהגיעה להחלטה על שינוי. כשהגיעה למסקנה שאינה יכולה
                יותר, החליטה לבדוק אפשרות לשינוי, ופנתה לאימון אישי. בשיחת אימון ראשונית ומעמיקה עם מאמנת
                אישית, התברר שהבחורה פנתה לתחום ההיי-טק בהשפעת הוריה, שלחצו מאוד בכיוון.
              </p>
              <p>
                הם אמרו לה שאנשים חכמים פונים להיי טק, שאפשר להתפתח מאוד בכיוון, שהיא תוכל להרשות לעצמה
                לקנות הרבה דברים בזכות הכסף הרב שהיא תרוויח, ושיהיו לה תנאים טובים.
              </p>
              <p>
                בכל פעם שהיא ניסתה להסיט את השיחה איתם לתחום אחר, היא נתקלה בהתנגדות חריפה. &quot;השתגעת?&quot;
                הם אמרו לה. &quot;זה לא לרמה שלך. את בחורה חכמה. הכי מתאים לך לעבוד בהיי טק. תראי איך אנשים
                אחרים חיים טוב בזכות זה. אל תעשי טעויות&quot;. היא לא רצתה לאכזב את הוריה. היה לה חשוב מאוד מה
                הם חושבים עליה. היא רצתה מאוד שהם יתגאו בה.
              </p>
              <p>
                היא עבדה בהיי טק במשך שנים רבות, בעבודה קיבלה הערכה רבה על חוכמתה ועל הישגיה. הוריה היו
                מרוצים וגאים בה. הם שמחו שהיא הקשיבה להצעתם בנוגע לתחום עיסוקה.
              </p>
              <p>
                אולם, בפנים עמוק היתה לה תחושה קשה. תחושה של חוסר עניין, של שעמום, של חוסר תכלית. כל יום
                חזרה הביתה מותשת וחסרת חיים. היו לה כאבים פה וכאבים שם. כאבים אלה ביטאו את חוסר שביעות
                רצונה מן החיים שלה.
              </p>
              <p>
                לאחר תהליך האימון האישי, שכלל בירור מטרות, התאמת רצונה האישי האמיתי של המתאמנת עם הנכונות
                שלה לעשייה, עם דרכי פעולה ויעדים ברורים, עזבה אותה בחורה את עבודתה בהיי טק, פנתה להנחיית
                קבוצות להעצמה עסקית וכיום היא מתפרנסת בכבוד ומאושרת!
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">מסקנה</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                אם אתם מתנהגים בצורה מסוימת רק כדי לרצות את הוריכם, או כדי שאנשים יעריכו אתכם, ולא בגלל
                שזה בא מבפנים, אתם עושים טעות חמורה. לא תקבלו מדליה על ה&quot;הקרבה&quot; שלכם. החיים יעברו בלי
                אושר, ולפני שתגידו ג&apos;ק רובינסון, אתם תגיעו לגיל שתשאלו את עצמכם:
              </p>
              <ul className="space-y-2 bg-purple-50 rounded-2xl p-6">
                {conclusionQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p>
                ואתם? האם יש לכם שאיפות הנמצאות עמוק אך עדיין לא עשיתם כלום? יש לכם חששות? אתם פוחדים
                מכישלון? אתם לא יודעים איך ומהיכן להתחיל?
              </p>
              <p>
                האם בלקסיקון ה&quot;תירוצים&quot; שלכם מופיעים המשפטים: &quot;לא עכשיו&quot;, &quot;כשיהיה לי זמן&quot;, &quot;כשאני
                אהיה מוכן&quot;, &quot;כשיהיה לי כסף&quot;, &quot;כשהילדים יגדלו&quot;, &quot;כשהילדים יעזבו את הבית&quot;, &quot;זה יקרה
                יום אחד&quot;, &quot;אין לי כוח רצון&quot;, &quot;אני לא רוצה מספיק&quot; ועוד טענות &quot;מוצדקות&quot; כאלה ואחרות?
              </p>
              <p className="text-purple-900 font-medium text-lg">
                אתם יכולים להיות רגועים! אינכם היחידים שמרגישים כך...
              </p>
              <p className="text-purple-900 font-bold text-lg">
                צרו קשר לשיחה ללא התחייבות, ותשנו את עתידכם.
              </p>
            </div>
          </div>

          {/* Locations + related */}
          <div className="mt-10 bg-white rounded-2xl border border-purple-100 p-6">
            <h3 className="font-bold text-purple-900 mb-3">מאמנים אישיים מטעם אמביציות:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• מאמנת אישית בתל אביב</li>
              <li>• מאמנת אישית בראשון לציון</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              אנשים שקראו מאמר זה התעניינו גם במאמר:{" "}
              <Link href="/articles/למי-כדאי-לקחת-אימון-אישי-או-סדנה" className="text-purple-700 underline hover:text-purple-900 font-medium">
                למי כדאי לקחת אימון אישי או סדנה
              </Link>
            </p>
          </div>

          {/* Bio */}
          <div className="mt-10 border-t border-purple-100 pt-8">
            <div className="font-bold text-purple-900 text-lg mb-2">עדנה מימון</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              טריינר ב-NLP, מאסטר ב-NLP, מאסטר קאוצ&apos;, מאסטר בתרפיית קו הזמן, מאסטר בהיפנותרפיה, מאמנת
              אישית להעלמת רגשות שליליים, העלמת טראומות, חרדות ופחדים. שינוי בשיטת פסיכומטפוריקה לשינוי
              רגשי והתנהגותי. מנחה סדנאות לניהול ושליטה בכעסים ושיפור הזוגיות, מורה מוסמכת ל-NLP. מנהלת
              את &quot;מכללת אמביציות&quot;.
            </p>
          </div>

          {/* Lead form */}
          <div className="mt-12">
            <LeadForm
              title="רוצים להתחיל תהליך אימון אישי?"
              subtitle="השאירו פרטים לשיחת היכרות ראשונית — ללא התחייבות."
              source="אימון אישי"
            />
            <div className="mt-6 text-center">
              <Link href="/contact" className="text-purple-700 underline text-sm hover:text-purple-900 transition-colors">
                או עברו לעמוד יצירת קשר ←
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
