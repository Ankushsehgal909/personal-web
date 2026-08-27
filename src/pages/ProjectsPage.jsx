import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Eye, Search, Package } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

export function ProjectsPage() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Mobile Apps', 'Web Applications', 'NPM Libraries'];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-[#E5A93B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="section-subtitle">Archive // Showcase</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          All Mobile Apps, Web Apps &amp; <span className="gold-gradient-text">NPM Libraries</span>
        </h1>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-base">
          Browse through the complete archive of cross-platform mobile apps, full-stack web platforms, and open-source NPM packages.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        
        {/* Category buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E5A93B] text-[#0A0B0E] shadow-lg shadow-[#E5A93B]/20'
                  : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B] transition-colors"
          />
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
          >
            <div>
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 dark:bg-[#12141C]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0A0B0E] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 dark:bg-[#0A0B0E]/80 border border-slate-700 dark:border-white/15 text-[#E5A93B]">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors block mb-2"
                >
                  {project.title}
                </Link>
                <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
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
                  <a
                    href={project.npmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    title="View on NPM"
                  >
                    <Package className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-[#E5A93B] hover:text-amber-700 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 glass-panel">
          <p className="text-slate-500 dark:text-gray-400 text-base">No project matching your criteria was found.</p>
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </div>
  );
}
