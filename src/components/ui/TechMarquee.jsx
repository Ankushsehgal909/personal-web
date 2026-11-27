import React from 'react';

/**
 * 21st.dev-inspired infinite horizontal TechMarquee with edge fade masks
 * and pause-on-hover interaction.
 */
export function TechMarquee({ items = [], className = '' }) {
  if (!items.length) return null;

  const duplicated = [...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {duplicated.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-mono text-slate-700 dark:text-gray-300 whitespace-nowrap hover:border-[#E5A93B]/50 hover:text-amber-600 dark:hover:text-[#E5A93B] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93B]/80" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
