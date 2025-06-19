import React from 'react';

interface CRTEffectsProps {
  scanlines: boolean;
}

export default function CRTEffects({ scanlines }: CRTEffectsProps) {
  return (
    <>
      {/* Scanlines */}
      {scanlines && (
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            )`,
            animation: 'scanlines 0.1s linear infinite'
          }}
        />
      )}

      {/* Screen Curvature Effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 60%,
            rgba(0,0,0,0.3) 100%
          )`
        }}
      />
    </>
  );
}