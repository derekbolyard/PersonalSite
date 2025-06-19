import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Star, Zap, Globe, Satellite, Moon } from 'lucide-react';

interface SpaceObject {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'star' | 'planet' | 'asteroid' | 'comet';
  emoji: string;
  size: number;
  collected: boolean;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  thrust: boolean;
}

export default function SpaceExplorer() {
  const [rocket, setRocket] = useState<Rocket>({ 
    x: 400, 
    y: 400, 
    vx: 0, 
    vy: 0, 
    rotation: 0, 
    thrust: false 
  });
  const [spaceObjects, setSpaceObjects] = useState<SpaceObject[]>([]);
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [keys, setKeys] = useState<Set<string>>(new Set());
  const gameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const spaceEmojis = {
    star: ['⭐', '🌟', '✨', '💫'],
    planet: ['🪐', '🌍', '🌎', '🌏', '🌕', '🌖', '🌗', '🌘'],
    asteroid: ['☄️', '🌑', '🪨'],
    comet: ['☄️', '💫']
  };

  const createSpaceObject = (): SpaceObject => {
    const types = ['star', 'planet', 'asteroid', 'comet'] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    const emojis = spaceEmojis[type];
    
    return {
      id: Math.random(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      type,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: type === 'star' ? 20 : type === 'planet' ? 40 : 30,
      collected: false
    };
  };

  useEffect(() => {
    // Initialize space objects
    const initialObjects = Array.from({ length: 25 }, createSpaceObject);
    setSpaceObjects(initialObjects);

    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => new Set(prev).add(e.key.toLowerCase()));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(e.key.toLowerCase());
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const gameLoop = () => {
      // Physics constants
      const thrustPower = 0.4;
      const rotationSpeed = 4;
      const friction = 0.98;
      const maxSpeed = 8;

      // Update rocket based on keys
      setRocket(prev => {
        let newVx = prev.vx;
        let newVy = prev.vy;
        let newRotation = prev.rotation;
        let thrust = false;

        // Rotation
        if (keys.has('arrowleft') || keys.has('a')) {
          newRotation -= rotationSpeed;
        }
        if (keys.has('arrowright') || keys.has('d')) {
          newRotation += rotationSpeed;
        }

        // Thrust
        if (keys.has('arrowup') || keys.has('w')) {
          if (fuel > 0) {
            const radians = (newRotation - 90) * (Math.PI / 180);
            newVx += Math.cos(radians) * thrustPower;
            newVy += Math.sin(radians) * thrustPower;
            thrust = true;
            setFuel(f => Math.max(0, f - 0.3));
          }
        }

        // Apply friction
        newVx *= friction;
        newVy *= friction;

        // Limit max speed
        const speed = Math.sqrt(newVx * newVx + newVy * newVy);
        if (speed > maxSpeed) {
          newVx = (newVx / speed) * maxSpeed;
          newVy = (newVy / speed) * maxSpeed;
        }

        // Update position
        let newX = prev.x + newVx;
        let newY = prev.y + newVy;

        // Wrap around screen edges
        if (newX < -25) newX = window.innerWidth + 25;
        if (newX > window.innerWidth + 25) newX = -25;
        if (newY < -25) newY = window.innerHeight + 25;
        if (newY > window.innerHeight + 25) newY = -25;

        // Keep rotation in bounds
        while (newRotation >= 360) newRotation -= 360;
        while (newRotation < 0) newRotation += 360;

        return { 
          x: newX, 
          y: newY, 
          vx: newVx, 
          vy: newVy, 
          rotation: newRotation, 
          thrust 
        };
      });

      // Update space objects
      setSpaceObjects(prev => 
        prev.map(obj => {
          if (obj.collected) return obj;
          
          let newX = obj.x + obj.vx;
          let newY = obj.y + obj.vy;

          // Wrap around edges instead of bouncing
          if (newX < -obj.size) newX = window.innerWidth + obj.size;
          if (newX > window.innerWidth + obj.size) newX = -obj.size;
          if (newY < -obj.size) newY = window.innerHeight + obj.size;
          if (newY > window.innerHeight + obj.size) newY = -obj.size;

          return { ...obj, x: newX, y: newY };
        })
      );

      // Check collisions
      setSpaceObjects(prev => {
        return prev.map(obj => {
          if (obj.collected) return obj;
          
          const distance = Math.hypot(rocket.x - obj.x, rocket.y - obj.y);
          if (distance < 35) {
            setScore(s => s + (obj.type === 'star' ? 10 : obj.type === 'planet' ? 25 : 15));
            setFuel(f => Math.min(100, f + 8));
            return { ...obj, collected: true };
          }
          return obj;
        });
      });

      // Regenerate fuel slowly when not thrusting
      if (!keys.has('arrowup') && !keys.has('w')) {
        setFuel(f => Math.min(100, f + 0.05));
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [keys, rocket.x, rocket.y, fuel]);

  const addNewObjects = () => {
    const newObjects = Array.from({ length: 15 }, createSpaceObject);
    setSpaceObjects(prev => [...prev.filter(obj => !obj.collected), ...newObjects]);
  };

  // Calculate thruster flame position - FIXED to point in opposite direction of rocket nose
  const getThrusterStyle = () => {
    // The rocket emoji 🚀 points upward by default (0 degrees = up)
    // When rotation = 0, rocket points up, so flame should point down
    // When rotation = 90, rocket points right, so flame should point left
    
    // Calculate the angle where the flame should point (opposite of rocket nose)
    const flameAngle = rocket.rotation + 180; // Add 180 degrees to point opposite
    const flameRadians = (flameAngle - 90) * (Math.PI / 180); // Convert to radians, adjust for coordinate system
    
    // Position the flame behind the rocket
    const flameDistance = 40; // Distance from rocket center
    const flameX = rocket.x + Math.cos(flameRadians) * flameDistance;
    const flameY = rocket.y + Math.sin(flameRadians) * flameDistance;
    
    return {
      left: flameX - 15, // Center the flame emoji
      top: flameY - 15,
      transform: `rotate(${flameAngle}deg)` // Rotate the flame to point away from rocket
    };
  };

  return (
    <div 
      ref={gameRef}
      className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black overflow-hidden relative"
    >
      {/* Stars background - NO blinking */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 4}px`,
              opacity: 0.3 + Math.random() * 0.4 // Static opacity
            }}
          >
            ·
          </div>
        ))}
      </div>

      {/* HUD */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white border border-blue-500/30">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Score: {score}
          </div>
        </div>
        <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white border border-blue-500/30">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            Fuel: {Math.round(fuel)}%
          </div>
          <div className="w-32 h-2 bg-gray-700 rounded-full mt-1 border border-gray-600">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-300"
              style={{ width: `${fuel}%` }}
            />
          </div>
        </div>
        <div className="bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg text-white border border-blue-500/30">
          <div className="text-xs">
            <div>Speed: {Math.round(Math.sqrt(rocket.vx * rocket.vx + rocket.vy * rocket.vy) * 10) / 10}</div>
            <div>Objects: {spaceObjects.filter(obj => !obj.collected).length}</div>
            <div>Angle: {Math.round(rocket.rotation)}°</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg text-white text-sm border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="font-semibold">Controls:</span>
          </div>
          <div className="space-y-1 text-xs">
            <div><span className="text-blue-300">W/↑</span> = Thrust</div>
            <div><span className="text-blue-300">A/← D/→</span> = Rotate</div>
            <div className="text-yellow-300 mt-2">Tip: Use momentum!</div>
          </div>
        </div>
      </div>

      {/* Rocket */}
      <div
        className="absolute transition-none z-20"
        style={{
          left: rocket.x - 25,
          top: rocket.y - 25,
          transform: `rotate(${rocket.rotation}deg)`
        }}
      >
        <div className="text-5xl filter drop-shadow-lg">🚀</div>
      </div>

      {/* Thruster flame - NOW CORRECTLY positioned behind rocket */}
      {rocket.thrust && (
        <div 
          className="absolute text-3xl z-19"
          style={getThrusterStyle()}
        >
          🔥
        </div>
      )}

      {/* Space Objects - NO blinking */}
      {spaceObjects.filter(obj => !obj.collected).map(obj => (
        <div
          key={obj.id}
          className="absolute transition-none"
          style={{
            left: obj.x,
            top: obj.y,
            fontSize: obj.size,
            transform: `rotate(${Date.now() * 0.001 * obj.id}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
          }}
        >
          {obj.emoji}
        </div>
      ))}

      {/* Velocity indicator */}
      {(Math.abs(rocket.vx) > 0.1 || Math.abs(rocket.vy) > 0.1) && (
        <div
          className="absolute w-1 bg-cyan-400 opacity-60 z-18"
          style={{
            left: rocket.x,
            top: rocket.y,
            height: Math.sqrt(rocket.vx * rocket.vx + rocket.vy * rocket.vy) * 20,
            transformOrigin: 'top center',
            transform: `rotate(${Math.atan2(rocket.vy, rocket.vx) * (180 / Math.PI) + 90}deg)`
          }}
        />
      )}

      {/* Action Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={addNewObjects}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg border border-blue-400/30"
        >
          <Satellite className="w-5 h-5" />
          Deploy New Objects
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 right-8">
        <div className="bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg text-white text-sm max-w-xs border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="font-semibold">Mission:</span>
          </div>
          <p className="text-xs leading-relaxed">
            Navigate through space using realistic physics! Collect objects to earn points and refuel. 
            Use momentum and plan your trajectory carefully.
          </p>
        </div>
      </div>

      {/* Low fuel warning */}
      {fuel < 15 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-400 animate-bounce z-30 bg-black/80 px-6 py-3 rounded-lg border-2 border-red-500">
          ⚠️ LOW FUEL! ⚠️
        </div>
      )}

      {/* Enhanced particle trail effect - shows behind rocket when thrusting */}
      {rocket.thrust && (
        <div className="absolute inset-0 pointer-events-none z-17">
          {Array.from({ length: 12 }).map((_, i) => {
            // Calculate the exact opposite direction of rocket nose
            const flameAngle = rocket.rotation + 180;
            const radians = (flameAngle - 90) * (Math.PI / 180);
            
            const distance = 45 + (i * 12); // Particles spread out behind
            const spread = (Math.random() - 0.5) * 25; // Random spread
            const x = rocket.x + Math.cos(radians) * distance + spread;
            const y = rocket.y + Math.sin(radians) * distance + spread;
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  left: x,
                  top: y,
                  animationDelay: `${i * 80}ms`,
                  animationDuration: '0.8s',
                  opacity: 1 - (i * 0.08) // Fade out as particles get further
                }}
              />
            );
          })}
        </div>
      )}

      {/* Thruster glow effect */}
      {rocket.thrust && (
        <div 
          className="absolute pointer-events-none z-16"
          style={{
            left: rocket.x - 30,
            top: rocket.y - 30,
            width: 60,
            height: 60,
            background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'thruster-glow 0.2s ease-in-out infinite alternate'
          }}
        />
      )}

      <style jsx>{`
        @keyframes thruster-glow {
          0% { 
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% { 
            transform: scale(1.2);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}