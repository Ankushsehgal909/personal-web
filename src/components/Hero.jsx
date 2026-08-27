import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Award,
  ChevronDown
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  FacebookIcon, 
  DiscordIcon 
} from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { personal, stats } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing effect for roles
  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, personal.roles]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Headline, Bio, Callouts */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/[0.04] border border-slate-300 dark:border-[#E5A93B]/30 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-[#E5A93B]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-200">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
            Hi, I'm <span className="gold-gradient-text">{personal.name}</span>
          </h1>

          {/* Dynamic Role Rotator */}
          <div className="h-10 mb-6 flex items-center">
            <span className="text-xl sm:text-2xl font-mono text-cyan-600 dark:text-[#00D2FF]">
              &gt; {displayText}
            </span>
            <span className="w-2.5 h-6 bg-cyan-600 dark:bg-[#00D2FF] ml-1 animate-pulse"></span>
          </div>

          {/* Tagline / Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
            {personal.tagline} {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10 w-full">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-semibold">
              Connect:
            </span>
            <div className="flex gap-3">
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socials.twitter && (
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socials.facebook && (
                <a
                  href={personal.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socials.discord && (
                <a
                  href={personal.socials.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Discord"
                >
                  <DiscordIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Hero Portrait Visual & Floating Metric Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Visual Frame */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl p-1 bg-gradient-to-tr from-[#E5A93B]/40 via-slate-200 dark:via-white/10 to-[#00D2FF]/30 shadow-2xl">
            <div className="w-full h-full rounded-[22px] bg-slate-900 dark:bg-[#12141C] overflow-hidden relative flex items-center justify-center border border-slate-700 dark:border-white/10">
              
              {/* Inner Glowing Grid Canvas Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1E2A] to-[#0A0B0E] opacity-90" />
              
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#E5A93B] to-[#996918] p-1 mb-4 shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#0A0B0E] flex items-center justify-center text-4xl sm:text-5xl font-black gold-gradient-text">
                    {personal.initials}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{personal.name}</h3>
                <p className="text-xs text-[#E5A93B] font-mono">{personal.title}</p>
              </div>

              {/* Decorative Corner Aperture Markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E5A93B]/60"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E5A93B]/60"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E5A93B]/60"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E5A93B]/60"></div>
            </div>
          </div>

          {/* Floating Metric Badge 1 (Top Right) */}
          <div className="absolute -top-4 -right-2 sm:right-0 glass-panel !py-3 !px-4 flex items-center gap-3 shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
            <div className="p-2 rounded-lg bg-[#E5A93B]/15 text-amber-600 dark:text-[#E5A93B]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">{stats[0].value}</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">{stats[0].label}</div>
            </div>
          </div>

          {/* Floating Metric Badge 2 (Bottom Left) */}
          <div className="absolute -bottom-6 -left-2 sm:left-0 glass-panel !py-3 !px-4 flex items-center gap-3 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-[#00D2FF]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">{stats[1].value}</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">{stats[1].label}</div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-12">
        <button
          onClick={scrollToAbout}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/40 transition-all animate-bounce cursor-pointer"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
