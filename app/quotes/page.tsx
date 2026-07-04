import Link from "next/link";
import Image from "next/image";
import { quotes } from "@/data/quotes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ציטוטים, משפטי העצמה ומוטיבציה | מכללת אמביציות",
  description: "ציטוטי העצמה ומוטיבציה מאת עדנה מימון ומגדולי העולם — אנתוני רובינס, מארק טוויין, איינשטיין ועוד.",
};

const featuredImages = [
  "/images/27729_155.jpg",
  "/images/27729_162.jpg",
  "/images/27729_260.jpg",
];

export default function QuotesPage() {
  return (
    <div>
      <section className="py-20 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">ציטוטים / משפטי העצמה</h1>
          <p className="text-white/80 text-xl">השראה, מוטיבציה וחוכמת חיים</p>
        </div>
      </section>

      {/* Featured quote images */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredImages.map((src) => (
            <div key={src} className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <Image src={src} alt="ציטוט העצמה — עדנה מימון" width={480} height={340} className="w-full h-auto" />
            </div>
          ))}
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

          {/* Continuation link */}
          <div className="mt-10 text-center bg-purple-50 rounded-3xl p-8 border border-purple-100">
            <p className="text-purple-900 font-medium text-lg mb-2">רוצים עוד השראה?</p>
            <p className="text-gray-600 mb-6">ציטוטים באנגלית, בשפת המקור, ללא תרגום</p>
            <Link
              href="/quotes/untranslated"
              className="inline-block bg-purple-800 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-full transition-colors"
            >
              ציטוטים ללא תרגום ←
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
