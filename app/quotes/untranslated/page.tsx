import Link from "next/link";
import { untranslatedQuotes } from "@/data/quotes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ציטוטים ללא תרגום | מכללת אמביציות",
  description: "Inspirational quotes in their original language — ציטוטי השראה בשפת המקור.",
};

export default function UntranslatedQuotesPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4 justify-center">
            <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
            <span>/</span>
            <Link href="/quotes" className="hover:text-white transition-colors">ציטוטים</Link>
            <span>/</span>
            <span className="text-white/80">ללא תרגום</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Inspirational Quotes</h1>
          <p className="text-white/80 text-xl">ציטוטים בשפת המקור, ללא תרגום</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto" dir="ltr">
          <div className="columns-1 md:columns-2 gap-6">
            {untranslatedQuotes.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-purple-100 shadow-sm p-8 mb-6 break-inside-avoid text-left"
              >
                <div className="text-yellow-400 text-5xl leading-none mb-4">&ldquo;</div>
                <p className="text-gray-800 text-lg leading-relaxed font-medium mb-4">{q.text}</p>
                {q.author && <p className="text-purple-600 text-sm font-medium">— {q.author}</p>}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center" dir="rtl">
            <Link
              href="/quotes"
              className="inline-block bg-purple-50 text-purple-800 font-medium px-6 py-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              → חזרה לציטוטים בעברית
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
