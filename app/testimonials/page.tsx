import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import ExpandableText from "@/components/ExpandableText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המלצות | מכללת אמביציות - עדנה מימון",
  description: "מה אומרים המשתתפים על הסדנאות, קורסים ואימון האישי של עדנה מימון.",
};

const typeLabels: Record<string, string> = {
  workshop: "סדנה",
  course: "קורס",
  coaching: "אימון אישי",
  general: "כללי",
};

// WhatsApp message screenshots from participants
const waImages = [
  "/images/27729_335.jpg",
  "/images/27729_268.jpg",
  "/images/27729_208.jpg",
];

// Cohort photos from workshops & courses
const cohortPhotos = [
  "/images/27729_130.jpg",
  "/images/27729_273.jpg",
  "/images/27729_225.jpg",
  "/images/27729_275.jpg",
  "/images/27729_286.jpg",
  "/images/27729_295.jpg",
];

export default function TestimonialsPage() {
  return (
    <div>
      <section className="py-20 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">המלצות</h1>
          <p className="text-white/80 text-xl">מה אומרים משתתפי הסדנאות, הקורסים והאימון האישי</p>
        </div>
      </section>

      {/* WhatsApp screenshots */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-2">הודעות שקיבלנו בוואטסאפ 💬</h2>
          <p className="text-center text-gray-600 mb-8">הודעות אמיתיות מבוגרי הסדנאות</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {waImages.map((src) => (
              <div key={src} className="bg-white rounded-2xl p-3 border border-purple-100 shadow-sm">
                <Image src={src} alt="המלצה בוואטסאפ" width={720} height={1280} className="w-full h-auto rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort photos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-2">מחזורי הסדנאות והקורסים שלנו 📸</h2>
          <p className="text-center text-gray-600 mb-8">רגעים מתוך המפגשים — קבוצות מלאות אנרגיה ושינוי</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cohortPhotos.map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] bg-purple-50">
                <Image src={src} alt="מחזור סדנה במכללת אמביציות" width={800} height={480} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">מכתבי תודה והמלצות</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-[var(--shadow-soft)] p-8 mb-8 break-inside-avoid"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-500 text-3xl">❝</div>
                  <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-3 py-1 font-medium">
                    {typeLabels[t.type]}
                  </span>
                </div>
                <ExpandableText text={t.text} limit={230} className="text-gray-700 leading-[1.7] mb-4" />
                <div className="border-t border-gray-100 pt-4 mt-4 font-bold text-purple-900">
                  {t.name}
                  {t.city && <span className="text-gray-500 font-normal"> | {t.city}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">רוצים גם אתם להצטרף?</h2>
          <p className="text-gray-600 mb-6">הצטרפו לאחת הסדנאות או לאימון אישי ותרגישו את השינוי בעצמכם</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              צרו קשר
            </a>
            <a href="/workshops" className="btn btn-gold">
              לסדנאות
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
