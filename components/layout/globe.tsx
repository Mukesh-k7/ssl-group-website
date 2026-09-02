import React from 'react';
import Image from 'next/image';
import globeImg from '@/public/Earth.png'; // Ensure Earth.png is in your /public folder

export default function GlobeIcon() {
  return (
    /* No dark background wrapper—this allows it to sit cleanly on your white header */
    <div className="flex items-center justify-center">
      {/* Icon Container matched to standard global navbar icon size (approx 28px to 32px) */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,180,216,0.4)] border border-cyan-400/30">
        
        {/* Continuous Slow Rotating Earth Image */}
        <Image
          src={globeImg}
          alt="Global Presence"
          className="w-full h-full object-cover animate-spin-slow scale-105"
          priority
        />

        {/* 3D Sphere Overlay tweaked for bright/light background blending */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />
      </div>
    </div>
  );
}