import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { ProjectVisual } from '../components/ui/ProjectVisual';

export function ProjectDetailPage() {
  const { id } = useParams();
  const { projects } = portfolioData;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-slate-600 dark:text-gray-400 mb-6">The requested project showcase item does not exist.</p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      
      {/* Top Breadcrumbs */}
      <div className="mb-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-[#E5A93B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Archive</span>
        </Link>
      </div>

      {/* Main Header Banner */}
      <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden mb-10 bg-slate-900 dark:bg-[#12141C] border border-slate-200 dark:border-white/10 shadow-2xl group">
        <ProjectVisual project={project} heightClass="h-full" showCategory={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 dark:from-[#0A0B0E] via-slate-950/35 dark:via-[#0A0B0E]/35 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E5A93B]/20 border border-[#E5A93B]/40 text-[#E5A93B] inline-block mb-2">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {project.title}
            </h1>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-2.5 !px-4"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2.5 !px-5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Case Study Details */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-base mb-6">
              {project.description}
            </p>

            {project.challenges && (
              <div className="bg-slate-100 dark:bg-white/[0.03] p-5 rounded-2xl border border-slate-200 dark:border-white/5 mb-4">
                <h3 className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>The Engineering Challenge</span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">{project.challenges}</p>
              </div>
            )}

            {project.solutions && (
              <div className="bg-slate-100 dark:bg-white/[0.03] p-5 rounded-2xl border border-slate-200 dark:border-white/5">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Solution & Architecture</span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">{project.solutions}</p>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Tech Stack Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          <div className="glass-panel p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-[#E5A93B]" />
              <span>Technology Stack</span>
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">Status</div>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>Production Ready</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
