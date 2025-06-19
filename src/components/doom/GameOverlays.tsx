import React from 'react';
import { Player, Enemy } from './types';

interface GameOverlaysProps {
  player: Player;
  enemies: Enemy[];
  score: number;
  onNextWave: () => void;
}

export default function GameOverlays({ player, enemies, score, onNextWave }: GameOverlaysProps) {
  return (
    <>
      {/* Low ammo warning */}
      {player.ammo <= 5 && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-3xl sm:text-5xl font-bold text-red-400 animate-bounce z-30">
          ⚠️ LOW AMMO! ⚠️
        </div>
      )}
      
      {/* Victory condition */}
      {enemies.length === 0 && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-40">
          <div className="text-center">
            <h1 className="text-6xl sm:text-8xl font-bold text-green-400 mb-6 animate-pulse">
              🎉 VICTORY! 🎉
            </h1>
            <p className="text-2xl sm:text-3xl text-white mb-6">
              All demons eliminated!
            </p>
            <p className="text-xl sm:text-2xl text-yellow-400 mb-8">
              🏆 Final Score: {score} 🏆
            </p>
            <button
              onClick={onNextWave}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg sm:text-xl font-bold hover:from-green-700 hover:to-green-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              🔄 NEXT WAVE 🔄
            </button>
          </div>
        </div>
      )}
    </>
  );
}