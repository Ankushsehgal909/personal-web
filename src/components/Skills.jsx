import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Globe, 
  Palette, 
  Layout, 
  Server, 
  Cpu, 
  Terminal, 
  Database, 
  Layers, 
  GitMerge, 
  Box, 
  GitBranch, 
  Zap, 
  Sparkles,
  Search
} from 'lucide-react';
import { FigmaIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

// Map string icon names to Lucide Icon components safely
const iconMap = {
  Code2,
  FileCode,
  Globe,
  Palette,
  Layout,
  Server,
  Cpu,
  Terminal,
  Database,
  Layers,
  GitMerge,
  Box,
  GitBranch,
  Zap,
  Figma: FigmaIcon,
  Sparkles
};

export function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.items.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">02 // Technical Arsenal</span>
        <h2 className="section-title">
          Skills & <span className="gold-gradient-text">Technologies</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          A comprehensive overview of my technical stack and engineering capabilities.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Filter Tabs & Search Control */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {skills.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === category
                  ? 'text-[#0A0B0E]'
                  : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-[#E5A93B] rounded-xl shadow-lg shadow-[#E5A93B]/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B]/60 transition-colors"
          />
        </div>

      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <motion.div 
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel p-5 flex flex-col justify-between group cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-amber-600 dark:text-[#E5A93B] group-hover:bg-[#E5A93B]/20 group-hover:text-amber-600 dark:group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    skill.level === 'Expert'
                      ? 'border-amber-500/40 text-amber-600 dark:text-amber-300 bg-amber-400/10'
                      : skill.level === 'Advanced'
                      ? 'border-cyan-500/40 text-cyan-700 dark:text-cyan-300 bg-cyan-400/10'
                      : 'border-slate-400/40 text-slate-600 dark:text-gray-300 bg-slate-400/10'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors mb-1">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 glass-panel">
          <p className="text-slate-500 dark:text-gray-400 text-sm">No skills found matching "{searchQuery}".</p>
        </div>
      )}

    </section>
  );
}
