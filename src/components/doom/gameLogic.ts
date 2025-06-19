import { Player, Enemy, Projectile, MAP, CELL_SIZE } from './types';

export const isWall = (x: number, y: number): boolean => {
  const mapX = Math.floor(x / CELL_SIZE);
  const mapY = Math.floor(y / CELL_SIZE);
  
  if (mapX < 0 || mapX >= MAP[0].length || mapY < 0 || mapY >= MAP.length) {
    return true;
  }
  
  return MAP[mapY][mapX] === 1;
};

export const castRay = (startX: number, startY: number, angle: number, maxDepth: number): number => {
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  
  let distance = 0;
  let x = startX;
  let y = startY;
  
  while (distance < maxDepth) {
    x += dx * 2;
    y += dy * 2;
    distance += 2;
    
    if (isWall(x, y)) {
      return distance;
    }
  }
  
  return maxDepth;
};

export const updatePlayerMovement = (
  player: Player, 
  keys: Set<string>
): Player => {
  let newX = player.x;
  let newY = player.y;
  let newAngle = player.angle;
  
  const moveSpeed = 12; // Increased movement speed significantly
  const rotSpeed = 0.08; // Rotation speed
  
  // FIXED: Forward/Backward movement (W/S) - Now properly moves in world space
  if (keys.has('w') || keys.has('arrowup')) {
    const nextX = newX + Math.cos(newAngle) * moveSpeed;
    const nextY = newY + Math.sin(newAngle) * moveSpeed;
    
    // Check collision with buffer zone
    if (!isWall(nextX, newY) && !isWall(nextX + 20, newY) && !isWall(nextX - 20, newY)) {
      newX = nextX;
    }
    if (!isWall(newX, nextY) && !isWall(newX, nextY + 20) && !isWall(newX, nextY - 20)) {
      newY = nextY;
    }
  }
  
  if (keys.has('s') || keys.has('arrowdown')) {
    const nextX = newX - Math.cos(newAngle) * moveSpeed;
    const nextY = newY - Math.sin(newAngle) * moveSpeed;
    
    // Check collision with buffer zone
    if (!isWall(nextX, newY) && !isWall(nextX + 20, newY) && !isWall(nextX - 20, newY)) {
      newX = nextX;
    }
    if (!isWall(newX, nextY) && !isWall(newX, nextY + 20) && !isWall(newX, nextY - 20)) {
      newY = nextY;
    }
  }
  
  // Turning (A/D)
  if (keys.has('a') || keys.has('arrowleft')) {
    newAngle -= rotSpeed;
  }
  if (keys.has('d') || keys.has('arrowright')) {
    newAngle += rotSpeed;
  }
  
  // Keep angle in bounds
  while (newAngle > Math.PI * 2) newAngle -= Math.PI * 2;
  while (newAngle < 0) newAngle += Math.PI * 2;
  
  return { ...player, x: newX, y: newY, angle: newAngle };
};

export const updateProjectiles = (
  projectiles: Projectile[],
  enemies: Enemy[],
  player: Player,
  onHitEnemy: (enemyId: number, damage: number, x: number, y: number) => void,
  onHitPlayer: (damage: number) => void
): Projectile[] => {
  const updatedProjectiles = projectiles.map(projectile => ({
    ...projectile,
    x: projectile.x + Math.cos(projectile.angle) * projectile.speed,
    y: projectile.y + Math.sin(projectile.angle) * projectile.speed
  }));

  return updatedProjectiles.filter(projectile => {
    // Remove projectiles that hit walls
    if (isWall(projectile.x, projectile.y)) return false;
    
    // Remove projectiles that are too far
    if (Math.abs(projectile.x) > 2000 || Math.abs(projectile.y) > 2000) return false;
    
    // FIXED: Check collision with enemies (player projectiles)
    if (projectile.fromPlayer) {
      for (const enemy of enemies) {
        const dx = enemy.x - projectile.x;
        const dy = enemy.y - projectile.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 60) { // Hit radius
          console.log(`Hit enemy ${enemy.id} for ${projectile.damage} damage!`);
          onHitEnemy(enemy.id, projectile.damage, projectile.x, projectile.y);
          return false; // Remove projectile
        }
      }
    }
    
    // FIXED: Check collision with player (enemy projectiles)
    if (!projectile.fromPlayer) {
      const dx = player.x - projectile.x;
      const dy = player.y - projectile.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 50) { // Hit radius
        console.log(`Player hit for ${projectile.damage} damage!`);
        onHitPlayer(projectile.damage);
        return false; // Remove projectile
      }
    }
    
    return true; // Keep projectile
  });
};

export const updateEnemyAI = (
  enemies: Enemy[],
  player: Player,
  onEnemyShoot: (projectile: Projectile) => void
): Enemy[] => {
  return enemies.map(enemy => {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    let newX = enemy.x;
    let newY = enemy.y;
    
    // FIXED: Move towards player more aggressively
    if (distance > 80 && distance < 600) {
      const moveSpeed = enemy.type === 'demon' ? 3.5 : enemy.type === 'soldier' ? 3 : 2.5;
      const nextX = enemy.x + Math.cos(angle) * moveSpeed;
      const nextY = enemy.y + Math.sin(angle) * moveSpeed;
      
      // Better collision detection for enemies
      if (!isWall(nextX, enemy.y) && !isWall(nextX + 15, enemy.y) && !isWall(nextX - 15, enemy.y)) {
        newX = nextX;
      }
      if (!isWall(enemy.x, nextY) && !isWall(enemy.x, nextY + 15) && !isWall(enemy.x, nextY - 15)) {
        newY = nextY;
      }
    }
    
    // FIXED: More aggressive shooting
    const now = Date.now();
    const shootInterval = enemy.type === 'soldier' ? 800 : enemy.type === 'imp' ? 1200 : 1000;
    
    if (distance < 700 && now - enemy.lastShot > shootInterval) {
      // Add some spread to enemy shots
      const spread = (Math.random() - 0.5) * 0.3;
      const enemyProjectile: Projectile = {
        x: enemy.x,
        y: enemy.y,
        angle: angle + spread,
        speed: 15,
        damage: enemy.type === 'demon' ? 30 : enemy.type === 'soldier' ? 25 : 20,
        id: now + enemy.id,
        fromPlayer: false
      };
      
      console.log(`Enemy ${enemy.id} shooting at player!`);
      onEnemyShoot(enemyProjectile);
      
      return { ...enemy, x: newX, y: newY, angle, lastShot: now };
    }
    
    return { ...enemy, x: newX, y: newY, angle };
  });
};