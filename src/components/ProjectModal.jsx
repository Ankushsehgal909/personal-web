import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle, AlertTriangle, Package } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 dark:bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-[#E5A93B]/50 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer z-10"
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 dark:bg-[#12141C]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0A0B0E] via-transparent to-transparent" />
          
          <span className="absolute bottom-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-slate-900/80 dark:bg-[#0A0B0E]/80 border border-slate-700 dark:border-white/20 text-[#E5A93B]">
            {project.category}
          </span>
        </div>

        {/* Modal Title & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-gray-400 font-mono">
              {project.summary}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.npmUrl && (
              <motion.a
                href={project.npmUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-2 !px-4 !text-sm !text-red-500 hover:!text-red-600"
                whileHover={{ scale: 1.05 }}
              >
                <Package className="w-4 h-4 text-red-500" />
                <span>NPM</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-2 !px-4 !text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 !px-4 !text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-6 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Overview</h3>
            <p>{project.description}</p>
          </div>

          {project.challenges && (
            <div className="bg-slate-100 dark:bg-white/[0.03] p-4 rounded-xl border border-slate-200 dark:border-white/5">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>Technical Challenge</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-gray-300">{project.challenges}</p>
            </div>
          )}

          {project.solutions && (
            <div className="bg-slate-100 dark:bg-white/[0.03] p-4 rounded-xl border border-slate-200 dark:border-white/5">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span>Architectural Solution</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-gray-300">{project.solutions}</p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-semibold mb-3">
            Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
