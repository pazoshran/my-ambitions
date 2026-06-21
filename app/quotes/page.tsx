import { quotes } from "@/data/quotes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ציטוטים | מכללת אמביציות",
  description: "ציטוטי העצמה ומוטיבציה מאת עדנה מימון ומגדולי העולם.",
};

export default function QuotesPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">ציטוטים</h1>
          <p className="text-white/80 text-xl">משפטי העצמה ומוטיבציה</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="columns-1 md:columns-2 gap-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-purple-100 shadow-sm p-8 mb-6 break-inside-avoid"
              >
                <div className="text-yellow-400 text-5xl leading-none mb-4">❝</div>
                <p className="text-gray-800 text-lg leading-relaxed font-medium mb-4">{q.text}</p>
                {q.author && (
                  <p className="text-purple-600 text-sm font-medium">— {q.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
