import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import { testimonials } from "@/data/testimonials";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import ExpandableText from "@/components/ExpandableText";

const whyUsItems = [
  { icon: "/images/27729_301.png", title: "תוצאות מיידיות", desc: "שיטות NLP מביאות שינוי בפועל — כבר ממפגש ראשון" },
  { icon: "/images/27729_300.png", title: "עבודה עם תת המודע", desc: "שינוי עמוק ומהיר ישירות במקור — לא רק בסימפטום" },
  { icon: "/images/27729_303.png", title: "כלים פרקטיים", desc: "טכניקות פשוטות ומעשיות שניתן ליישם מיד בחיים האמיתיים" },
  { icon: "/images/27729_311.png", title: "מסע אישי", desc: "כל אדם מקבל התייחסות אישית ותוכנית המותאמת לו" },
  { icon: "/images/27729_314.png", title: "ניסיון ומקצועיות", desc: "18+ שנות ניסיון, תעודות מהמומחים הגדולים בעולם" },
];

const stats = [
  { num: "18+", label: "שנות ניסיון" },
  { num: "אלפיים", label: "בוגרים מרוצים" },
  { num: "NLP", label: "שיטה מוכחת" },
];

export default function HomePage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 px-4"
        style={{ background: "linear-gradient(135deg, #2E1650 0%, #5B2D8E 55%, #7B4DB8 100%)" }}
      >
        <div className="absolute inset-0">
          <Image src="/images/27729_305.jpg" alt="" fill className="object-cover opacity-[0.18]" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1650]/60 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full opacity-20 pointer-events-none blur-2xl"
          style={{ background: "radial-gradient(circle, #D4A853, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none blur-2xl"
          style={{ background: "radial-gradient(circle, #7B4DB8, transparent 70%)", transform: "translate(30%, 30%)" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="reveal is-visible inline-flex items-center gap-2 bg-white/10 text-gold-light border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            18+ שנות ניסיון · אלפיים בוגרים מרוצים
          </div>
          <h1 className="reveal is-visible text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] mb-6" style={{ animationDelay: "80ms" }}>
            מכללת אמביציות
            <span className="block bg-gradient-to-l from-gold-light to-gold bg-clip-text text-transparent mt-3">
              עדנה מימון · NLP
            </span>
          </h1>
          <p className="reveal is-visible text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-9" style={{ animationDelay: "160ms" }}>
            קורסים, סדנאות ואימון אישי לשינוי חיים אמיתי — שליטה בכעסים, ביטחון עצמי,
            זוגיות ותקשורת. שינוי מהשורש, דרך תת המודע.
          </p>
          <div className="reveal is-visible flex flex-wrap gap-4 justify-center mb-14" style={{ animationDelay: "240ms" }}>
            <Link href="/workshops" className="btn btn-gold text-lg">לסדנאות שלנו</Link>
            <Link href="/contact" className="btn text-lg bg-white/10 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20">
              צרו קשר
            </Link>
          </div>

          {/* Stats */}
          <div className="reveal is-visible grid grid-cols-3 gap-4 max-w-lg mx-auto" style={{ animationDelay: "320ms" }}>
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl py-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-gold-light">{s.num}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal message */}
      <section className="bg-surface py-16 px-4">
        <Reveal className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[var(--shadow-soft)] border border-purple-100/60 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold/30 to-primary/20 blur-md" />
              <Image
                src="/images/27729_111.jpg"
                alt="עדנה מימון"
                width={180}
                height={180}
                className="relative rounded-full w-40 h-40 object-cover shadow-lg border-4 border-white"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                אתר זה מוקדש לאנשים שחווים קשיים במערכות יחסים: בזוגיות, במשפחה, עם הילדים,
                בעבודה, ובעיקר עם עצמם. הכלים שתקבלו מאיתנו הם עוצמתיים, כי הם עובדים עם
                תת המודע, כדי ליצור שינויים אמיתיים מהשורש.
              </p>
              <p className="text-xl text-primary font-bold">באהבה אמיתית,</p>
              <p className="text-muted">עדנה מימון 💜</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">למה אנחנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2">למה מכללת אמביציות?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-hover h-full bg-white rounded-2xl p-7 border border-purple-100 shadow-[var(--shadow-soft)]">
                  <div className="w-16 h-16 mb-4">
                    <Image src={item.icon} alt="" width={64} height={64} className="w-full h-full" />
                  </div>
                  <h3 className="text-primary-dark font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">הסדנאות שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-3">בחר/י את הסדנה המתאימה לך</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">כולן בשיטת NLP ותרפיית קו הזמן — עם תוצאות מוכחות</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, i) => (
              <Reveal key={w.id} delay={(i % 3) * 80}>
                <Link href={w.href} className="group card-hover block h-full bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-[var(--shadow-soft)]">
                  <div className="img-zoom relative h-44">
                    <Image src={w.image} alt={w.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/10 to-transparent" />
                    <span className="absolute top-3 right-3 text-2xl drop-shadow-lg">{w.icon}</span>
                    <h3 className="absolute bottom-3 right-4 left-4 text-white font-bold text-xl drop-shadow">{w.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gold-dark text-sm font-semibold mb-2" style={{ color: "#B8862F" }}>{w.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{w.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary-light font-medium">{w.sessions} מפגשים · {w.sessionLength}</span>
                      <span className="text-primary font-bold text-sm group-hover:-translate-x-1 transition-transform">פרטים ←</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/workshops" className="btn btn-primary">לכל הסדנאות</Link>
          </div>
        </div>
      </section>

      {/* Group photo strip */}
      <section className="relative overflow-hidden h-72">
        <Image src="/images/27729_195.jpg" alt="בוגרי קורסי NLP של מכללת אמביציות" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/70 flex items-center justify-center px-4">
          <Reveal className="text-center text-white">
            <p className="text-3xl md:text-4xl font-extrabold mb-2">אלפיים בוגרים מרוצים</p>
            <p className="text-white/85 text-lg">שינו את חייהם עם שיטת NLP של עדנה מימון</p>
          </Reveal>
        </div>
      </section>

      {/* Services strip */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">שירותים נוספים</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2">קורסים ואימון אישי</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="card-hover h-full rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
                <div className="img-zoom relative h-52">
                  <Image src="/images/27729_288.jpg" alt="קורס NLP" fill className="object-cover" />
                  <div className="absolute inset-0 bg-primary-dark/40" />
                </div>
                <div className="p-8 text-white" style={{ background: "linear-gradient(135deg, #5B2D8E, #7B4DB8)" }}>
                  <h3 className="text-2xl font-bold mb-3">קורס NLP</h3>
                  <p className="text-white/85 leading-relaxed mb-5">
                    17 מפגשים שיפתחו לך דלתות חדשות. למד/י טכניקות לשינוי מחשבות, רגשות והתנהגויות — ישירות דרך תת המודע.
                  </p>
                  <Link href="/courses/nlp" className="btn btn-gold !py-2.5">לפרטי הקורס</Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-hover h-full rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
                <div className="img-zoom relative h-52">
                  <Image src="/images/27729_306.jpg" alt="אימון אישי" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gray-900/40" />
                </div>
                <div className="p-8 text-white" style={{ background: "linear-gradient(135deg, #1A1A2E, #2D2D4E)" }}>
                  <h3 className="text-2xl font-bold mb-3">אימון אישי</h3>
                  <p className="text-white/85 leading-relaxed mb-5">
                    פגישות 1:1 אישיות עם עדנה מימון. תוכנית מותאמת אישית — כעסים, התפרצויות זעם, טראומות, פוסט טראומה, פחדים, חרדות, קריירה, זוגיות ועוד.
                  </p>
                  <Link href="/coaching" className="btn btn-gold !py-2.5">לפרטי האימון</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gold font-bold text-sm tracking-wide">המלצות</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-3">מה אומרים המשתתפים</h2>
            <p className="text-gray-600">אלפיים אנשים שינו את חייהם — הנה כמה מהם</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card-hover h-full bg-white rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-purple-100">
                  <div className="text-gold text-4xl leading-none mb-4">❝</div>
                  <ExpandableText text={t.text} limit={200} className="text-gray-700 leading-[1.7] mb-5" />
                  <div className="font-bold text-primary-dark border-t border-purple-50 pt-4 mt-4">
                    {t.name}
                    {t.city && <span className="text-gray-400 font-normal text-sm"> · {t.city}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn btn-primary">לכל ההמלצות</Link>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-20 px-4">
        <Reveal className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-2">רוצים לשמוע עוד?</h2>
            <p className="text-gray-600">השאירו פרטים ועדנה תחזור אליכם עם כל המידע.</p>
          </div>
          <LeadForm
            title="השאירו פרטים ונחזור אליכם"
            subtitle="ללא התחייבות — פשוט נכיר ונראה איך אפשר לעזור."
            source="דף הבית"
          />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-white text-center" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">מוכן/ה להתחיל?</h2>
          <p className="text-white/80 text-lg mb-8">צרו קשר עכשיו לפרטים נוספים ולהרשמה לסדנה, קורס או אימון אישי</p>
          <Link href="/contact" className="btn btn-gold text-lg">טופס יצירת קשר</Link>
        </Reveal>
      </section>
    </div>
  );
}
