import Link from "next/link";
import { articles } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמרים | מכללת אמביציות - עדנה מימון",
  description: "מאמרים בנושאי ביטחון עצמי, שינוי, זוגיות, תת מודע, NLP ועוד. עדנה מימון, מכללת אמביציות.",
};

const categories = ["הכל", "ביטחון עצמי", "שינוי", "זוגיות", "NLP", "תת מודע", "כעסים", "הצלחה", "תקשורת"];

export default function ArticlesPage() {
  const grouped = categories.slice(1).reduce((acc, cat) => {
    acc[cat] = articles.filter((a) => a.category === cat);
    return acc;
  }, {} as Record<string, typeof articles>);

  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">מאמרים ומידע</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            מאמרים בנושאים: ביטחון עצמי, שינוי, זוגיות, NLP, תת מודע, כעסים ועוד
          </p>
          <div className="mt-4 text-white/60 text-sm">{articles.length} מאמרים</div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* All articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all p-6 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 font-medium">
                    {article.category}
                  </span>
                  {article.date && (
                    <span className="text-xs text-gray-400">{article.date}</span>
                  )}
                </div>
                <h2 className="font-bold text-purple-900 text-lg mb-2 group-hover:text-purple-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-purple-500 text-sm font-medium group-hover:text-purple-700 transition-colors">
                  קרא עוד ←
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
