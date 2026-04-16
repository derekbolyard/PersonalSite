import React from 'react';
import { MoonStar, SunMedium } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`fixed right-4 top-20 z-50 rounded-full border p-2 shadow-lg backdrop-blur md:right-6 md:top-5 ${
        isDarkMode
          ? 'border-white/10 bg-stone-900/80 text-stone-100 hover:bg-stone-800/90'
          : 'border-stone-300/80 bg-[#f8f5ee]/90 text-stone-900 hover:bg-white'
      }`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}
