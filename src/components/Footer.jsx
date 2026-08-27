import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-[#0A0B0E]/90 py-12 px-4 sm:px-6 lg:px-8 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E5A93B] to-[#996918] flex items-center justify-center font-bold text-[#0A0B0E] text-xs">
            {personal.initials}
          </div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            {personal.name} &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Middle Note */}
        <div className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
          <span>Crafted with precision &amp; cinematic UI.</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/40 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
