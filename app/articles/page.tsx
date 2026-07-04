import { articles } from "@/data/articles";
import ArticlesBrowser from "@/components/ArticlesBrowser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמרים | מכללת אמביציות - עדנה מימון",
  description: "מאמרים בנושאי ביטחון עצמי, שינוי, זוגיות, תת מודע, NLP ועוד. עדנה מימון, מכללת אמביציות.",
};

export default function ArticlesPage() {
  return (
    <div>
      <section className="py-20 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">מאמרים ומידע</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            מאמרים בנושאים: ביטחון עצמי, שינוי, זוגיות, NLP, תת מודע, כעסים ועוד
          </p>
          <div className="mt-4 text-white/60 text-sm">{articles.length} מאמרים</div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ArticlesBrowser articles={articles} />
        </div>
      </section>
    </div>
  );
}
