import React from 'react';
import { User, MapPin, CheckCircle2, FileText, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal, stats, aboutPillars } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-subtitle">01 // Biography & Vision</span>
        <h2 className="section-title">
          About <span className="gold-gradient-text">My Crafts</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Grid: Story + Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Story & Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-[#E5A93B]">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Behind the Code</h3>
            </div>
            
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
              {personal.bio} I specialize in combining robust full-stack architecture with intuitive interfaces that leave a lasting impression.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-6 bg-slate-100 dark:bg-white/[0.03] p-3 rounded-xl border border-slate-200 dark:border-white/5 w-fit">
              <MapPin className="w-4 h-4 text-cyan-600 dark:text-[#00D2FF]" />
              <span>Based in <strong className="text-slate-900 dark:text-white">{personal.location}</strong></span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary">
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Stats Bar Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-panel p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Core Engineering Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-amber-600 dark:text-[#E5A93B]" />
            <span>Core Pillars</span>
          </h3>

          {aboutPillars.map((pillar, index) => (
            <div key={index} className="glass-panel p-6 hover:border-[#E5A93B]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-amber-600 dark:text-[#E5A93B] shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{pillar.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
