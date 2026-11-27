import React from 'react';

/**
 * 21st.dev-inspired BorderBeam effect.
 * Renders an animated light beam traveling along the container border.
 */
export function BorderBeam({
  className = '',
  duration = 10,
  colorFrom = '#E5A93B',
  colorTo = '#00D2FF',
  borderWidth = 1.5,
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
      style={{
        padding: `${borderWidth}px`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    >
      <div
        className="absolute inset-[-100%] animate-border-beam"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg 260deg, ${colorFrom} 300deg, ${colorTo} 340deg, transparent 360deg)`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
}
