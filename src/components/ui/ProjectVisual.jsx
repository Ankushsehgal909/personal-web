import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Bluetooth,
  Radio,
  MapPin,
  ShieldCheck,
  Activity,
  Cpu,
  Package,
  Terminal,
  Sparkles,
  BarChart3,
  Layers,
} from 'lucide-react';

const visualPresets = {
  safome: {
    mode: 'radar',
    Icon: ShieldCheck,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'GPS • SOCKET.IO',
    metric: 'SUB-SEC SYNC',
  },
  alusync: {
    mode: 'radar',
    Icon: Cpu,
    accent: '#E5A93B',
    secondary: '#10B981',
    badge: 'RN 0.84 • WS',
    metric: 'ZONE CONTROL',
  },
  'aludecor-technician': {
    mode: 'radar',
    Icon: Bluetooth,
    accent: '#00D2FF',
    secondary: '#E5A93B',
    badge: 'BLE GATT • RSSI',
    metric: 'STEPPER CAL',
  },
  'hospital-kiosk': {
    mode: 'radar',
    Icon: Activity,
    accent: '#00D2FF',
    secondary: '#10B981',
    badge: 'BLE • UART',
    metric: 'KIOSK LIVE',
  },
  'alubreeze-web': {
    mode: 'bars',
    Icon: Layers,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'MULTI-TENANT',
    metric: 'LIVE CCU',
  },
  'dru-farm': {
    mode: 'network',
    Icon: Radio,
    accent: '#10B981',
    secondary: '#E5A93B',
    badge: 'IOT COLLARS',
    metric: 'HERD TELEMETRY',
  },
  fakutori: {
    mode: 'bars',
    Icon: BarChart3,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'SAAS • BIOMETRIC',
    metric: 'SHIFT ENGINE',
  },
  tracklone: {
    mode: 'network',
    Icon: MapPin,
    accent: '#00D2FF',
    secondary: '#E5A93B',
    badge: 'SOC • GEOFENCE',
    metric: 'VITALS + SOS',
  },
  'lora-gps-tracker': {
    mode: 'network',
    Icon: Radio,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'LORAWAN • MAP',
    metric: 'FLEET CLUSTER',
  },
  'hrms-enterprise': {
    mode: 'bars',
    Icon: BarChart3,
    accent: '#00D2FF',
    secondary: '#E5A93B',
    badge: 'RBAC • PAYROLL',
    metric: 'ENTERPRISE',
  },
  'smart-journey': {
    mode: 'orbit',
    Icon: Sparkles,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'AI PLANNER',
    metric: 'ITINERARY',
  },
  'npm-package-placeholder': {
    mode: 'terminal',
    Icon: Package,
    accent: '#E5A93B',
    secondary: '#00D2FF',
    badge: 'NPM • TS',
    metric: 'TREE-SHAKEABLE',
  },
};

const defaultPreset = {
  mode: 'orbit',
  Icon: Smartphone,
  accent: '#E5A93B',
  secondary: '#00D2FF',
  badge: 'PRODUCTION',
  metric: 'ACTIVE',
};

/**
 * 21st.dev-inspired animated architectural preview for project cards and headers.
 * Replaces static screenshots with live motion diagrams (Radar Pulse, Node Network,
 * Mini Bento Bars, Orbiting Hub, or Terminal Preview).
 */
