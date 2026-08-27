import React from 'react';

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Gold Anamorphic Halo */}
      <div 
        className="bg-light-flare"
        style={{
          top: '-15%',
          left: '20%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(229, 169, 59, 0.15) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />
      
      {/* Mid Cyan Ambient Lens Flare */}
      <div 
        className="bg-light-flare"
        style={{
          top: '35%',
          right: '-10%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />

      {/* Bottom Amber Depth Glow */}
      <div 
        className="bg-light-flare"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(229, 169, 59, 0.1) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />

      {/* Subtle Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
