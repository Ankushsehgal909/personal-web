import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';

const serviceIcons = {
  Code,
  Layout,
  Server,
  Zap
};

export function Services() {
  const { services } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">05 // Capabilities & Expertise</span>
        <h2 className="section-title">
          What I <span className="gold-gradient-text">Offer</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          Specialized services tailored to modern software standards and design systems.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => {
          const IconComponent = serviceIcons[service.icon] || Code;

          return (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group h-full"
            >
              <SpotlightCard className="p-8 h-full hover:border-[#E5A93B]/50">
              <div>
                {/* Header Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E5A93B]/20 to-transparent border border-[#E5A93B]/40 flex items-center justify-center text-amber-600 dark:text-[#E5A93B] mb-6 group-hover:bg-[#E5A93B] group-hover:text-[#0A0B0E] transition-all"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <IconComponent className="w-7 h-7" />
                </motion.div>

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
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
