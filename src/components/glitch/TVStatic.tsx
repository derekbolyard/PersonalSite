import React, { useRef, useEffect } from 'react';

interface TVStaticProps {
  staticIntensity: number;
  channelStatic: boolean;
}

export default function TVStatic({ staticIntensity, channelStatic }: TVStaticProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateStatic = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255 * staticIntensity;
        data[i] = noise;     // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = channelStatic ? noise * 0.8 : noise * 0.3; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const interval = setInterval(generateStatic, 50);
    return () => clearInterval(interval);
  }, [staticIntensity, channelStatic]);

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ 
        opacity: channelStatic ? 0.8 : 0.2,
        mixBlendMode: 'screen'
      }}
    />
  );
}