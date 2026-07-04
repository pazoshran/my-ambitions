import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { workshopDetails, getWorkshopDetailBySlug } from "@/data/workshopDetails";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return workshopDetails.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWorkshopDetailBySlug(decodeURIComponent(slug));
  if (!w) return { title: "סדנה לא נמצאה" };
  return {
    title: `${w.title} | מכללת אמביציות`,
    description: w.subtitle + " — " + w.intro[0].slice(0, 120),
  };
}

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWorkshopDetailBySlug(decodeURIComponent(slug));
  if (!w) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-0 px-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="absolute inset-0">
          <Image src={w.heroImage} alt="" fill className="object-cover opacity-[0.12]" priority />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4 justify-center">
            <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
            <span>/</span>
            <Link href="/workshops" className="hover:text-white transition-colors">סדנאות</Link>
          </div>
          <div className="text-5xl mb-4">{w.icon}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">{w.title}</h1>
          <p className="text-xl text-white/85 mb-8">{w.subtitle}</p>
          <a href="#lead-form" className="btn btn-gold text-lg">השאר/י פרטים</a>

          {/* Featured image */}
          <div className="mt-12 -mb-16 md:-mb-20">
            <div className="relative rounded-t-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 h-56 md:h-72">
              <Image src={w.heroImage} alt={w.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>
      <div className="h-16 md:h-20 bg-white" />

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-50 rounded-3xl p-8 md:p-10 space-y-4 text-gray-700 leading-relaxed text-lg">
            {w.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      {w.forWhom && w.forWhom.length > 0 && (
        <section className="py-12 px-4 bg-purple-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">{w.forWhomTitle ?? "האם הסדנה מתאימה לך?"}</h2>
            <div className="space-y-3">
              {w.forWhom.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100">
                  <span className="text-purple-400 font-bold mt-0.5">?</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            {w.forWhomNote && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-purple-900 font-medium">
                {w.forWhomNote}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Curriculum */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-8">מה כוללת הסדנה</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {w.curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <span className="w-6 h-6 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          {w.bonusNote && (
            <div className="mt-6 bg-purple-900 text-white rounded-2xl p-6 text-center font-medium">
              {w.bonusNote}
            </div>
          )}
        </div>
      </section>

      {/* Logistics */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">פרטי הסדנה</h2>
          <div className="bg-white rounded-2xl border border-purple-100 divide-y divide-purple-50">
            {w.logistics.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <div className="font-bold text-purple-900 sm:w-1/3">{row.label}</div>
                <div className="text-gray-700">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {w.testimonials && w.testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">מה אומרים המשתתפים</h2>
            <div className="space-y-6">
              {w.testimonials.map((t, i) => (
                <div key={i} className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-yellow-500 text-2xl mb-3">❝</div>
                  <p className="text-gray-700 leading-relaxed mb-3">{t.text}</p>
                  <p className="font-bold text-purple-900">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead form */}
      <section id="lead-form" className="py-16 px-4 bg-purple-50 scroll-mt-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">מתעניינים? השאירו פרטים</h2>
          <p className="text-center text-gray-600 mb-8">המקומות מוגבלים — עדנה תחזור אליכם עם כל המידע.</p>
          <LeadForm
            title={`השארת פרטים — ${w.title}`}
            subtitle="מלאו את הפרטים ונחזור אליכם בהקדם."
            source={w.title}
          />
          <div className="mt-6 text-center">
            <Link href="/workshops" className="text-purple-700 underline text-sm hover:text-purple-900 transition-colors">
              ← לכל הסדנאות
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
