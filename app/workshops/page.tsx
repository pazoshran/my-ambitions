import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סדנאות | מכללת אמביציות - עדנה מימון",
  description: "סדנאות NLP: שליטה בכעסים, ביטחון עצמי, זוגיות, תקשורת בינאישית ועוד. שינוי אמיתי בשיטות מוכחות.",
};

export default function WorkshopsPage() {
  return (
    <div>
      <section className="relative py-16 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src="/images/27729_195.jpg" alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">הסדנאות שלנו</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            כולן בשיטת NLP ותרפיית קו הזמן — שינוי מהיר, עמוק ומתמשך
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((w, i) => (
              <Reveal key={w.id} delay={(i % 2) * 100}>
                <Link href={w.href} className="group card-hover flex flex-col h-full bg-white rounded-3xl border border-purple-100 shadow-[var(--shadow-soft)] overflow-hidden">
                  <div className="img-zoom relative h-52">
                    <Image src={w.image} alt={w.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-primary-dark/10 to-transparent" />
                    <span className="absolute top-4 right-4 text-3xl drop-shadow-lg">{w.icon}</span>
                    <div className="absolute bottom-4 right-5 left-5">
                      <h2 className="text-white text-2xl font-bold drop-shadow">{w.title}</h2>
                      <p className="text-gold-light text-sm font-medium drop-shadow">{w.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-gray-600 leading-relaxed mb-5 flex-1">{w.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted mb-5">
                      <span className="flex items-center gap-1">📅 {w.sessions} מפגשים</span>
                      <span className="flex items-center gap-1">⏰ {w.sessionLength} כל מפגש</span>
                    </div>
                    <span className="btn btn-primary w-full">פרטים נוספים</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What all workshops share */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-gold font-bold text-sm tracking-wide">היתרונות שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2">מה משותף לכל הסדנאות?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "🎯", title: "תוצאות מדידות", desc: "שינוי אמיתי שרואים בשטח כבר אחרי המפגש הראשון" },
              { icon: "🧠", title: "שיטת NLP", desc: "עבודה עם תת המודע לשינוי עמוק ומהיר" },
              { icon: "👥", title: "קבוצה קטנה", desc: "קבוצות קטנות לאינטראקציה אישית ועמוקה" },
              { icon: "📍", title: "מיקום נוח", desc: "בצלאל 8, רמת גן — ליד תחנת רכבת סבידור. חניה בכחול לבן או בשפע החניונים שבסביבה" },
              { icon: "❤️", title: "אוירה תומכת", desc: "סביבה בטוחה, חמה ואכפתית לשינוי" },
              { icon: "🔄", title: "שינוי הדרגתי", desc: "צעד אחר צעד, בקצב שלך, לתוצאות מתמשכות" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="card-hover h-full bg-white rounded-2xl p-7 border border-purple-100 shadow-[var(--shadow-soft)]">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">מעוניין/ת להירשם?</h2>
          <p className="text-gray-600 mb-6">צרו קשר לבירור צרכים, בדיקת התאמה ותיאום ציפיות</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold">
              צרו קשר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
