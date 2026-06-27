import { testimonials } from "@/data/testimonials";
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

export default function TestimonialsPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">המלצות</h1>
          <p className="text-white/80 text-xl">מה אומרים משתתפי הסדנאות, הקורסים והאימון האישי</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 break-inside-avoid"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-500 text-2xl">❝</div>
                  <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 font-medium">
                    {typeLabels[t.type]}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">{t.text}</p>
                <div className="border-t border-gray-100 pt-3 font-bold text-purple-900 text-sm">
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
            <a href="/contact" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              צרו קשר
            </a>
            <a href="/workshops" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
              לסדנאות
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
