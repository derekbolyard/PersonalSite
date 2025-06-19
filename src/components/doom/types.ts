export interface Player {
  x: number;
  y: number;
  angle: number;
  health: number;
  ammo: number;
  weapon: 'pistol' | 'shotgun' | 'chaingun';
}

export interface Enemy {
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  type: 'imp' | 'demon' | 'soldier';
  angle: number;
  lastShot: number;
  id: number;
  hitFlash: number;
}

export interface Projectile {
  x: number;
  y: number;
  angle: number;
  speed: number;
  damage: number;
  id: number;
  fromPlayer: boolean;
}

export interface HitMarker {
  x: number;
  y: number;
  damage: number;
  time: number;
  id: number;
}

export const CELL_SIZE = 64;
export const FOV = Math.PI / 3;
export const HALF_FOV = FOV / 2;
export const NUM_RAYS = 320;
export const MAX_DEPTH = 800;

// Simple level map (1 = wall, 0 = empty)
export const MAP = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1],
  [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];