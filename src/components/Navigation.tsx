import React, { useState } from 'react';
import { Home, Eye, Terminal, Zap, Rocket, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { playHailToTheKing } = useAudio();

  const pages = [
    { id: 'home', name: 'Portfolio', icon: Home },
    { id: 'eyes', name: 'Eye Tracker', icon: Eye },
    { id: 'terminal', name: 'Retro Terminal', icon: Terminal },
    { id: 'glitch', name: 'Glitch Art', icon: Zap },
    { id: 'space', name: 'Space Explorer', icon: Rocket },
    { id: 'doom', name: 'DOOM Game', icon: Target }
  ];

  const handlePageChange = (pageId: string) => {
    // Play the iconic audio when navigating to DOOM
    if (pageId === 'doom') {
      try {
        playHailToTheKing();
      } catch (error) {
        console.log('Audio playback failed (user interaction required):', error);
      }
    }
    onPageChange(pageId);
  };

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className={`flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-white/20 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-auto'
      }`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/20 hover:text-white transition-all duration-300 mb-2 border-b border-white/20"
          title={isCollapsed ? 'Expand Navigation' : 'Collapse Navigation'}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>

        {pages.map((page) => {
          const Icon = page.icon;
          const isDoom = page.id === 'doom';
          
          return (
            <button
              key={page.id}
              onClick={() => handlePageChange(page.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                currentPage === page.id
                  ? isDoom 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 animate-pulse' 
                    : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-white hover:bg-white/20 hover:text-white'
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={page.name}
            >
              <Icon className={`w-5 h-5 ${
                currentPage === page.id 
                  ? isDoom ? 'animate-bounce' : 'animate-pulse' 
                  : 'group-hover:scale-110'
              } transition-transform`} />
              <span className={`font-medium whitespace-nowrap transition-all duration-300 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>
                {page.name}
              </span>
              
              {/* Special DOOM indicator */}
              {isDoom && currentPage === page.id && (
                <div className="absolute -top-1 -right-1 text-xs animate-pulse">
                  💀
                </div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}