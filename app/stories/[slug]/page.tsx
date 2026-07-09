import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStoryBySlug } from "@/data/stories";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(decodeURIComponent(slug));
  if (!story) return { title: "סיפור לא נמצא" };
  return {
    title: `${story.title} | מכללת אמביציות`,
    description: story.excerpt,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(decodeURIComponent(slug));
  if (!story) notFound();

  const paragraphs = story.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 5);

  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
            <span>/</span>
            <Link href="/stories" className="hover:text-white transition-colors">סיפורים עם מוסר השכל</Link>
            <span>/</span>
            <span className="text-white/80">{story.title}</span>
          </div>
          <div className="text-4xl mb-4">📖</div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{story.title}</h1>
          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span key={tag} className="bg-white/15 rounded-full px-3 py-1 text-sm text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-50 rounded-2xl p-6 mb-8 text-gray-700 text-lg leading-relaxed">
            {story.attribution && (
              <p className="font-bold text-purple-900 mb-2 not-italic">{story.attribution}</p>
            )}
            <span className="italic">{story.excerpt}</span>
          </div>

          <article className="space-y-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </article>

          {/* Author */}
          <div className="mt-12 border-t border-purple-100 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-lg shrink-0">
                ע
              </div>
              <div>
                <div className="font-bold text-purple-900">עדנה מימון</div>
                <div className="text-gray-600 text-sm">מאסטרית NLP, מנחת סדנאות ומאמנת אישית</div>
                <div className="mt-1 text-sm text-gray-500">מכללת אמביציות | ednamaim@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Lead form */}
          <div className="mt-12">
            <LeadForm
              title="רוצים לשמוע עוד? השאירו פרטים"
              subtitle="נשמח לחזור אליכם עם פרטים על הסדנאות, הקורסים והאימון האישי."
              source={`סיפור: ${story.title}`}
            />
          </div>

          {/* Nav */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 font-medium px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              ← לכל הסיפורים
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-800 text-white font-medium px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              צרו קשר
            </Link>
          </div>

          {/* More stories */}
          {stories.filter((s) => s.slug !== story.slug).length > 0 && (
            <div className="mt-12 bg-purple-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-purple-900 mb-4">סיפורים נוספים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stories
                  .filter((s) => s.slug !== story.slug)
                  .slice(0, 3)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/stories/${s.slug}`}
                      className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-bold text-purple-900 text-sm mb-2 leading-snug">{s.title}</h3>
                      <p className="text-gray-600 text-xs line-clamp-2">{s.excerpt}</p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
