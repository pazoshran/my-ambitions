import Link from "next/link";
import { stories } from "@/data/stories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סיפורים עם מוסר השכל | מכללת אמביציות",
  description: "סיפורי השראה עם מוסר השכל מאת עדנה מימון — משלים וסיפורים שיעוררו חשיבה, יפתחו נקודת מבט חדשה ויעניקו השראה.",
};

export default function StoriesPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-4xl font-bold mb-4">סיפורים עם מוסר השכל</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            משלים וסיפורי השראה שיעוררו בך חשיבה ויפתחו נקודת מבט חדשה — מאת עדנה מימון
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all"
              >
                <div className="text-4xl mb-4">✨</div>
                <h2 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {story.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                {story.tags && story.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span key={tag} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 text-purple-600 text-sm font-medium group-hover:text-purple-800 transition-colors">
                  קרא/י את הסיפור ←
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center bg-purple-50 rounded-3xl p-8 border border-purple-100">
            <p className="text-purple-900 font-medium text-lg mb-2">רוצים עוד תכנים מעוררי השראה?</p>
            <p className="text-gray-600 mb-6">עיינו גם בציטוטים ובמאמרים שלנו</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quotes" className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-full transition-colors">
                ציטוטים והעצמה
              </Link>
              <Link href="/articles" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-6 py-2 rounded-full transition-colors">
                מאמרים
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
