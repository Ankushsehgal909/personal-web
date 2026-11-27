import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Package } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './ui/SpotlightCard';
import { BorderBeam } from './ui/BorderBeam';

export function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Mobile Apps', 'Web Applications', 'NPM Libraries'];

  const filteredProjects = projects.filter((project) => {
    return activeCategory === 'All' || project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">04 // Portfolio Showcase</span>
        <h2 className="section-title">
          Featured <span className="gold-gradient-text">Projects &amp; Packages</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          Selected Mobile Apps, Web Applications, and Open-Source NPM Libraries built by me.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Category Filter Tabs (All, Mobile Apps, Web Applications, NPM Libraries) */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeCategory === category
                ? 'text-[#0A0B0E]'
                : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-[#E5A93B] rounded-xl shadow-lg shadow-[#E5A93B]/20"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group cursor-default h-full"
            >
              <SpotlightCard className="h-full shadow-lg hover:shadow-2xl hover:border-[#E5A93B]/50">
                {index === 0 && <BorderBeam duration={14} borderWidth={1.5} />}
              <div>
                {/* Project Image Frame */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 dark:bg-[#12141C]">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100" 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0A0B0E] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 right-3 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 dark:bg-[#0A0B0E]/80 backdrop-blur-md border border-slate-700 dark:border-white/15 text-[#E5A93B]">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.npmUrl && (
                    <motion.a
                      href={project.npmUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      aria-label="NPM Package"
                      title="View on NPM"
                      whileHover={{ scale: 1.15 }}
                    >
                      <Package className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                      whileHover={{ scale: 1.15 }}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-[#E5A93B] hover:text-amber-700 dark:hover:text-white transition-colors"
                      aria-label="Live Demo"
                      whileHover={{ scale: 1.15 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
}
