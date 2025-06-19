import React, { forwardRef } from 'react';

interface CRTMonitorProps {
  canvasSize: { width: number; height: number };
  children: React.ReactNode;
}

const CRTMonitor = forwardRef<HTMLDivElement, CRTMonitorProps>(
  ({ canvasSize, children }, ref) => {
    return (
      <div 
        ref={ref}
        className="flex-1 relative flex items-center justify-center p-8"
      >
        {/* Monitor Bezel */}
        <div className="crt-monitor relative">
          {/* Monitor Frame */}
          <div className="crt-frame">
            {/* Screen Container with CRT Effects */}
            <div className="crt-screen-container">
              {children}
              
              {/* CRT Effects Overlay */}
              <div className="crt-effects">
                {/* Scanlines */}
                <div className="crt-scanlines"></div>
                
                {/* Screen Curvature Overlay */}
                <div className="crt-curve-overlay"></div>
                
                {/* Phosphor Glow */}
                <div className="crt-phosphor-glow"></div>
                
                {/* Flicker Effect */}
                <div className="crt-flicker"></div>
              </div>
            </div>
            
            {/* Monitor Brand Label */}
            <div className="crt-brand-label">
              <div className="text-gray-400 text-sm font-mono">RETRO-TRON 2000</div>
              <div className="flex gap-2 mt-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .crt-monitor {
            position: relative;
            max-width: 90vw;
            max-height: 70vh;
            aspect-ratio: 4/3;
          }

          .crt-frame {
            background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 
              inset 0 0 20px rgba(0,0,0,0.8),
              0 0 40px rgba(0,0,0,0.6),
              0 20px 40px rgba(0,0,0,0.4);
            position: relative;
            width: 100%;
            height: 100%;
          }

          .crt-frame::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background: linear-gradient(145deg, #333, #111);
            border-radius: 15px;
            z-index: -1;
          }

          .crt-screen-container {
            position: relative;
            width: 100%;
            height: 100%;
            background: #000;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 
              inset 0 0 30px rgba(0,0,0,0.9),
              inset 0 0 10px rgba(0,100,0,0.1);
          }

          .crt-effects {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 2;
            border-radius: 8px;
            overflow: hidden;
          }

          .crt-scanlines {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            );
            animation: scanlines 0.1s linear infinite;
          }

          .crt-curve-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              ellipse at center,
              transparent 50%,
              rgba(0,0,0,0.1) 70%,
              rgba(0,0,0,0.3) 100%
            );
          }

          .crt-phosphor-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              ellipse at center,
              rgba(0, 255, 0, 0.02) 0%,
              transparent 70%
            );
            animation: phosphor-glow 2s ease-in-out infinite alternate;
          }

          .crt-flicker {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.01);
            animation: flicker 0.15s linear infinite;
          }

          .crt-brand-label {
            position: absolute;
            bottom: 10px;
            right: 15px;
            text-align: center;
            background: rgba(0,0,0,0.8);
            padding: 4px 8px;
            border-radius: 4px;
            border: 1px solid #333;
          }

          @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
          }

          @keyframes phosphor-glow {
            0% { opacity: 0.8; }
            100% { opacity: 1; }
          }

          @keyframes flicker {
            0%, 98% { opacity: 1; }
            99% { opacity: 0.98; }
            100% { opacity: 1; }
          }

          /* Screen curvature effect */
          .crt-screen-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              ellipse at center,
              transparent 30%,
              rgba(0,0,0,0.05) 60%,
              rgba(0,0,0,0.2) 100%
            );
            z-index: 3;
            pointer-events: none;
            border-radius: 8px;
          }

          /* Subtle screen reflection */
          .crt-screen-container::after {
            content: '';
            position: absolute;
            top: 10%;
            left: 10%;
            width: 30%;
            height: 20%;
            background: linear-gradient(
              135deg,
              rgba(255,255,255,0.1) 0%,
              transparent 50%
            );
            z-index: 4;
            pointer-events: none;
            border-radius: 50%;
            filter: blur(10px);
          }
        `}</style>
      </div>
    );
  }
);

CRTMonitor.displayName = 'CRTMonitor';

export default CRTMonitor;