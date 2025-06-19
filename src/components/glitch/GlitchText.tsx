import React from 'react';

interface GlitchTextProps {
  text: string;
  isGlitching: boolean;
  glitchIntensity: number;
  magnetEffect: boolean;
  channelStatic: boolean;
  mousePos: { x: number; y: number };
}

export default function GlitchText({ 
  text, 
  isGlitching, 
  glitchIntensity, 
  magnetEffect, 
  channelStatic,
  mousePos
}: GlitchTextProps) {
  const calculateMagnetDistortion = () => {
    if (!magnetEffect) return {};
    
    // Get the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate distance from mouse to center
    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Maximum distance for effect (screen diagonal)
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    
    // Normalize distance (0 = at mouse, 1 = far from mouse)
    const normalizedDistance = Math.min(distance / (maxDistance * 0.3), 1);
    
    // Invert so closer = stronger effect (gravity-like)
    const intensity = (1 - normalizedDistance) * 25; // Increased intensity
    
    // Calculate angle from center to mouse
    const angle = Math.atan2(dy, dx);
    
    // Create stronger gravitational distortion
    const skewX = Math.cos(angle) * intensity * 0.8;
    const skewY = Math.sin(angle) * intensity * 0.4;
    
    // Scale effect - text gets "stretched" towards mouse
    const scaleX = 1 + (intensity * 0.15);
    const scaleY = 1 + (intensity * 0.08);
    
    // Translate towards mouse position (gravity pull)
    const pullStrength = intensity * 0.05;
    const translateX = dx * pullStrength;
    const translateY = dy * pullStrength;
    
    // Add perspective distortion for 3D effect
    const perspective = 1000 - (intensity * 20);
    const rotateX = (dy / centerY) * intensity * 0.5;
    const rotateY = (dx / centerX) * intensity * 0.3;
    
    return {
      transform: `
        perspective(${perspective}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translate(${translateX}px, ${translateY}px) 
        skew(${skewX}deg, ${skewY}deg) 
        scale(${scaleX}, ${scaleY})
      `,
      filter: `
        hue-rotate(${intensity * 30}deg) 
        saturate(${1 + intensity * 0.3}) 
        blur(${intensity * 0.3}px)
        brightness(${1 + intensity * 0.1})
      `,
      textShadow: `
        ${intensity * 0.8}px 0 #ff0000, 
        -${intensity * 0.8}px 0 #00ffff, 
        0 ${intensity * 0.8}px #ffff00, 
        0 -${intensity * 0.8}px #ff00ff,
        ${intensity * 1.5}px ${intensity * 1.5}px 30px rgba(255, 0, 255, 0.6),
        ${intensity * 2}px ${intensity * 2}px 50px rgba(0, 255, 255, 0.4)
      `,
      transition: 'all 0.1s ease-out'
    };
  };

  const getTextStyle = () => {
    if (magnetEffect) {
      return calculateMagnetDistortion();
    }
    
    if (isGlitching) {
      return {
        textShadow: `${glitchIntensity}px 0 #ff0000, -${glitchIntensity}px 0 #00ffff, 0 0 20px #ff00ff`,
        transform: `translate(${glitchIntensity}px, ${glitchIntensity/2}px) skew(${glitchIntensity}deg)`
      };
    }
    
    return {
      textShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
    };
  };

  return (
    <div className="text-center mb-12">
      <h1 
        className={`text-6xl md:text-8xl font-bold mb-8 font-mono select-none transition-all duration-100 ${
          isGlitching ? 'text-red-400' : channelStatic ? 'text-white' : 'text-green-400'
        }`}
        style={getTextStyle()}
      >
        {text}
      </h1>
      
      <div 
        className="text-xl md:text-2xl text-cyan-400 font-mono mb-8"
        style={magnetEffect ? calculateMagnetDistortion() : {}}
      >
        <span className="animate-pulse">&gt;</span> 
        {channelStatic ? ' SIGNAL INTERFERENCE DETECTED ' : magnetEffect ? ' MAGNETIC FIELD ACTIVE ' : ' RETRO TV EXPERIENCE '} 
        <span className="animate-pulse">&lt;</span>
      </div>
    </div>
  );
}