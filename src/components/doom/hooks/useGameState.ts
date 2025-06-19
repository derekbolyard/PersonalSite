import { useState, useCallback } from 'react';
import { Player, Enemy, Projectile, HitMarker } from '../types';

export function useGameState() {
  const [player, setPlayer] = useState<Player>({
    x: 150,
    y: 150,
    angle: 0,
    health: 100,
    ammo: 50,
    weapon: 'pistol'
  });
  
  const [enemies, setEnemies] = useState<Enemy[]>([
    { x: 400, y: 300, health: 30, maxHealth: 30, type: 'imp', angle: 0, lastShot: 0, id: 1, hitFlash: 0 },
    { x: 600, y: 500, health: 50, maxHealth: 50, type: 'demon', angle: 0, lastShot: 0, id: 2, hitFlash: 0 },
    { x: 800, y: 200, health: 40, maxHealth: 40, type: 'soldier', angle: 0, lastShot: 0, id: 3, hitFlash: 0 }
  ]);
  
  const [projectiles, setProjectiles] = useState<Projectile[]>([]);
  const [hitMarkers, setHitMarkers] = useState<HitMarker[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerHitFlash, setPlayerHitFlash] = useState(0);
  const [armor, setArmor] = useState(0);
  const [isShooting, setIsShooting] = useState(false);
  const [muzzleFlash, setMuzzleFlash] = useState(false);

  const resetGame = useCallback(() => {
    setPlayer({ x: 150, y: 150, angle: 0, health: 100, ammo: 50, weapon: 'pistol' });
    setScore(0);
    setArmor(0);
    setEnemies([
      { x: 400, y: 300, health: 30, maxHealth: 30, type: 'imp', angle: 0, lastShot: 0, id: 1, hitFlash: 0 },
      { x: 600, y: 500, health: 50, maxHealth: 50, type: 'demon', angle: 0, lastShot: 0, id: 2, hitFlash: 0 },
      { x: 800, y: 200, health: 40, maxHealth: 40, type: 'soldier', angle: 0, lastShot: 0, id: 3, hitFlash: 0 }
    ]);
    setProjectiles([]);
    setHitMarkers([]);
    setPlayerHitFlash(0);
  }, []);

  const spawnNextWave = useCallback(() => {
    setEnemies([
      { x: 300, y: 400, health: 40, maxHealth: 40, type: 'imp', angle: 0, lastShot: 0, id: Date.now() + 1, hitFlash: 0 },
      { x: 700, y: 300, health: 60, maxHealth: 60, type: 'demon', angle: 0, lastShot: 0, id: Date.now() + 2, hitFlash: 0 },
      { x: 500, y: 600, health: 50, maxHealth: 50, type: 'soldier', angle: 0, lastShot: 0, id: Date.now() + 3, hitFlash: 0 },
      { x: 200, y: 200, health: 35, maxHealth: 35, type: 'imp', angle: 0, lastShot: 0, id: Date.now() + 4, hitFlash: 0 }
    ]);
    setPlayer(prev => ({ ...prev, ammo: 50 }));
  }, []);

  return {
    // State
    player,
    enemies,
    projectiles,
    hitMarkers,
    score,
    gameStarted,
    playerHitFlash,
    armor,
    isShooting,
    muzzleFlash,
    
    // Setters
    setPlayer,
    setEnemies,
    setProjectiles,
    setHitMarkers,
    setScore,
    setGameStarted,
    setPlayerHitFlash,
    setArmor,
    setIsShooting,
    setMuzzleFlash,
    
    // Actions
    resetGame,
    spawnNextWave
  };
}