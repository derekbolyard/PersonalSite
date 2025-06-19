import React, { useState, useEffect } from 'react';
import TVStatic from './glitch/TVStatic';
import CRTEffects from './glitch/CRTEffects';
import ChannelStatic from './glitch/ChannelStatic';
import GlitchText from './glitch/GlitchText';
import ControlPanel from './glitch/ControlPanel';
import StatusDisplay from './glitch/StatusDisplay';
import MagnetDistortion from './glitch/MagnetDistortion';

export default function GlitchArt() {
  const [glitchIntensity, setGlitchIntensity] = useState(1);
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentText, setCurrentText] = useState('DIGITAL DREAMS');
  const [staticIntensity, setStaticIntensity] = useState(1); // Default to 100%
  const [magnetEffect, setMagnetEffect] = useState(false);
  const [channelStatic, setChannelStatic] = useState(false);
  const [scanlines, setScanlines] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const glitchTexts = [
    'DIGITAL DREAMS',
    'C0D3 P03TRY',
    'NEON NIGHTS',
    'CYBER PUNK',
    'MATRIX MODE',
    'GLITCH ART',
    'SIGNAL LOST',
    'NO SIGNAL',
    'PLEASE STAND BY'
  ];

  // Track mouse position for magnet effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setGlitchIntensity(Math.random() * 5 + 2);
        setCurrentText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
        
        setTimeout(() => setIsGlitching(false), 300);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setGlitchIntensity(Math.random() * 8 + 3);
    setCurrentText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    setTimeout(() => setIsGlitching(false), 400);
  };

  const toggleMagnetEffect = () => {
    setMagnetEffect(!magnetEffect);
  };

  const toggleChannelStatic = () => {
    setChannelStatic(!channelStatic);
    if (!channelStatic) {
      setCurrentText('NO SIGNAL');
    } else {
      setCurrentText('SIGNAL RESTORED');
    }
  };

  return (
    <div 
      className="min-h-screen bg-black overflow-hidden relative"
      style={{
        filter: magnetEffect ? 'url(#gravity-distort)' : 'none',
        transform: magnetEffect ? `perspective(1000px)` : 'none'
      }}
    >
      <TVStatic staticIntensity={staticIntensity} channelStatic={channelStatic} />

      {/* CRT Monitor Frame */}
      <div 
        className="absolute inset-8 border-8 border-gray-800 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-900 shadow-2xl"
        style={{
          transform: magnetEffect ? `
            perspective(1000px) 
            rotateX(${(mousePos.y - window.innerHeight/2) * 0.01}deg) 
            rotateY(${(mousePos.x - window.innerWidth/2) * 0.01}deg)
          ` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-4 border-4 border-gray-600 rounded-2xl bg-black overflow-hidden">
          
          <CRTEffects scanlines={scanlines} />

          {/* Main Content Area */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-full p-8">
            
            <ChannelStatic isVisible={channelStatic} />

            <GlitchText 
              text={currentText}
              isGlitching={isGlitching}
              glitchIntensity={glitchIntensity}
              magnetEffect={magnetEffect}
              channelStatic={channelStatic}
              mousePos={mousePos}
            />

            <ControlPanel 
              onGlitch={triggerGlitch}
              onToggleMagnet={toggleMagnetEffect}
              onToggleStatic={toggleChannelStatic}
              onToggleScanlines={() => setScanlines(!scanlines)}
              scanlines={scanlines}
              magnetEffect={magnetEffect}
              channelStatic={channelStatic}
              staticIntensity={staticIntensity}
              onStaticChange={setStaticIntensity}
            />

            <StatusDisplay 
              channelStatic={channelStatic}
              isGlitching={isGlitching}
              magnetEffect={magnetEffect}
            />
          </div>
        </div>

        {/* TV Brand Label */}
        <div className="absolute bottom-2 right-4 text-gray-400 text-xs font-mono">
          RETRO-VISION 2000
        </div>
      </div>

      <MagnetDistortion isActive={magnetEffect} mousePos={mousePos} />

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes static-noise {
          0% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(2px); }
          30% { transform: translateX(-1px); }
          40% { transform: translateX(1px); }
          50% { transform: translateX(-2px); }
          60% { transform: translateX(2px); }
          70% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          90% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        @keyframes glitch-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.1; }
        }

        /* CRT Screen glow effect */
        .absolute.inset-8::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 255, 0, 0.1) 0%,
            transparent 70%
          );
          z-index: -1;
          animation: crt-glow 2s ease-in-out infinite alternate;
        }

        @keyframes crt-glow {
          0% { opacity: 0.5; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}