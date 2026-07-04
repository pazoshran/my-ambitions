"use client";

import { useState } from "react";
import LeadForm from "@/components/LeadForm";

export default function RevealLeadForm({
  buttonLabel = "השאר/י פרטים עכשיו",
  title,
  subtitle,
  source,
}: {
  buttonLabel?: string;
  title?: string;
  subtitle?: string;
  source?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors text-lg"
        >
          {buttonLabel}
        </button>
      )}

      {open && (
        <div className="max-w-md mx-auto mt-2 text-right animate-[fadeIn_0.2s_ease-out]">
          <LeadForm title={title} subtitle={subtitle} source={source} />
        </div>
      )}
    </div>
  );
}
