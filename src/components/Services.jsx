import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Smartphone,
  Radio,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { BorderBeam } from './ui/BorderBeam';

const serviceIcons = {
  Code,
  Layout,
  Server,
  Zap,
};

const bentoConfig = {
  'mobile-dev': {
    span: 'lg:col-span-7',
    accent: '#E5A93B',
    spotlight: 'rgba(229, 169, 59, 0.18)',
    tag: 'iOS • Android • RN 0.85',
    statusText: 'Native Bridges Active',
    StatusIcon: Smartphone,
    featured: true,
  },
  'iot-ble': {
    span: 'lg:col-span-5',
    accent: '#00D2FF',
    spotlight: 'rgba(0, 210, 255, 0.16)',
    tag: 'BLE GATT • UART • WS',
    statusText: 'Sub-Second Telemetry',
    StatusIcon: Radio,
    featured: false,
  },
  'fullstack-web': {
    span: 'lg:col-span-5',
    accent: '#00D2FF',
    spotlight: 'rgba(0, 210, 255, 0.16)',
    tag: 'React 19 • Next.js • Node',
    statusText: 'RBAC & Multi-Tenant',
    StatusIcon: ShieldCheck,
    featured: false,
  },
  performance: {
    span: 'lg:col-span-7',
    accent: '#E5A93B',
    spotlight: 'rgba(229, 169, 59, 0.18)',
    tag: 'NPM • TypeScript • ESM',
    statusText: 'Tree-Shakeable Builds',
    StatusIcon: Terminal,
    featured: false,
  },
};

export function Services() {
  const { services } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">05 // Capabilities &amp; Expertise</span>
        <h2 className="section-title">
          What I <span className="gold-gradient-text">Offer</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          Specialized engineering services tailored to modern software standards, IoT hardware, and scalable design systems.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* 21st.dev-inspired Asymmetric Bento Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {services.map((service, index) => {
          const IconComponent = serviceIcons[service.icon] || Code;
          const config = bentoConfig[service.id] || {
            span: 'lg:col-span-6',
            accent: '#E5A93B',
            spotlight: 'rgba(229, 169, 59, 0.16)',
            tag: 'ENGINEERING',
            statusText: 'Production Ready',
            StatusIcon: Code,
            featured: false,
          };
          const StatusIcon = config.StatusIcon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group h-full ${config.span}`}
            >
              <SpotlightCard
                spotlightColor={config.spotlight}
                className="p-7 sm:p-8 h-full hover:border-[#E5A93B]/50"
              >
                {config.featured && <BorderBeam duration={14} borderWidth={1.5} />}

                {/* Subtle Corner Dot Matrix */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 w-44 h-44 opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_75%)]"
                  style={{
                    backgroundImage: `radial-gradient(${config.accent}88 1px, transparent 1px)`,
                    backgroundSize: '14px 14px',
                  }}
                />

                {/* Top Row: Icon + Live 21st.dev Status Pill + Number */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <motion.div
                        className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-[#E5A93B]/20 to-transparent border border-[#E5A93B]/40 flex items-center justify-center text-amber-600 dark:text-[#E5A93B] group-hover:bg-[#E5A93B] group-hover:text-[#0A0B0E] transition-all shadow-sm"
                        whileHover={{ rotate: 8, scale: 1.08 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-gray-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: config.accent }}
                        />
                        <span>{config.tag}</span>
                      </div>
                    </div>

                    <span className="text-2xl font-black font-mono text-slate-300/80 dark:text-white/10 group-hover:text-amber-500/40 dark:group-hover:text-[#E5A93B]/30 transition-colors select-none">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-[#E5A93B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-slate-200 dark:border-white/10">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.025] border border-slate-200/70 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-gray-300 group-hover:border-[#E5A93B]/20 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-[#00D2FF] shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-white/5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-gray-400">
                    <StatusIcon className="w-3.5 h-3.5 text-amber-600 dark:text-[#E5A93B]" />
                    <span>{config.statusText}</span>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-[#E5A93B] hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
