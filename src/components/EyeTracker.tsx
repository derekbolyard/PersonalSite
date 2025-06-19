import React, { useState, useEffect, useRef } from 'react';

interface EyeProps {
  size?: number;
  className?: string;
}

const Eye: React.FC<EyeProps> = ({ size = 100, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const eyeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates using requestAnimationFrame
      if (animationRef.current) return;
      
      animationRef.current = requestAnimationFrame(() => {
        if (eyeRef.current) {
          const rect = eyeRef.current.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;
          
          const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
          const distance = Math.min(size * 0.2, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) * 0.1);
          
          setMousePos({
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance
          });
        }
        animationRef.current = undefined;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size]);

  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      // Random chance to blink (about every 3-6 seconds)
      if (Math.random() < 0.3) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150); // Blink duration
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      ref={eyeRef}
      className={`relative bg-white rounded-full border-4 border-gray-800 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Eyelid for blinking effect */}
      <div
        className={`absolute inset-0 bg-gray-800 rounded-full transition-transform duration-150 ease-out ${
          isBlinking ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{
          transformOrigin: 'center',
          zIndex: 10
        }}
      />
      
      {/* Eye iris and pupil */}
      <div
        className={`absolute bg-blue-600 rounded-full transition-transform duration-75 ease-out ${
          isBlinking ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          width: size * 0.6,
          height: size * 0.6,
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
        }}
      >
        {/* Pupil */}
        <div
          className="absolute bg-black rounded-full"
          style={{
            width: size * 0.3,
            height: size * 0.3,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Light reflection */}
          <div
            className="absolute bg-white rounded-full"
            style={{
              width: size * 0.1,
              height: size * 0.1,
              left: '30%',
              top: '30%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function EyeTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          👁️ Eye Tracker 👁️
        </h1>
        <p className="text-xl text-gray-300 mb-12">Move your mouse around and watch the eyes follow! They even blink occasionally.</p>
        
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <Eye size={120} />
          <Eye size={80} />
          <Eye size={150} />
          <Eye size={100} />
          <Eye size={90} />
        </div>
        
        <div className="mt-16">
          <div className="flex justify-center gap-4">
            <Eye size={60} />
            <Eye size={60} />
          </div>
          <div className="w-32 h-16 bg-pink-500 rounded-full mx-auto mt-4 relative">
            <div className="absolute inset-0 bg-red-600 rounded-full transform scale-75 top-2"></div>
          </div>
        </div>
        
        <div className="mt-12 text-gray-400 text-sm">
          <p>✨ Each eye blinks independently at random intervals</p>
          <p>👀 Natural blinking patterns for a more lifelike experience</p>
        </div>
      </div>
    </div>
  );
}