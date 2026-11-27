import React from 'react';

/**
 * 21st.dev-inspired AnimatedShimmerBadge.
 * Pill badge with a subtle sweeping shimmer highlight.
 */
export function AnimatedBadge({ children, className = '' }) {
  return (
    <div
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 bg-slate-900/5 dark:bg-white/[0.04] border border-slate-300 dark:border-[#E5A93B]/35 backdrop-blur-md shadow-sm ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 dark:via-[#E5A93B]/20 to-transparent"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </div>
  );
}
