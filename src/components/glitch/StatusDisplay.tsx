import React from 'react';
import { Wifi } from 'lucide-react';

interface StatusDisplayProps {
  channelStatic: boolean;
  isGlitching: boolean;
  magnetEffect: boolean;
}

export default function StatusDisplay({ channelStatic, isGlitching, magnetEffect }: StatusDisplayProps) {
  return (
    <>
      {/* Retro TV ASCII Art */}
      <div className="font-mono text-green-400 text-xs leading-tight mb-8 text-center opacity-60">
        <pre>
{`    ╔══════════════════════════════════════╗
    ║  📺  RETRO-VISION 2000  📺          ║
    ║     CHANNEL: GLITCH-NET              ║
    ║     STATUS: ${channelStatic ? 'NO SIGNAL' : 'RECEIVING'}              ║
    ╚══════════════════════════════════════╝`}
        </pre>
      </div>

      {/* Status Indicators */}
      <div className="flex items-center gap-6 text-green-400 font-mono text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${channelStatic ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
          SIGNAL: {channelStatic ? 'LOST' : 'STRONG'}
        </div>
        <div>|</div>
        <div>STATUS: {isGlitching ? 'GLITCHING' : magnetEffect ? 'MAGNETIC INTERFERENCE' : 'STABLE'}</div>
        <div>|</div>
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4" />
          FREQ: 13.37 MHz
        </div>
      </div>
    </>
  );
}