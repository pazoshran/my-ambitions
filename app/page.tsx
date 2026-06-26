import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import { testimonials } from "@/data/testimonials";
import LeadForm from "@/components/LeadForm";

const whyUsItems = [
  { icon: "/images/27729_301.png", title: "תוצאות מיידיות", desc: "שיטות NLP מביאות שינוי בפועל — כבר ממפגש ראשון" },
  { icon: "/images/27729_300.png", title: "עבודה עם תת המודע", desc: "שינוי עמוק ומהיר ישירות במקור — לא רק בסימפטום" },
  { icon: "/images/27729_303.png", title: "כלים פרקטיים", desc: "טכניקות פשוטות ומעשיות שניתן ליישם מיד בחיים האמיתיים" },
  { icon: "/images/27729_311.png", title: "מסע אישי", desc: "כל אדם מקבל התייחסות אישית ותוכנית המותאמת לו" },
  { icon: "/images/27729_314.png", title: "ניסיון ומקצועיות", desc: "18+ שנות ניסיון, תעודות מהמומחים הגדולים בעולם" },
];

export default function HomePage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3D1E60 0%, #5B2D8E 50%, #7B4DB8 100%)",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/27729_305.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A853, transparent)", transform: "translate(-30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A853, transparent)", transform: "translate(30%, 30%)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/10 text-yellow-300 border border-yellow-300/30 rounded-full px-4 py-1 text-sm font-medium mb-6">
            18+ שנות ניסיון | מאות בוגרים מרוצים
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            מכללת אמביציות
            <span className="block text-yellow-300 mt-2">עדנה מימון | NLP</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-8">
            קורסים, סדנאות ואימון אישי לשינוי חיים אמיתי — שיפור ביטחון עצמי,
            שליטה בכעסים, זוגיות ותקשורת
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/workshops"
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors text-lg"
            >
              לסדנאות שלנו
            </Link>
            <Link
              href="/contact"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold px-8 py-3 rounded-full transition-colors text-lg"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </section>

      {/* Personal message */}
      <section className="bg-purple-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <Image
                src="/images/27729_111.jpg"
                alt="עדנה מימון"
                width={180}
                height={180}
                className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-white"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-2xl text-purple-800 font-medium leading-relaxed mb-4">
                &quot;חברים וחברות יקרים, אני כאן בשבילכם. באהבה אמיתית 💜&quot;
              </p>
              <p className="text-gray-500 mb-4">— עדנה מימון</p>
              <p className="text-gray-700 leading-relaxed">
                אתר זה מוקדש לאנשים הרוצים לשפר את חייהם, להיות מאושרים ולקבל
                כלים להעצמה אישית — שיפור מערכות יחסים, ביטחון עצמי, שליטה
                ברגשות ועוד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
            למה מכללת אמביציות?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item) => (
              <div
                key={item.title}
                className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="mb-3">
                  <Image src={item.icon} alt={item.title} width={64} height={64} />
                </div>
                <h3 className="text-purple-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">הסדנאות שלנו</h2>
          <p className="text-center text-gray-600 mb-10">בחר/י את הסדנה המתאימה לך — כולן בשיטת NLP עם תוצאות מוכחות</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w) => (
              <Link
                key={w.id}
                href={w.href}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-purple-200 transition-all group"
              >
                <div className="text-4xl mb-3">{w.icon}</div>
                <h3 className="text-purple-900 font-bold text-xl mb-1 group-hover:text-purple-600 transition-colors">{w.title}</h3>
                <p className="text-yellow-600 text-sm font-medium mb-3">{w.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{w.description}</p>
                <div className="text-xs text-purple-400 font-medium">{w.sessions} מפגשים • {w.sessionLength} כל מפגש</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/workshops" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              לכל הסדנאות
            </Link>
          </div>
        </div>
      </section>

      {/* Group photo strip */}
      <section className="relative overflow-hidden h-64">
        <Image
          src="/images/27729_195.jpg"
          alt="בוגרי קורסי NLP של מכללת אמביציות"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-3xl font-bold mb-2">מאות בוגרים מרוצים</p>
            <p className="text-white/80 text-lg">שינו את חייהם עם שיטת NLP של עדנה מימון</p>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">שירותים נוספים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100">
              <div className="relative h-48">
                <Image src="/images/27729_288.jpg" alt="קורס NLP" fill className="object-cover" />
                <div className="absolute inset-0 bg-purple-900/50" />
              </div>
              <div className="p-8 text-white" style={{ background: "linear-gradient(135deg, #5B2D8E, #7B4DB8)" }}>
                <h3 className="text-2xl font-bold mb-3">קורס NLP</h3>
                <p className="text-white/85 leading-relaxed mb-4">
                  17 מפגשים שיפתחו לך דלתות חדשות. למד/י טכניקות לשינוי מחשבות, רגשות והתנהגויות — ישירות דרך תת המודע.
                </p>
                <Link href="/courses/nlp" className="inline-block bg-white text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">
                  לפרטי הקורס
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div className="relative h-48">
                <Image src="/images/27729_306.jpg" alt="אימון אישי" fill className="object-cover" />
                <div className="absolute inset-0 bg-gray-900/40" />
              </div>
              <div className="p-8 text-white" style={{ background: "linear-gradient(135deg, #1A1A2E, #2D2D4E)" }}>
                <h3 className="text-2xl font-bold mb-3">אימון אישי</h3>
                <p className="text-white/85 leading-relaxed mb-4">
                  פגישות 1:1 אישיות עם עדנה. תוכנית מותאמת אישית לצרכים שלך — פחדים, חרדות, קריירה, זוגיות ועוד.
                </p>
                <Link href="/coaching" className="inline-block bg-white text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">
                  לפרטי האימון
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">מה אומרים המשתתפים</h2>
          <p className="text-center text-gray-600 mb-10">מאות אנשים שינו את חייהם — הנה כמה מהם</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-yellow-500 text-3xl mb-3">❝</div>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">{t.text}</p>
                <div className="font-bold text-purple-900">
                  {t.name}
                  {t.city && <span className="text-gray-500 font-normal text-sm"> | {t.city}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              לכל ההמלצות
            </Link>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">רוצים לשמוע עוד?</h2>
          <p className="text-center text-gray-600 mb-8">
            השאירו פרטים ועדנה תחזור אליכם עם כל המידע על הסדנאות, הקורסים והאימון האישי.
          </p>
          <LeadForm
            title="השאירו פרטים ונחזור אליכם"
            subtitle="ללא התחייבות — פשוט נכיר ונראה איך אפשר לעזור."
            source="דף הבית"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-white text-center" style={{ background: "linear-gradient(135deg, #1A1A2E, #3D1E60)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">מוכן/ה להתחיל?</h2>
          <p className="text-white/80 text-lg mb-8">צרו קשר עכשיו לפרטים נוספים ולהרשמה לסדנה, קורס או אימון אישי</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/9720507378535" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition-colors">
              💬 שלחו WhatsApp
            </a>
            <Link href="/contact" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors">
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
