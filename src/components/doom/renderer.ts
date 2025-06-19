import { Player, Enemy, Projectile, HitMarker, CELL_SIZE, FOV, HALF_FOV, NUM_RAYS, MAX_DEPTH } from './types';
import { castRay } from './gameLogic';

export const drawWeapon = (
  ctx: CanvasRenderingContext2D, 
  width: number, 
  height: number, 
  player: Player,
  isShooting: boolean,
  muzzleFlash: boolean
) => {
  const weaponY = height - 150;
  const weaponX = width / 2;
  
  // Draw muzzle flash first (behind weapon)
  if (isShooting || muzzleFlash) {
    // Large bright muzzle flash
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(weaponX, weaponY - 40, 35, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#ff8800';
    ctx.beginPath();
    ctx.arc(weaponX, weaponY - 40, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(weaponX, weaponY - 40, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Flash rays
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x1 = weaponX + Math.cos(angle) * 20;
      const y1 = weaponY - 40 + Math.sin(angle) * 20;
      const x2 = weaponX + Math.cos(angle) * 50;
      const y2 = weaponY - 40 + Math.sin(angle) * 50;
      
      ctx.strokeStyle = '#ffff00';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  
  // Draw weapon body - much larger and more detailed
  if (player.weapon === 'pistol') {
    // Pistol
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(weaponX - 40, weaponY, 80, 120);
    
    // Barrel
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(weaponX - 12, weaponY - 60, 24, 60);
    
    // Grip
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(weaponX - 20, weaponY + 70, 40, 50);
    
    // Trigger guard
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(weaponX, weaponY + 50, 20, 0, Math.PI);
    ctx.stroke();
    
    // Sight
    ctx.fillStyle = '#666';
    ctx.fillRect(weaponX - 3, weaponY - 70, 6, 15);
    
  } else if (player.weapon === 'shotgun') {
    // Shotgun - wider and longer
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(weaponX - 50, weaponY, 100, 140);
    
    // Double barrel
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(weaponX - 15, weaponY - 70, 12, 70);
    ctx.fillRect(weaponX + 3, weaponY - 70, 12, 70);
    
    // Stock
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(weaponX - 30, weaponY + 90, 60, 50);
    
    // Pump action
    ctx.fillStyle = '#666';
    ctx.fillRect(weaponX - 25, weaponY + 30, 50, 20);
    
  } else if (player.weapon === 'chaingun') {
    // Chaingun - massive
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(weaponX - 60, weaponY, 120, 160);
    
    // Multiple barrels
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const bx = weaponX + Math.cos(angle) * 20;
      const by = weaponY - 40 + Math.sin(angle) * 20;
      
      ctx.fillStyle = '#1a1a1a';
      ctx.beginPath();
      ctx.arc(bx, by, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Central hub
    ctx.fillStyle = '#666';
    ctx.beginPath();
    ctx.arc(weaponX, weaponY - 40, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Ammo belt
    ctx.fillStyle = '#DAA520';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(weaponX - 40 + i * 15, weaponY + 60, 10, 25);
    }
  }
  
  // Weapon name display
  ctx.fillStyle = '#00ff00';
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(player.weapon.toUpperCase(), weaponX, height - 15);
  
  // Damage info
  const damage = player.weapon === 'shotgun' ? '40' : player.weapon === 'chaingun' ? '25' : '30';
  ctx.fillStyle = '#ffff00';
  ctx.font = 'bold 14px monospace';
  ctx.fillText(`DMG: ${damage}`, weaponX, height - 35);
};

export const drawEnemySprite = (
  ctx: CanvasRenderingContext2D, 
  enemy: Enemy, 
  screenX: number, 
  screenY: number, 
  size: number
) => {
  // Flash red if recently hit
  const isFlashing = Date.now() - enemy.hitFlash < 300;
  
  // Draw enemy based on type with much more detail
  if (enemy.type === 'imp') {
    // Imp - red demon-like creature
    ctx.fillStyle = isFlashing ? '#ff6666' : '#cc2222';
    ctx.fillRect(screenX - size/3, screenY - size/2, size*2/3, size);
    
    // Horns
    ctx.fillStyle = isFlashing ? '#ff8888' : '#aa1111';
    ctx.fillRect(screenX - size/4, screenY - size/2 - size/8, size/8, size/4);
    ctx.fillRect(screenX + size/8, screenY - size/2 - size/8, size/8, size/4);
    
    // Glowing eyes
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(screenX - size/6, screenY - size/3, size/18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(screenX + size/6, screenY - size/3, size/18, 0, Math.PI * 2);
    ctx.fill();
    
    // Claws
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(screenX - size/3, screenY + size/4, size/12, size/8);
    ctx.fillRect(screenX + size/4, screenY + size/4, size/12, size/8);
    
  } else if (enemy.type === 'demon') {
    // Demon - larger, darker, more menacing
    ctx.fillStyle = isFlashing ? '#ff4444' : '#990000';
    ctx.fillRect(screenX - size/2, screenY - size/2, size, size);
    
    // Multiple spikes
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = isFlashing ? '#ff7777' : '#660000';
      ctx.fillRect(screenX - size/3 + i * size/6, screenY - size/2 - size/6, size/10, size/3);
    }
    
    // Large glowing eyes
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(screenX - size/4, screenY - size/4, size/10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(screenX + size/4, screenY - size/4, size/10, 0, Math.PI * 2);
    ctx.fill();
    
    // Mouth with teeth
    ctx.fillStyle = '#000000';
    ctx.fillRect(screenX - size/6, screenY, size/3, size/8);
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(screenX - size/8 + i * size/16, screenY, size/32, size/12);
    }
    
  } else if (enemy.type === 'soldier') {
    // Soldier - green military with detailed gear
    ctx.fillStyle = isFlashing ? '#88ff88' : '#228822';
    ctx.fillRect(screenX - size/3, screenY - size/2, size*2/3, size);
    
    // Detailed helmet
    ctx.fillStyle = isFlashing ? '#aaffaa' : '#116611';
    ctx.fillRect(screenX - size/3, screenY - size/2 - size/8, size*2/3, size/3);
    
    // Helmet strap
    ctx.fillStyle = '#444444';
    ctx.fillRect(screenX - size/4, screenY - size/3, size/2, size/20);
    
    // Rifle
    ctx.fillStyle = '#444444';
    ctx.fillRect(screenX + size/4, screenY - size/4, size/6, size/2);
    ctx.fillRect(screenX + size/3, screenY - size/6, size/4, size/12);
    
    // Eyes behind visor
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(screenX - size/8, screenY - size/4, size/20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(screenX + size/8, screenY - size/4, size/20, 0, Math.PI * 2);
    ctx.fill();
    
    // Body armor details
    ctx.fillStyle = isFlashing ? '#bbffbb' : '#004400';
    ctx.fillRect(screenX - size/4, screenY - size/8, size/2, size/4);
  }
  
  // Enhanced health bar above enemy
  const barWidth = size * 0.9;
  const barHeight = 10;
  const healthPercent = enemy.health / enemy.maxHealth;
  
  // Health bar background
  ctx.fillStyle = '#000000';
  ctx.fillRect(screenX - barWidth/2, screenY - size/2 - 30, barWidth, barHeight);
  
  // Health bar border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.strokeRect(screenX - barWidth/2, screenY - size/2 - 30, barWidth, barHeight);
  
  // Health bar fill
  ctx.fillStyle = healthPercent > 0.6 ? '#00ff00' : healthPercent > 0.3 ? '#ffff00' : '#ff0000';
  ctx.fillRect(screenX - barWidth/2 + 1, screenY - size/2 - 29, (barWidth - 2) * healthPercent, barHeight - 2);
  
  // Enemy type label
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(enemy.type.toUpperCase(), screenX, screenY - size/2 - 40);
  
  // Health numbers
  ctx.fillStyle = '#ffff00';
  ctx.font = '12px monospace';
  ctx.fillText(`${enemy.health}/${enemy.maxHealth}`, screenX, screenY - size/2 - 50);
};

export const render = (
  canvas: HTMLCanvasElement,
  player: Player,
  enemies: Enemy[],
  projectiles: Projectile[],
  hitMarkers: HitMarker[],
  isShooting: boolean,
  muzzleFlash: boolean,
  playerHitFlash: number
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const width = canvas.width;
  const height = canvas.height;
  
  // Clear canvas
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  
  // Player hit flash effect
  if (Date.now() - playerHitFlash < 400) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
    ctx.fillRect(0, 0, width, height);
  }
  
  // Draw ceiling (darker with some texture)
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, width, height / 2);
  
  // Draw floor (lighter with some texture)
  ctx.fillStyle = '#2a2a2a';
  ctx.fillRect(0, height / 2, width, height / 2);
  
  // Cast rays for walls
  const rayAngleStep = FOV / NUM_RAYS;
  
  for (let i = 0; i < NUM_RAYS; i++) {
    const rayAngle = player.angle - HALF_FOV + (rayAngleStep * i);
    const distance = castRay(player.x, player.y, rayAngle, MAX_DEPTH);
    
    // Fix fisheye effect
    const correctedDistance = distance * Math.cos(rayAngle - player.angle);
    
    // Calculate wall height
    const wallHeight = (CELL_SIZE * height) / correctedDistance;
    
    // Calculate wall color based on distance (more dramatic lighting)
    const brightness = Math.max(0.1, 1 - (correctedDistance / MAX_DEPTH));
    const baseColor = Math.floor(200 * brightness);
    
    // Add some color variation to walls
    const redShift = Math.floor(baseColor * 0.8);
    const greenShift = Math.floor(baseColor * 0.6);
    const blueShift = Math.floor(baseColor * 0.4);
    
    // Draw wall slice
    const x = (i * width) / NUM_RAYS;
    const wallTop = (height - wallHeight) / 2;
    
    ctx.fillStyle = `rgb(${redShift}, ${greenShift}, ${blueShift})`;
    ctx.fillRect(x, wallTop, width / NUM_RAYS + 1, wallHeight);
  }
  
  // Draw enemies as detailed sprites
  enemies.forEach(enemy => {
    const dx = enemy.x - player.x;
    const dy = enemy.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < MAX_DEPTH) {
      const angle = Math.atan2(dy, dx) - player.angle;
      let normalizedAngle = angle;
      
      // Normalize angle to [-PI, PI]
      while (normalizedAngle > Math.PI) normalizedAngle -= 2 * Math.PI;
      while (normalizedAngle < -Math.PI) normalizedAngle += 2 * Math.PI;
      
      if (Math.abs(normalizedAngle) < HALF_FOV) {
        const screenX = (normalizedAngle / HALF_FOV) * (width / 2) + (width / 2);
        const spriteSize = (CELL_SIZE * height) / distance * 1.5;
        const screenY = height / 2;
        
        drawEnemySprite(ctx, enemy, screenX, screenY, spriteSize);
      }
    }
  });
  
  // Draw projectiles with enhanced effects
  projectiles.forEach(projectile => {
    const dx = projectile.x - player.x;
    const dy = projectile.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < MAX_DEPTH) {
      const angle = Math.atan2(dy, dx) - player.angle;
      let normalizedAngle = angle;
      
      while (normalizedAngle > Math.PI) normalizedAngle -= 2 * Math.PI;
      while (normalizedAngle < -Math.PI) normalizedAngle += 2 * Math.PI;
      
      if (Math.abs(normalizedAngle) < HALF_FOV) {
        const screenX = (normalizedAngle / HALF_FOV) * (width / 2) + (width / 2);
        const size = Math.max(6, 50 / distance * 100);
        
        // Draw projectile with enhanced glow effect
        if (projectile.fromPlayer) {
          // Player projectiles - bright yellow/orange with trail
          ctx.fillStyle = '#ffff00';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#ff8800';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size * 0.7, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Enemy projectiles - red with dark core
          ctx.fillStyle = '#ff0000';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#aa0000';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size * 0.6, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#440000';
          ctx.beginPath();
          ctx.arc(screenX, height / 2, size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  });
  
  // Draw floating damage numbers
  hitMarkers.forEach(marker => {
    const age = Date.now() - marker.time;
    const alpha = Math.max(0, 1 - age / 2000);
    const yOffset = age * 0.1;
    
    ctx.fillStyle = `rgba(255, 255, 0, ${alpha})`;
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.lineWidth = 3;
    ctx.strokeText(`-${marker.damage}`, marker.x, marker.y - yOffset);
    ctx.fillText(`-${marker.damage}`, marker.x, marker.y - yOffset);
  });
  
  // Draw enhanced crosshair
  ctx.strokeStyle = '#00ff00';
  ctx.lineWidth = 3;
  ctx.beginPath();
  // Horizontal line
  ctx.moveTo(width / 2 - 25, height / 2);
  ctx.lineTo(width / 2 - 10, height / 2);
  ctx.moveTo(width / 2 + 10, height / 2);
  ctx.lineTo(width / 2 + 25, height / 2);
  // Vertical line
  ctx.moveTo(width / 2, height / 2 - 25);
  ctx.lineTo(width / 2, height / 2 - 10);
  ctx.moveTo(width / 2, height / 2 + 10);
  ctx.lineTo(width / 2, height / 2 + 25);
  ctx.stroke();
  
  // Center dot
  ctx.fillStyle = '#00ff00';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 4, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw weapon (much more prominent)
  drawWeapon(ctx, width, height, player, isShooting, muzzleFlash);
};