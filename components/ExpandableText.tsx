"use client";

import { useState } from "react";

export default function ExpandableText({
  text,
  limit = 240,
  className = "",
}: {
  text: string;
  limit?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > limit;

  if (!isLong) {
    return <p className={className}>{text}</p>;
  }

  // Trim to the last word boundary before the limit for a clean cut
  const cut = text.slice(0, limit);
  const preview = cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : limit);

  return (
    <div>
      <p className={className}>
        {expanded ? text : `${preview}… `}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? "הצג פחות ▲" : "קרא עוד ▼"}
      </button>
    </div>
  );
}
