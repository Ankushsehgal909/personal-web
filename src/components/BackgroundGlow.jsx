import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Gold Anamorphic Halo */}
      <motion.div 
        className="bg-light-flare"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '-15%',
          left: '20%',
          width: '55vw',
          height: '55vw',
          background: 'radial-gradient(circle, rgba(229, 169, 59, 0.18) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />
      
      {/* Mid Cyan Ambient Lens Flare */}
      <motion.div 
        className="bg-light-flare"
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '35%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />

      {/* Bottom Amber Depth Glow */}
      <motion.div 
        className="bg-light-flare"
        animate={{
          x: [0, 25, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(229, 169, 59, 0.12) 0%, rgba(10, 11, 14, 0) 70%)',
        }}
      />

      {/* Radial-Masked Architectural Dot & Grid Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.12] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_30%,transparent_100%)]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(229, 169, 59, 0.45) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
    </div>
  );
}
