import React from 'react';
import { Zap, Monitor, Signal, Tv, Radio } from 'lucide-react';

interface ControlPanelProps {
  onGlitch: () => void;
  onToggleMagnet: () => void;
  onToggleStatic: () => void;
  onToggleScanlines: () => void;
  scanlines: boolean;
  magnetEffect: boolean;
  channelStatic: boolean;
  staticIntensity: number;
  onStaticChange: (value: number) => void;
}

export default function ControlPanel({
  onGlitch,
  onToggleMagnet,
  onToggleStatic,
  onToggleScanlines,
  scanlines,
  magnetEffect,
  channelStatic,
  staticIntensity,
  onStaticChange
}: ControlPanelProps) {
  return (
    <>
      {/* Control Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={onGlitch}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-mono hover:bg-red-700 transition-colors border-2 border-red-800"
        >
          <Zap className="w-4 h-4" />
          GLITCH
        </button>
        
        <button
          onClick={onToggleMagnet}
          className={`flex items-center gap-2 px-4 py-2 font-mono transition-colors border-2 ${
            magnetEffect 
              ? 'bg-purple-600 text-white border-purple-800 hover:bg-purple-700 animate-pulse' 
              : 'bg-gray-600 text-white border-gray-800 hover:bg-gray-700'
          }`}
        >
          <Monitor className="w-4 h-4" />
          MAGNET {magnetEffect ? 'ON' : 'OFF'}
        </button>
        
        <button
          onClick={onToggleStatic}
          className={`flex items-center gap-2 px-4 py-2 font-mono transition-colors border-2 ${
            channelStatic 
              ? 'bg-gray-600 text-white border-gray-800 hover:bg-gray-700 animate-pulse' 
              : 'bg-gray-600 text-white border-gray-800 hover:bg-gray-700'
          }`}
        >
          <Signal className="w-4 h-4" />
          STATIC {channelStatic ? 'ON' : 'OFF'}
        </button>
        
        <button
          onClick={onToggleScanlines}
          className={`flex items-center gap-2 px-4 py-2 font-mono transition-colors border-2 ${
            scanlines 
              ? 'bg-green-600 text-white border-green-800 hover:bg-green-700' 
              : 'bg-gray-600 text-white border-gray-800 hover:bg-gray-700'
          }`}
        >
          <Tv className="w-4 h-4" />
          SCAN {scanlines ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Static Intensity Control */}
      <div className="flex items-center gap-4 mb-8 bg-black/50 px-4 py-2 rounded border border-green-500">
        <Radio className="w-4 h-4 text-green-400" />
        <span className="text-green-400 font-mono text-sm">STATIC:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={staticIntensity}
          onChange={(e) => onStaticChange(parseFloat(e.target.value))}
          className="w-24 accent-green-400"
        />
        <span className="text-green-400 font-mono text-sm">{Math.round(staticIntensity * 100)}%</span>
      </div>
    </>
  );
}