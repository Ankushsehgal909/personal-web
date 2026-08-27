import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, CheckCircle2, FileText, Terminal, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal, stats, aboutPillars, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">01 // Biography & Vision</span>
        <h2 className="section-title">
          About <span className="gold-gradient-text">My Engineering</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Main Grid: Story + Pillars */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        
        {/* Left Column: Story, Education & Metrics */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-[#E5A93B]">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Summary</h3>
            </div>
            
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
              {personal.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/[0.03] p-3 rounded-xl border border-slate-200 dark:border-white/5">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-[#00D2FF]" />
                <span>Location: <strong className="text-slate-900 dark:text-white">{personal.location}</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                href={`mailto:${personal.email}`}
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FileText className="w-4 h-4" />
                <span>Contact via Email</span>
              </motion.a>
            </div>
          </div>

          {/* Education Card */}
          {education && education.length > 0 && (
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-[#00D2FF]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Education</h4>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-[#E5A93B] pl-4 py-1">
                  <h5 className="font-semibold text-slate-900 dark:text-white text-base">{edu.degree}</h5>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{edu.institution}</p>
                  <span className="text-xs font-mono text-amber-600 dark:text-[#E5A93B]">{edu.duration}</span>
                </div>
              ))}
            </div>
          )}

          {/* Stats Bar Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="glass-panel p-4 text-center"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Column: Core Engineering Pillars */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-amber-600 dark:text-[#E5A93B]" />
            <span>Core Pillars</span>
          </h3>

          {aboutPillars.map((pillar, index) => (
            <motion.div 
              key={index} 
              className="glass-panel p-6 hover:border-[#E5A93B]/40 transition-all"
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-amber-600 dark:text-[#E5A93B] shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{pillar.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>

    </section>
  );
}
