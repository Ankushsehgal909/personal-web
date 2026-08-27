import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-subtitle">03 // Career Milestones</span>
        <h2 className="section-title">
          Work <span className="gold-gradient-text">Experience</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          A track record of high-impact engineering roles and architectural leadership.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Vertical Illuminated Timeline */}
      <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        
        {experience.map((item, index) => (
          <div key={index} className="relative group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[#E5A93B] flex items-center justify-center text-[#E5A93B] group-hover:scale-125 group-hover:bg-[#E5A93B] group-hover:text-[#0A0B0E] transition-all shadow-lg shadow-[#E5A93B]/30">
              <Briefcase className="w-3 h-3" />
            </div>

            {/* Timeline Experience Card */}
            <div className="glass-panel p-6 sm:p-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-cyan-700 dark:text-[#00D2FF] font-semibold text-base">
                    {item.company}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-[#E5A93B]" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-gray-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mb-6 space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                      <ChevronRight className="w-4 h-4 text-amber-600 dark:text-[#E5A93B] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
