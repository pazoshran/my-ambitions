"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticlesBrowser({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("הכל");

  // Build category tabs from the data, sorted by article count (desc)
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of articles) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);
    return ["הכל", ...sorted];
  }, [articles]);

  const filtered = useMemo(
    () => (active === "הכל" ? articles : articles.filter((a) => a.category === active)),
    [active, articles]
  );

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-purple-800 text-white"
                : "bg-purple-50 text-purple-800 hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all p-6 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 font-medium">
                {article.category}
              </span>
              {article.date && <span className="text-xs text-gray-400">{article.date}</span>}
            </div>
            <h2 className="font-bold text-purple-900 text-lg mb-2 group-hover:text-purple-600 transition-colors leading-snug">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
            <div className="mt-4 text-purple-500 text-sm font-medium group-hover:text-purple-700 transition-colors">
              קרא עוד ←
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
