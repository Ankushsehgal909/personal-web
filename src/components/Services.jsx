import React from 'react';
import { Code, Layout, Server, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const serviceIcons = {
  Code,
  Layout,
  Server,
  Zap
};

export function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-subtitle">05 // Capabilities & Expertise</span>
        <h2 className="section-title">
          What I <span className="gold-gradient-text">Offer</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          Specialized services tailored to modern software standards and design systems.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const IconComponent = serviceIcons[service.icon] || Code;

          return (
            <div 
              key={service.id}
              className="glass-panel p-8 flex flex-col justify-between group hover:border-[#E5A93B]/50 transition-all duration-300"
            >
              <div>
                {/* Header Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E5A93B]/20 to-transparent border border-[#E5A93B]/40 flex items-center justify-center text-amber-600 dark:text-[#E5A93B] mb-6 group-hover:scale-110 group-hover:bg-[#E5A93B] group-hover:text-[#0A0B0E] transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-[#00D2FF] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
