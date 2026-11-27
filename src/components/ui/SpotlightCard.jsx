import React, { useRef, useState } from 'react';

/**
 * 21st.dev-inspired cursor-tracking SpotlightCard.
 * Renders a subtle radial glow that follows the pointer across the card surface
 * while preserving glassmorphism and dark/light theme compatibility.
 */
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(229, 169, 59, 0.16)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Cursor-tracking radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
