import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-red-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-8 font-mono drop-shadow-lg animate-pulse">
          DOOM
        </h1>
        <p className="text-4xl text-orange-400 mb-4 font-bold">
          🔥 HELL ON EARTH 🔥
        </p>
        <p className="text-2xl text-gray-300 mb-8">
          Survive the demon invasion
        </p>
        <button
          onClick={onStart}
          className="px-16 py-8 bg-gradient-to-r from-red-600 to-red-800 text-white text-3xl font-bold hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 shadow-2xl border-4 border-red-400"
        >
          🎯 START MASSACRE 🎯
        </button>
        <div className="mt-16 text-gray-300 space-y-3 text-lg">
          <p className="text-2xl text-yellow-400">🎮 CONTROLS:</p>
          <p><strong>W/S or ↑/↓</strong> → Move Forward/Backward</p>
          <p><strong>A/D or ←/→</strong> → Turn Left/Right</p>
          <p><strong>SPACEBAR or CLICK</strong> → Shoot</p>
          <p className="text-xl text-red-400 mt-6">💀 Kill all demons to survive! 💀</p>
        </div>
      </div>
    </div>
  );
}

export function GameOverScreen({ score, onRestart }: GameOverScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-red-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-400 mb-8 animate-pulse">
          💀 YOU DIED 💀
        </h1>
        <p className="text-3xl text-gray-300 mb-4">
          The demons have claimed another soul...
        </p>
        <p className="text-2xl text-yellow-400 mb-8">
          🏆 Final Score: {score} 🏆
        </p>
        <button
          onClick={onRestart}
          className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 text-white text-2xl font-bold hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 shadow-2xl"
        >
          🔄 RESPAWN 🔄
        </button>
      </div>
    </div>
  );
}