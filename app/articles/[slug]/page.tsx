import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(decodeURIComponent(slug));
  if (!article) return { title: "מאמר לא נמצא" };
  return {
    title: `${article.title} | מכללת אמביציות`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getArticleBySlug(decodedSlug);

  if (!article) notFound();

  const relatedArticles = articles
    .filter((a) => a.slug !== decodedSlug && a.category === article.category)
    .slice(0, 3);

  const paragraphs = article.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 10);

  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">מאמרים</Link>
            <span>/</span>
            <span className="text-white/80">{article.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span className="bg-white/15 rounded-full px-3 py-1">{article.category}</span>
            {article.date && <span>פורסם: {article.date}</span>}
            <span>עדנה מימון</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-50 rounded-2xl p-6 mb-8 text-gray-700 text-lg leading-relaxed italic">
            {article.excerpt}
          </div>

          <article className="prose-rtl space-y-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </article>

          {/* Author signature */}
          <div className="mt-12 border-t border-purple-100 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-lg shrink-0">
                ע
              </div>
              <div>
                <div className="font-bold text-purple-900">עדנה מימון</div>
                <div className="text-gray-600 text-sm">מאסטרית NLP, מנחת סדנאות ומאמנת אישית</div>
                <div className="mt-2 text-sm text-gray-500">
                  מכללת אמביציות | ednamaim@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Back + CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 font-medium px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              ← לכל המאמרים
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-800 text-white font-medium px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              צרו קשר
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-purple-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-purple-900 mb-6">מאמרים נוספים בנושא {article.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all"
                >
                  <h3 className="font-bold text-purple-900 text-sm mb-2 leading-snug">{a.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
