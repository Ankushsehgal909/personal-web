import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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

  // 3D Parallax Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXMouse = useTransform(y, [-100, 100], [12, -12]);
  const rotateYMouse = useTransform(x, [-100, 100], [-12, 12]);

  const springConfig = { stiffness: 250, damping: 20 };
  const rotateX = useSpring(rotateXMouse, springConfig);
  const rotateY = useSpring(rotateYMouse, springConfig);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Headline, Bio, Callouts */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/[0.04] border border-slate-300 dark:border-[#E5A93B]/30 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-[#E5A93B]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-200">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4"
          >
            Hi, I'm <span className="gold-gradient-text">{personal.name}</span>
          </motion.h1>

          {/* Dynamic Role Rotator */}
          <motion.div variants={itemVariants} className="h-10 mb-6 flex items-center">
            <span className="text-xl sm:text-2xl font-mono text-cyan-600 dark:text-[#00D2FF]">
              &gt; {displayText}
            </span>
            <span className="w-2.5 h-6 bg-cyan-600 dark:bg-[#00D2FF] ml-1 animate-pulse"></span>
          </motion.div>

          {/* Tagline / Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8"
          >
            {personal.tagline} {personal.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10 w-full">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-semibold">
              Connect:
            </span>
            <div className="flex gap-3">
              {[
                { url: personal.socials.github, Icon: GithubIcon, label: 'GitHub' },
                { url: personal.socials.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
                { url: personal.socials.twitter, Icon: TwitterIcon, label: 'Twitter' },
                { url: personal.socials.facebook, Icon: FacebookIcon, label: 'Facebook' },
                { url: personal.socials.discord, Icon: DiscordIcon, label: 'Discord' }
              ].map(({ url, Icon, label }) => url && (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/50 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait Visual with 3D Parallax Tilt */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 relative flex justify-center items-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Main Visual Frame */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl p-1 bg-gradient-to-tr from-[#E5A93B]/50 via-slate-200 dark:via-white/10 to-[#00D2FF]/40 shadow-2xl transition-shadow hover:shadow-[#E5A93B]/20"
          >
            <div className="w-full h-full rounded-[22px] bg-slate-900 dark:bg-[#12141C] overflow-hidden relative flex items-center justify-center border border-slate-700 dark:border-white/10">
              
              {/* Inner Glowing Grid Canvas Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1E2A] to-[#0A0B0E] opacity-90" />
              
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                <motion.div 
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#E5A93B] to-[#996918] p-1 mb-4 shadow-xl"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full rounded-full bg-[#0A0B0E] flex items-center justify-center text-4xl sm:text-5xl font-black gold-gradient-text">
                    {personal.initials}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-1">{personal.name}</h3>
                <p className="text-xs text-[#E5A93B] font-mono">{personal.title}</p>
              </div>

              {/* Decorative Corner Aperture Markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E5A93B]/60"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E5A93B]/60"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E5A93B]/60"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E5A93B]/60"></div>
            </div>
          </motion.div>

          {/* Floating Metric Badge 1 (Top Right) with Levitation Animation */}
          <motion.div 
            className="absolute -top-4 -right-2 sm:right-0 glass-panel !py-3 !px-4 flex items-center gap-3 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-2 rounded-lg bg-[#E5A93B]/15 text-amber-600 dark:text-[#E5A93B]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">{stats[0].value}</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">{stats[0].label}</div>
            </div>
          </motion.div>

          {/* Floating Metric Badge 2 (Bottom Left) with Levitation Animation */}
          <motion.div 
            className="absolute -bottom-6 -left-2 sm:left-0 glass-panel !py-3 !px-4 flex items-center gap-3 shadow-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-[#00D2FF]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">{stats[1].value}</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">{stats[1].label}</div>
            </div>
          </motion.div>

        </motion.div>

      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={scrollToAbout}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-[#E5A93B] hover:border-[#E5A93B]/40 transition-all animate-bounce cursor-pointer"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>

    </section>
  );
}
