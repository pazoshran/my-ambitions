import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "סרטוני וידאו | מכללת אמביציות - עדנה מימון",
  description: "סרטוני וידאו של עדנה מימון — טיפים לשליטה בכעסים, להעצמה אישית והמלצות של בוגרי הסדנאות.",
};

const videos = [
  { id: "85lVJID6dTU", title: "טיפים לשליטה בכעסים", desc: "עדנה מימון נותנת טיפים מעשיים לשליטה בכעסים" },
  { id: "vjQJWg-x3dI", title: "כלים להעצמה אישית", desc: "טיפים ותובנות מעולם ה-NLP" },
  { id: "2seAPhYIomE", title: "עוד מעדנה מימון", desc: "תכנים מעשיים לשינוי ולהעצמה" },
  { id: "1dxnFxnd7zk", title: "המלצה חמה של חן", desc: "המלצה על הסדנה לשליטה בכעסים (לחצו על כתוביות בעברית)" },
];

export default function VideosPage() {
  return (
    <div>
      <section className="py-16 px-4 text-white" style={{ background: "linear-gradient(135deg, #3D1E60, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🎬</div>
          <h1 className="text-4xl font-bold mb-4">סרטוני וידאו</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            טיפים, כלים והמלצות מעדנה מימון ומבוגרי הסדנאות
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((v) => (
              <div key={v.id} className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-purple-900 text-lg mb-1">{v.title}</h2>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-purple-50 rounded-3xl p-8 border border-purple-100">
            <p className="text-purple-900 font-medium text-lg mb-2">רוצים לראות עוד?</p>
            <p className="text-gray-600 mb-6">עקבו אחרי ערוץ ה-YouTube של מכללת אמביציות</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.youtube.com/channel/UCkJVc3bG2drcOscCMqBLxhA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-full transition-colors"
              >
                לערוץ היוטיוב
              </a>
              <Link href="/workshops" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-6 py-2 rounded-full transition-colors">
                לסדנאות שלנו
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
