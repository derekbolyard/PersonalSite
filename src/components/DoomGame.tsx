import React, { useRef, useEffect, useCallback, useState } from 'react';
import { updatePlayerMovement, updateProjectiles, updateEnemyAI } from './doom/gameLogic';
import { render } from './doom/renderer';
import { useGameState } from './doom/hooks/useGameState';
import { StartScreen, GameOverScreen } from './doom/GameScreens';
import CRTMonitor from './doom/CRTMonitor';
import DoomHUD from './doom/DoomHUD';
import GameOverlays from './doom/GameOverlays';
import WIPSign from './doom/WIPSign';
import { useAudio } from '../hooks/useAudio';
import { Projectile } from './doom/types';

export default function DoomGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1200, height: 600 });
  const [keys, setKeys] = useState<Set<string>>(new Set());
  const [wipSignMounted, setWipSignMounted] = useState(false);
  const { playDoomShotgun } = useAudio();

  const {
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
    setPlayer,
    setEnemies,
    setProjectiles,
    setHitMarkers,
    setScore,
    setGameStarted,
    setPlayerHitFlash,
    setIsShooting,
    setMuzzleFlash,
    resetGame,
    spawnNextWave
  } = useGameState();

  // Mount the WIP sign when game starts
  useEffect(() => {
    if (gameStarted) {
      setWipSignMounted(true);
    } else {
      setWipSignMounted(false);
    }
  }, [gameStarted]);

  // Handle canvas resizing
  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth - 80;
        const containerHeight = container.clientHeight - 80;
        
        const targetAspectRatio = 4 / 3;
        let canvasWidth = containerWidth;
        let canvasHeight = containerWidth / targetAspectRatio;
        
        if (canvasHeight > containerHeight) {
          canvasHeight = containerHeight;
          canvasWidth = containerHeight * targetAspectRatio;
        }
        
        const minWidth = 800;
        const minHeight = 600;
        
        if (canvasWidth < minWidth) {
          canvasWidth = minWidth;
          canvasHeight = minWidth / targetAspectRatio;
        }
        
        if (canvasHeight < minHeight) {
          canvasHeight = minHeight;
          canvasWidth = minHeight * targetAspectRatio;
        }
        
        setCanvasSize({
          width: Math.floor(canvasWidth),
          height: Math.floor(canvasHeight)
        });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [gameStarted]);

  const shoot = useCallback(() => {
    if (player.ammo <= 0) return;
    
    setIsShooting(true);
    setMuzzleFlash(true);
    
    // Play shotgun sound effect
    try {
      playDoomShotgun();
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
    
    setTimeout(() => {
      setIsShooting(false);
      setMuzzleFlash(false);
    }, 250);
    
    const weaponDamage = player.weapon === 'shotgun' ? 45 : player.weapon === 'chaingun' ? 30 : 35;
    
    const newProjectile: Projectile = {
      x: player.x,
      y: player.y,
      angle: player.angle,
      speed: 25,
      damage: weaponDamage,
      id: Date.now(),
      fromPlayer: true
    };
    
    setProjectiles(prev => [...prev, newProjectile]);
    setPlayer(prev => ({ ...prev, ammo: prev.ammo - 1 }));
  }, [player.ammo, player.weapon, player.x, player.y, player.angle, setProjectiles, setPlayer, setIsShooting, setMuzzleFlash, playDoomShotgun]);

  const handleEnemyHit = useCallback((enemyId: number, damage: number, x: number, y: number) => {
    setHitMarkers(prev => [...prev, {
      x: canvasSize.width / 2 + (Math.random() - 0.5) * 200,
      y: canvasSize.height / 2 + (Math.random() - 0.5) * 200,
      damage,
      time: Date.now(),
      id: Date.now()
    }]);
    
    setEnemies(prev => {
      const updatedEnemies = prev.map(enemy => {
        if (enemy.id === enemyId) {
          const newHealth = Math.max(0, enemy.health - damage);
          return { ...enemy, health: newHealth, hitFlash: Date.now() };
        }
        return enemy;
      });
      
      const aliveEnemies = updatedEnemies.filter(enemy => {
        if (enemy.health <= 0) {
          setScore(s => s + (enemy.type === 'demon' ? 200 : enemy.type === 'soldier' ? 150 : 100));
          return false;
        }
        return true;
      });
      
      return aliveEnemies;
    });
  }, [canvasSize, setHitMarkers, setEnemies, setScore]);

  const handlePlayerHit = useCallback((damage: number) => {
    setPlayer(prev => ({ ...prev, health: Math.max(0, prev.health - damage) }));
    setPlayerHitFlash(Date.now());
  }, [setPlayer, setPlayerHitFlash]);

  const handleEnemyShoot = useCallback((projectile: Projectile) => {
    setProjectiles(prev => [...prev, projectile]);
  }, [setProjectiles]);

  // Game loop
  useEffect(() => {
    if (!gameStarted) return;
    
    const gameLoop = setInterval(() => {
      setPlayer(prev => updatePlayerMovement(prev, keys));
      
      setProjectiles(prev => {
        const currentEnemies = enemies;
        const currentPlayer = player;
        return updateProjectiles(prev, currentEnemies, currentPlayer, handleEnemyHit, handlePlayerHit);
      });
      
      setHitMarkers(prev => prev.filter(marker => Date.now() - marker.time < 2000));
      setEnemies(prev => updateEnemyAI(prev, player, handleEnemyShoot));
      
      if (canvasRef.current) {
        render(
          canvasRef.current,
          player,
          enemies,
          projectiles,
          hitMarkers,
          isShooting,
          muzzleFlash,
          playerHitFlash
        );
      }
    }, 50);
    
    return () => clearInterval(gameLoop);
  }, [gameStarted, keys, enemies, player, handleEnemyHit, handlePlayerHit, handleEnemyShoot, projectiles, hitMarkers, isShooting, muzzleFlash, playerHitFlash, setPlayer, setProjectiles, setHitMarkers, setEnemies]);

  // Event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => new Set(prev).add(e.key.toLowerCase()));
      if (e.key === ' ') {
        e.preventDefault();
        shoot();
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(e.key.toLowerCase());
        return newKeys;
      });
    };
    
    const handleClick = () => {
      if (gameStarted) {
        shoot();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('click', handleClick);
    };
  }, [gameStarted, shoot]);

  if (!gameStarted) {
    return <StartScreen onStart={() => setGameStarted(true)} />;
  }

  if (player.health <= 0) {
    return <GameOverScreen score={score} onRestart={resetGame} />;
  }

  return (
    <div className="h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden flex flex-col">
      <WIPSign isVisible={wipSignMounted} />

      <CRTMonitor ref={containerRef} canvasSize={canvasSize}>
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="w-full h-full relative z-1"
          style={{ 
            imageRendering: 'pixelated'
          }}
        />
      </CRTMonitor>
      
      <DoomHUD 
        player={player}
        enemies={enemies}
        score={score}
        armor={armor}
      />
      
      <GameOverlays 
        player={player}
        enemies={enemies}
        score={score}
        onNextWave={spawnNextWave}
      />
    </div>
  );
}