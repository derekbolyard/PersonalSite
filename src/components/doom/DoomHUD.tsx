import React from 'react';
import { Player, Enemy } from './types';

interface DoomHUDProps {
  player: Player;
  enemies: Enemy[];
  score: number;
  armor: number;
}

export default function DoomHUD({ player, enemies, score, armor }: DoomHUDProps) {
  return (
    <div className="h-32 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 border-t-4 border-amber-600 flex items-center font-mono text-white shadow-2xl relative flex-shrink-0">
      {/* HUD Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          rgba(0,0,0,0.1) 2px,
          rgba(0,0,0,0.1) 4px
        )`
      }}></div>
      
      <div className="relative z-10 w-full px-4 sm:px-8 flex items-center justify-between">
        {/* Left Section - Doomguy Face & Health */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Doomguy Face */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-amber-600 to-amber-800 border-4 border-amber-900 flex items-center justify-center text-2xl sm:text-3xl relative">
            <div className="absolute inset-1 bg-gradient-to-b from-amber-500 to-amber-700 flex items-center justify-center">
              {player.health > 75 ? '😎' :
               player.health > 50 ? '😐' :
               player.health > 25 ? '😰' : '🤕'}
            </div>
          </div>
          
          {/* Health Display */}
          <div className="text-center">
            <div className="text-sm sm:text-lg font-bold text-amber-200 mb-1">HEALTH</div>
            <div className={`text-2xl sm:text-4xl font-bold ${
              player.health > 75 ? 'text-green-400' :
              player.health > 50 ? 'text-yellow-400' :
              player.health > 25 ? 'text-orange-400' :
              'text-red-400'
            }`}>
              {player.health}%
            </div>
          </div>

          {/* Armor Display */}
          <div className="text-center">
            <div className="text-sm sm:text-lg font-bold text-amber-200 mb-1">ARMOR</div>
            <div className="text-2xl sm:text-4xl font-bold text-blue-400">
              {armor}%
            </div>
          </div>
        </div>

        {/* Center Section - Ammo & Weapon */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Ammo Display */}
          <div className="text-center">
            <div className="text-sm sm:text-lg font-bold text-amber-200 mb-1">AMMO</div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className={`text-2xl sm:text-4xl font-bold ${
                player.ammo > 20 ? 'text-cyan-400' :
                player.ammo > 10 ? 'text-yellow-400' :
                'text-red-400'
              }`}>
                {player.ammo}
              </div>
              <div className="text-lg sm:text-2xl text-amber-300">/</div>
              <div className="text-lg sm:text-2xl text-amber-300">200</div>
            </div>
          </div>

          {/* Weapon Keys Display */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
            <div className="text-xs sm:text-sm text-amber-200">2 3 4</div>
            <div className="text-xs sm:text-sm text-amber-200">5 6 7</div>
            <div className="text-xs sm:text-sm text-amber-200"></div>
            <div className={`text-sm sm:text-lg font-bold ${player.weapon === 'pistol' ? 'text-yellow-400' : 'text-amber-400'}`}>
              {player.weapon === 'pistol' ? '●' : '○'}
            </div>
            <div className={`text-sm sm:text-lg font-bold ${player.weapon === 'shotgun' ? 'text-yellow-400' : 'text-amber-400'}`}>
              {player.weapon === 'shotgun' ? '●' : '○'}
            </div>
            <div className={`text-sm sm:text-lg font-bold ${player.weapon === 'chaingun' ? 'text-yellow-400' : 'text-amber-400'}`}>
              {player.weapon === 'chaingun' ? '●' : '○'}
            </div>
          </div>
        </div>

        {/* Right Section - Keys & Stats */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Key Cards */}
          <div className="flex flex-col gap-1">
            <div className="w-5 h-6 sm:w-6 sm:h-8 bg-blue-600 border border-blue-800 flex items-center justify-center text-xs font-bold">B</div>
            <div className="w-5 h-6 sm:w-6 sm:h-8 bg-yellow-600 border border-yellow-800 flex items-center justify-center text-xs font-bold">Y</div>
            <div className="w-5 h-6 sm:w-6 sm:h-8 bg-red-600 border border-red-800 flex items-center justify-center text-xs font-bold">R</div>
          </div>

          {/* Score & Stats */}
          <div className="text-right">
            <div className="text-sm sm:text-lg font-bold text-amber-200 mb-1">FRAGS</div>
            <div className="text-xl sm:text-3xl font-bold text-yellow-400">
              {Math.floor(score / 100)}
            </div>
            <div className="text-xs sm:text-sm text-amber-300 mt-1">
              DEMONS: {enemies.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}