import React from 'react';
import { PortfolioVariant } from '../portfolio/portfolioVariants';

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
  variant: PortfolioVariant;
}

export default function AnimatedBackground({ isDarkMode, variant }: AnimatedBackgroundProps) {
  const backgroundByVariant = {
    editorial: isDarkMode
      ? 'bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(17,17,17,1))]'
      : 'bg-[linear-gradient(180deg,rgba(243,239,229,0.98),rgba(243,239,229,1))]',
    notebook: isDarkMode
      ? 'bg-[linear-gradient(180deg,rgba(23,23,23,0.98),rgba(18,18,18,1))]'
      : 'bg-[linear-gradient(180deg,rgba(248,246,240,1),rgba(248,246,240,1))]',
    lab: isDarkMode
      ? 'bg-[linear-gradient(180deg,rgba(12,23,33,0.98),rgba(11,18,26,1))]'
      : 'bg-[linear-gradient(180deg,rgba(239,246,255,0.98),rgba(235,243,250,1))]',
    antiresume: isDarkMode
      ? 'bg-[linear-gradient(180deg,rgba(18,18,18,1),rgba(16,16,16,1))]'
      : 'bg-[linear-gradient(180deg,rgba(250,250,249,1),rgba(250,250,249,1))]',
  } as const;

  const accentByVariant = {
    editorial: isDarkMode
      ? 'bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_55%)]'
      : 'bg-[radial-gradient(circle_at_top,rgba(180,83,9,0.08),transparent_55%)]',
    notebook: isDarkMode
      ? 'bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_2.75rem] opacity-25'
      : 'bg-[linear-gradient(rgba(120,113,108,0.14)_1px,transparent_1px)] bg-[size:100%_2.75rem] opacity-70',
    lab: isDarkMode
      ? 'bg-[linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40'
      : 'bg-[linear-gradient(rgba(14,116,144,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.09)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-45',
    antiresume: isDarkMode
      ? 'bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_100%] opacity-20'
      : 'bg-[linear-gradient(rgba(24,24,27,0.035)_1px,transparent_1px)] bg-[size:100%_100%] opacity-25',
  } as const;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${backgroundByVariant[variant]}`} />
      <div className={`absolute inset-0 ${accentByVariant[variant]}`} />
    </div>
  );
}