export function ProjectVisual({ project, heightClass = 'h-48 sm:h-52', showCategory = true }) {
  const preset = visualPresets[project.id] || defaultPreset;
  const { mode, Icon, accent, secondary, badge, metric } = preset;

  return (
    <div
      className={`relative ${heightClass} overflow-hidden bg-slate-950 dark:bg-[#0C0E14] select-none`}
    >
      {/* Radial Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(${accent}55 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
        }}
      />

      {/* Ambient Dual-Tone Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-500"
        style={{ background: accent }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: secondary }}
      />

      {/* Mode 1: Concentric Radar Pulse (IoT / BLE / Mobile) */}
      {mode === 'radar' && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border"
              style={{
                width: `${ring * 56}px`,
                height: `${ring * 56}px`,
                borderColor: `${accent}33`,
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }}
              transition={{
                duration: 2.8,
                delay: ring * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
          <motion.div
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#12141C]/90 border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: `${accent}66`, boxShadow: `0 0 24px ${accent}30` }}
          >
            <Icon className="w-7 h-7" style={{ color: accent }} />
          </motion.div>
        </div>
      )}

      {/* Mode 2: Animated Node-to-Hub Network (Tracking / Maps / Fleet) */}
      {mode === 'network' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-64 h-36 opacity-80" viewBox="0 0 260 140" fill="none">
            <motion.path
              d="M35 35 Q 90 70 130 70 M35 105 Q 90 70 130 70 M225 35 Q 170 70 130 70 M225 105 Q 170 70 130 70"
              stroke={accent}
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <motion.path
              d="M35 35 Q 90 70 130 70 M225 105 Q 170 70 130 70"
              stroke={secondary}
              strokeWidth="2"
              strokeDasharray="18 80"
              animate={{ strokeDashoffset: [98, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            {[
              [35, 35],
              [35, 105],
              [225, 35],
              [225, 105],
            ].map(([cx, cy], idx) => (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="4"
                fill={idx % 2 === 0 ? accent : secondary}
              />
            ))}
          </svg>
          <div
            className="absolute z-10 w-14 h-14 rounded-2xl bg-[#12141C]/95 border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: `${accent}66`, boxShadow: `0 0 24px ${accent}30` }}
          >
            <Icon className="w-7 h-7" style={{ color: accent }} />
          </div>
        </div>
      )}

      {/* Mode 3: Animated Mini Bento Dashboard Bars (SaaS / Enterprise) */}
      {mode === 'bars' && (
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="w-full max-w-[240px] rounded-2xl bg-[#12141C]/85 border border-white/10 p-3.5 shadow-xl backdrop-blur-md group-hover:border-[#E5A93B]/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
              <Icon className="w-4 h-4" style={{ color: accent }} />
            </div>
            <div className="flex items-end gap-2 h-14">
              {[45, 75, 55, 92, 68, 84, 60].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    background:
                      i % 2 === 0
                        ? `linear-gradient(to top, ${accent}55, ${accent})`
                        : `linear-gradient(to top, ${secondary}44, ${secondary})`,
                  }}
                  initial={{ height: `${h * 0.6}%` }}
                  animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.7}%`] }}
                  transition={{
                    duration: 2.6,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode 4: Orbiting Hub (AI / General) */}
      {mode === 'orbit' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-28 h-28 rounded-full border border-dashed relative flex items-center justify-center"
            style={{ borderColor: `${accent}55` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          >
            <span
              className="absolute -top-1.5 w-3 h-3 rounded-full shadow-md"
              style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            <span
              className="absolute -bottom-1.5 w-2.5 h-2.5 rounded-full"
              style={{ background: secondary, boxShadow: `0 0 10px ${secondary}` }}
            />
          </motion.div>
          <div
            className="absolute z-10 w-14 h-14 rounded-2xl bg-[#12141C]/95 border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: `${accent}66`, boxShadow: `0 0 24px ${accent}30` }}
          >
            <Icon className="w-7 h-7" style={{ color: accent }} />
          </div>
        </div>
      )}

      {/* Mode 5: Terminal Code Preview (NPM / Developer Tool) */}
      {mode === 'terminal' && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-[250px] rounded-2xl bg-[#0A0B0E]/90 border border-white/10 p-3.5 font-mono text-[11px] text-gray-300 shadow-xl group-hover:border-[#E5A93B]/40 transition-colors">
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-[#E5A93B]">
                <Terminal className="w-3.5 h-3.5" />
                <span>npm-registry</span>
              </div>
              <Icon className="w-3.5 h-3.5 text-[#00D2FF]" />
            </div>
            <div className="space-y-1">
              <div className="text-emerald-400">$ npm install @ankush/kit</div>
              <div className="text-gray-400">+ esbuild • tree-shakeable</div>
              <div className="flex items-center gap-1 text-[#00D2FF]">
                <span>✓ types ready</span>
                <span className="w-1.5 h-3 bg-[#00D2FF] animate-pulse inline-block" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 dark:from-[#0A0B0E] via-transparent to-transparent pointer-events-none" />

      {/* Top-Left Telemetry Pill */}
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0B0E]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-300">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
        <span>{badge}</span>
      </div>

      {/* Top-Right Category Badge */}
      {showCategory && (
        <span className="absolute top-3 right-3 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 dark:bg-[#0A0B0E]/80 backdrop-blur-md border border-slate-700 dark:border-white/15 text-[#E5A93B]">
          {project.category}
        </span>
      )}

      {/* Bottom-Left Metric Tag */}
      <span className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-wider uppercase text-gray-400">
        {metric}
      </span>
    </div>
  );
}
