import React from 'react';

interface MagnetDistortionProps {
  isActive: boolean;
  mousePos: { x: number; y: number };
}

export default function MagnetDistortion({ isActive, mousePos }: MagnetDistortionProps) {
  if (!isActive) return null;

  // Create multiple distortion rings around the mouse
  const rings = Array.from({ length: 5 }, (_, i) => {
    const size = 100 + (i * 80);
    const opacity = 0.3 - (i * 0.05);
    const blur = 2 + (i * 2);
    
    return (
      <div
        key={i}
        className="absolute pointer-events-none animate-pulse"
        style={{
          left: mousePos.x - size / 2,
          top: mousePos.y - size / 2,
          width: size,
          height: size,
          background: `radial-gradient(circle, 
            rgba(255, 0, 0, ${opacity}) 0%, 
            rgba(0, 255, 255, ${opacity * 0.7}) 30%, 
            rgba(255, 255, 0, ${opacity * 0.5}) 60%, 
            transparent 100%
          )`,
          borderRadius: '50%',
          filter: `blur(${blur}px)`,
          animation: `magnet-pulse ${1 + i * 0.2}s ease-in-out infinite alternate`,
          zIndex: 50 - i
        }}
      />
    );
  });

  // Calculate screen warp CSS filter
  const generateScreenWarp = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Normalize mouse position to screen center (-1 to 1)
    const normalizedX = (mousePos.x - centerX) / centerX;
    const normalizedY = (mousePos.y - centerY) / centerY;
    
    // Create distortion strength based on distance from center
    const distance = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY);
    const strength = Math.max(0, 1 - distance) * 15; // Max 15px distortion
    
    // Generate multiple distortion points for a more complex warp
    const warpPoints = [];
    const gridSize = 8;
    
    for (let x = 0; x <= gridSize; x++) {
      for (let y = 0; y <= gridSize; y++) {
        const gridX = (x / gridSize) * 100;
        const gridY = (y / gridSize) * 100;
        
        // Calculate distance from this grid point to mouse
        const pointX = (x / gridSize) * window.innerWidth;
        const pointY = (y / gridSize) * window.innerHeight;
        const distToMouse = Math.sqrt(
          Math.pow(pointX - mousePos.x, 2) + Math.pow(pointY - mousePos.y, 2)
        );
        
        // Maximum influence distance
        const maxInfluence = 300;
        const influence = Math.max(0, 1 - (distToMouse / maxInfluence));
        
        // Calculate warp direction (towards mouse)
        const angle = Math.atan2(mousePos.y - pointY, mousePos.x - pointX);
        const warpStrength = influence * 8; // Max 8px warp per point
        
        const warpedX = gridX + Math.cos(angle) * warpStrength * 0.1;
        const warpedY = gridY + Math.sin(angle) * warpStrength * 0.1;
        
        warpPoints.push(`${warpedX}% ${warpedY}%`);
      }
    }
    
    return warpPoints.join(', ');
  };

  return (
    <>
      {/* Screen Warp Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
            transparent 0%, 
            rgba(255, 0, 255, 0.02) 20%, 
            rgba(0, 255, 255, 0.02) 40%, 
            transparent 60%
          )`,
          filter: `url(#warp-filter)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* SVG Filter for Advanced Warping */}
      <svg className="absolute inset-0 pointer-events-none" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="warp-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur"/>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blur" 
              scale="10"
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
          
          <filter id="gravity-distort" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              baseFrequency="0.02" 
              numOctaves="3" 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale={`${Math.sqrt(Math.pow(mousePos.x - window.innerWidth/2, 2) + Math.pow(mousePos.y - window.innerHeight/2, 2)) / 50}`}
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 pointer-events-none z-50">
        {rings}
        
        {/* Central magnetic field indicator */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: mousePos.x - 20,
            top: mousePos.y - 20,
            width: 40,
            height: 40,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            animation: 'magnet-core 0.5s ease-in-out infinite alternate',
            zIndex: 55
          }}
        />
        
        {/* Gravitational Field Lines */}
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const baseLength = 200;
          const waveOffset = Math.sin(Date.now() * 0.005 + i) * 30;
          const length = baseLength + waveOffset;
          
          return (
            <div
              key={`field-line-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                width: 3,
                height: length,
                background: `linear-gradient(to bottom, 
                  rgba(255, 0, 255, 0.8) 0%, 
                  rgba(0, 255, 255, 0.6) 30%,
                  rgba(255, 255, 0, 0.4) 60%, 
                  transparent 100%
                )`,
                transformOrigin: 'top center',
                transform: `rotate(${angle}rad) scale(${1 + Math.sin(Date.now() * 0.003 + i) * 0.2})`,
                animation: `field-line ${0.8 + (i * 0.05)}s ease-in-out infinite alternate`,
                zIndex: 51,
                borderRadius: '50px'
              }}
            />
          );
        })}

        {/* Gravity Wells - Concentric circles showing gravitational effect */}
        {Array.from({ length: 8 }, (_, i) => {
          const radius = 50 + (i * 40);
          const opacity = 0.4 - (i * 0.04);
          
          return (
            <div
              key={`gravity-well-${i}`}
              className="absolute pointer-events-none border-2 rounded-full"
              style={{
                left: mousePos.x - radius,
                top: mousePos.y - radius,
                width: radius * 2,
                height: radius * 2,
                borderColor: `rgba(255, 0, 255, ${opacity})`,
                borderStyle: 'dashed',
                animation: `gravity-well ${2 + i * 0.3}s linear infinite`,
                zIndex: 49
              }}
            />
          );
        })}

        {/* Particle Attraction Effect */}
        {Array.from({ length: 20 }, (_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const distance = 150 + Math.sin(Date.now() * 0.002 + i) * 50;
          const x = mousePos.x + Math.cos(angle) * distance;
          const y = mousePos.y + Math.sin(angle) * distance;
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute pointer-events-none w-2 h-2 rounded-full"
              style={{
                left: x,
                top: y,
                background: `hsl(${(i * 18) % 360}, 100%, 60%)`,
                boxShadow: `0 0 10px hsl(${(i * 18) % 360}, 100%, 60%)`,
                animation: `particle-orbit ${3 + i * 0.1}s linear infinite`,
                zIndex: 52
              }}
            />
          );
        })}
      </div>

      <style jsx>{`
        @keyframes magnet-pulse {
          0% { 
            transform: scale(0.8) rotate(0deg);
            opacity: 0.3;
          }
          100% { 
            transform: scale(1.2) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes magnet-core {
          0% { 
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% { 
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes field-line {
          0% { 
            opacity: 0.3;
            transform: rotate(var(--angle)) scale(0.8);
          }
          100% { 
            opacity: 0.8;
            transform: rotate(var(--angle)) scale(1.2);
          }
        }

        @keyframes gravity-well {
          0% { 
            transform: scale(0.5) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1) rotate(180deg);
            opacity: 0.3;
          }
          100% { 
            transform: scale(1.5) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes particle-orbit {
          0% { 
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% { 
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
}