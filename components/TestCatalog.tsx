"use client";

import { useState } from "react";
import { testGroups, tests, type TestGroup } from "@/lib/site";
import { ArrowUpRight, Check } from "@/components/icons";

const tones = {
  amber: { box: "bg-amber-50 border-amber-200 text-amber-700", tag: "text-amber-600 bg-amber-100/70" },
  blue: { box: "bg-blue-50 border-blue-200 text-blue-700", tag: "text-blue-600 bg-blue-100/70" },
  rose: { box: "bg-rose-50 border-rose-200 text-rose-700", tag: "text-rose-600 bg-rose-100/70" },
  emerald: { box: "bg-emerald-50 border-emerald-200 text-emerald-700", tag: "text-emerald-600 bg-emerald-100/70" },
  violet: { box: "bg-violet-50 border-violet-200 text-violet-700", tag: "text-violet-600 bg-violet-100/70" },
};

export default function TestCatalog() {
  const [group, setGroup] = useState<"all" | TestGroup>("all");
  const shown = group === "all" ? tests : tests.filter((t) => t.group === group);

  return (
    <>
      <div role="tablist" aria-label="Filter tests" className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {testGroups.map((g) => {
          const active = g.id === group;
          return (
            <button
              key={g.id}
              role="tab"
              aria-selected={active}
              onClick={() => setGroup(g.id)}
              className={`rounded-full px-5 py-2.5 text-sm transition-all active:scale-95 ${
                active
                  ? "bg-brand font-semibold text-white shadow-md shadow-violet-500/20"
                  : "bg-slate-100 font-medium text-slate-700 hover:bg-slate-200"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      <div className="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {shown.map((t) => {
          const tone = tones[t.tone];
          return (
            <article
              key={t.code}
              className="group flex flex-col rounded-3xl border border-violet-100 bg-gradient-to-b from-[#fbfaff] to-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-[11px] font-extrabold tracking-tight shadow-sm ${tone.box}`}
                >
                  {t.code}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${tone.tag}`}>
                  {t.tag}
                </span>
              </div>
              <h3 className="mb-1 text-xl font-bold text-ink transition-colors group-hover:text-brand">{t.name}</h3>
              <p className="mb-4 flex-1 text-sm text-slate-500">{t.body}</p>
              <div className="mb-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {t.feature}
                </span>
                <span className="rounded bg-violet-50 px-2 py-0.5 font-bold text-violet-700">TopTier Academy</span>
              </div>
              <a
                href={t.href}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-sm font-semibold text-white transition-all group-hover:bg-brand"
              >
                Start Practice
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
}
