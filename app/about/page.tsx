import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מי אנחנו | מכללת אמביציות - עדנה מימון",
  description:
    "מכללת אמביציות בהובלת עדנה מימון — מעל 18 שנים של הובלת אנשים לפריצות דרך, שחרור דפוסים מעכבים ובניית ביטחון עצמי דרך עולם ה-NLP.",
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

const metrics = [
  { num: "+18", label: "שנים של ניסיון מקצועי בשטח" },
  { num: "מאות", label: "בוגרים ובוגרות ששינו את חייהם" },
  { num: "100%", label: "כלים פרקטיים ליישום מיידי מהמפגש הראשון" },
];

const values = [
  {
    icon: "🎓",
    title: "מקצועיות ללא פשרות",
    text: "שילוב הדרגות הגבוהות ביותר בעולם ה-NLP יחד עם ניסיון קליני עשיר, כדי להבטיח את שיטות הטיפול והאימון המתקדמות ביותר.",
  },
  {
    icon: "💜",
    title: "ליווי בגובה העיניים",
    text: "אצלנו אף אחד לא מספר בקבוצה. כל תלמיד ומטופל מקבל יחס חם, קשוב ואישי, מתוך הבנה מלאה של מפת החיים הייחודית שלו.",
  },
  {
    icon: "🌱",
    title: "שינוי מהשורש",
    text: "אנחנו לא מאמינים בפתרונות זמניים או ב\"פלסטרים\". העבודה המשותפת שלנו נוגעת בגרעין הרגשי ובתת-המודע, ומייצרת הרגלים חדשים לכל החיים.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden px-4 pt-24 pb-28 md:pt-32 md:pb-36 text-white"
        style={{ background: "linear-gradient(135deg, #2E1650 0%, #5B2D8E 55%, #7B4DB8 100%)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_195.jpg" alt="" fill className="object-cover opacity-[0.16]" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1650]/70 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-[26rem] h-[26rem] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A853, transparent 70%)", transform: "translate(-30%,-30%)" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="reveal is-visible inline-flex items-center gap-2 bg-white/10 text-gold-light border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            מכללת אמביציות · עדנה מימון
          </div>
          <h1 className="reveal is-visible text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6" style={{ animationDelay: "80ms" }}>
            הבית לשינוי וצמיחה אישית
          </h1>
          <p className="reveal is-visible text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-[1.7]" style={{ animationDelay: "160ms" }}>
            מעל 18 שנים של הובלת אנשים לפריצות דרך, שחרור דפוסי התנהגות מעכבים ובניית ביטחון עצמי
            ומערכות יחסים בריאות — דרך עולם ה-NLP.
          </p>
        </div>
      </section>

      {/* 2. ABOUT — 50/50 */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <span className="text-gold font-bold text-sm tracking-wide">השליחות שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-6 leading-tight">
              לפרוץ את הגבולות של תת המודע
            </h2>
            <div className="space-y-5 text-gray-700 leading-[1.75] text-lg">
              <p>
                מכללת אמביציות, בהובלת עדנה מימון, הוקמה מתוך שליחות עמוקה: להעניק לאנשים כלים פרקטיים,
                מבוססי מחקר ועוצמתיים ליצירת שינוי אמיתי מהשורש. אנו מאמינים כי לכל אדם יש את המשאבים
                הפנימיים להצליח, להשתחרר מכעסים, להעלות את הדימוי העצמי ולנהל מערכות יחסים הרמוניות —
                לפעמים צריך רק את המפתח הנכון לתת-המודע.
              </p>
              <p>
                לאורך השנים, המכללה הפכה לאבן שואבת עבור מאות בוגרים ששינו את חייהם מקצה לקצה. דרך קורסי
                NLP מקצועיים, סדנאות ממוקדות ואימון אישי (1:1), אנו מלווים כל משתתף ומשתתפת במסע אישי,
                רגיש ובגובה העיניים, תוך מחויבות מוחלטת לתוצאות בשטח.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/25 to-primary/20 blur-lg" />
              <div className="img-zoom relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/5]">
                <Image src="/images/27729_288.jpg" alt="מפגש במכללת אמביציות" fill className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. METRICS */}
      <section className="px-4 pb-4">
        <Reveal className="max-w-5xl mx-auto">
          <div className="rounded-3xl px-6 py-14 shadow-[var(--shadow-card)]" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-l from-gold-light to-gold bg-clip-text text-transparent">
                    {m.num}
                  </div>
                  <p className="text-white/85 mt-3 leading-[1.6] max-w-[15rem] mx-auto">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. VISION & VALUES */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">החזון והערכים</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2">מה שמנחה אותנו כל יום</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card-hover h-full bg-white rounded-3xl p-8 md:p-9 border border-purple-100 shadow-[var(--shadow-soft)]">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-dark mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-[1.75]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOUNDER */}
      <section className="py-20 md:py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <Reveal className="mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-gold/30 to-primary/20 blur-xl" />
              <Image
                src="/images/27729_111.jpg"
                alt="עדנה מימון — מייסדת מכללת אמביציות"
                width={300}
                height={300}
                className="relative rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-2xl border-[6px] border-white"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-gold font-bold text-sm tracking-wide">נעים להכיר</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-2">עדנה מימון</h2>
            <p className="text-primary font-semibold mb-6">
              מייסדת המכללה, מאסטרית ומכשירת אנשי מקצוע בשיטת NLP
            </p>
            <blockquote className="relative text-gray-700 leading-[1.8] text-lg">
              <span className="text-gold text-5xl leading-none absolute -top-4 -right-2 opacity-40">❝</span>
              <p className="pr-6">
                לאורך השנים ראיתי כיצד כעס, חוסר ביטחון או תקיעות רגשית יכולים לנהל לאנשים מוכשרים
                ומדהימים את החיים. השליחות שלי היא להראות לכם שיש דרך אחרת. ב-18 השנים האחרונות פיתחתי
                ודייקתי שיטות עבודה שמאפשרות לגשת ישירות אל המקומות החסומים, לשחרר אותם, ולפתוח דף חדש
                ונקי. אני מזמינה אתכם להצטרף אלינו למכללה, לקחת את המושכות לידיים וליצור את החיים שמגיעים
                לכם.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 6. TRUST & AUTHORITY — certifications */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">הסמכות ואמינות</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-3">ההסמכות והתעודות שלנו</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-[1.7]">
              עדנה למדה והוסמכה אצל גדולי המומחים בעולם ה-NLP וההתפתחות האישית
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred, i) => (
              <Reveal key={cred} delay={(i % 3) * 70}>
                <div className="card-hover h-full flex items-start gap-3 bg-white rounded-2xl p-5 border border-purple-100 shadow-[var(--shadow-soft)]">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-purple-50 text-primary flex items-center justify-center text-lg">🎓</span>
                  <span className="text-gray-700 text-sm leading-[1.6]">{cred}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 md:py-24 px-4 text-white text-center" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">מוכנים לעשות את הצעד הראשון שלכם?</h2>
          <p className="text-white/80 text-lg mb-9 leading-[1.7]">
            בואו נגלה יחד איזה שינוי אפשרי עבורכם — בסדנה, בקורס או באימון אישי.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/workshops" className="btn btn-gold text-lg">לצפייה בסדנאות הקרובות</Link>
            <Link href="/contact" className="btn text-lg bg-white/10 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20">
              לתיאום שיחת ייעוץ אישית
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
