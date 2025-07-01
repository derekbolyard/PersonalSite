import React, { useState } from 'react';
import { Home, Eye, Terminal, Zap, Rocket, Target, Menu, X, Briefcase } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playHailToTheKing } = useAudio();

  const pages = [
    { id: 'home', name: 'Portfolio', icon: Home },
    { id: 'services', name: 'Services', icon: Briefcase },
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
    
    // Handle routing
    if (pageId === 'home') {
      onPageChange('/');
    } else {
      onPageChange(`/${pageId}`);
    }
    
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-6 z-50 hidden md:block">
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
              <Menu className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
          </button>

          {pages.map((page) => {
            const Icon = page.icon;
            const isDoom = page.id === 'doom';
            const isServices = page.id === 'services';
            const isActive = (page.id === 'home' && currentPage === '/') || 
                           (page.id !== 'home' && currentPage === `/${page.id}`);
            
            return (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                  isActive
                    ? isDoom 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 animate-pulse' 
                      : isServices
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-white hover:bg-white/20 hover:text-white'
                } ${isCollapsed ? 'justify-center px-2' : ''}`}
                title={page.name}
              >
                <Icon className={`w-5 h-5 ${
                  isActive 
                    ? isDoom ? 'animate-bounce' : 'animate-pulse' 
                    : 'group-hover:scale-110'
                } transition-transform`} />
                <span className={`font-medium whitespace-nowrap transition-all duration-300 ${
                  isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                }`}>
                  {page.name}
                </span>
                
                {/* Special indicators */}
                {isDoom && isActive && (
                  <div className="absolute -top-1 -right-1 text-xs animate-pulse">
                    💀
                  </div>
                )}
                {isServices && isActive && (
                  <div className="absolute -top-1 -right-1 text-xs animate-pulse">
                    💼
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 p-3 bg-black/80 backdrop-blur-lg rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-lg border-r border-white/20 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <h2 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Navigation
            </h2>
            
            <div className="space-y-2">
              {pages.map((page) => {
                const Icon = page.icon;
                const isDoom = page.id === 'doom';
                const isServices = page.id === 'services';
                const isActive = (page.id === 'home' && currentPage === '/') || 
                               (page.id !== 'home' && currentPage === `/${page.id}`);
                
                return (
                  <button
                    key={page.id}
                    onClick={() => handlePageChange(page.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative ${
                      isActive
                        ? isDoom 
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/25' 
                          : isServices
                          ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                          : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'text-white hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${
                      isActive 
                        ? isDoom ? 'animate-bounce' : 'animate-pulse' 
                        : 'group-hover:scale-110'
                    } transition-transform`} />
                    <span className="font-medium text-lg">
                      {page.name}
                    </span>
                    
                    {/* Special indicators */}
                    {isDoom && isActive && (
                      <div className="absolute top-2 right-2 text-sm animate-pulse">
                        💀
                      </div>
                    )}
                    {isServices && isActive && (
                      <div className="absolute top-2 right-2 text-sm animate-pulse">
                        💼
                      </div>
                    )}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute right-4 w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 text-center">
                Derek Bolyard Portfolio
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Tap outside to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}