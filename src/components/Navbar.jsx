import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#hero' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[var(--nav-bg)] backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Status */}
          <Link 
            to="/" 
            className="flex items-center gap-3 text-decoration-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5A93B] to-[#996918] flex items-center justify-center font-bold text-[#0A0B0E] text-lg shadow-md group-hover:scale-105 transition-transform">
              {personal.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 dark:text-white tracking-wide text-base leading-tight group-hover:text-[#E5A93B] transition-colors">
                {personal.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                <span className="status-dot"></span>
                <span className="text-[11px] font-medium tracking-wide uppercase text-emerald-600 dark:text-emerald-400">
                  Available
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/5 dark:bg-white/[0.04] backdrop-blur-md border border-slate-200 dark:border-white/10 px-4 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-[#E5A93B] transition-colors rounded-full hover:bg-slate-900/5 dark:hover:bg-white/[0.05] cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Callouts & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-[#E5A93B] hover:border-[#E5A93B]/50 transition-all cursor-pointer"
              aria-label="Toggle Light and Dark Mode"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 rotate-0 transition-transform duration-300" />
              )}
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !py-2 !px-4 !text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => handleNavClick('/#contact')}
              className="btn-primary !py-2 !px-4 !text-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Drawer */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--modal-bg)] backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="text-left py-2 px-3 text-slate-700 dark:text-gray-200 hover:text-[#E5A93B] hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg text-base font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full justify-center !py-2.5"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
              <button
                onClick={() => handleNavClick('/#contact')}
                className="btn-primary w-full justify-center !py-2.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
