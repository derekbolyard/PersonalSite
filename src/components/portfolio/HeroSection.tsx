import React from 'react';
import { Code2, Rocket, Mail, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  currentTypeText: string;
  isDarkMode: boolean;
  onViewWorkClick: () => void;
  showEasterEgg: boolean;
}

export default function HeroSection({ 
  currentTypeText, 
  isDarkMode, 
  onViewWorkClick, 
  showEasterEgg 
}: HeroSectionProps) {
  const handleGetInTouchClick = () => {
    const subject = encodeURIComponent("Let's Work Together!");
    const body    = encodeURIComponent(
    "Hi Derek,\n\nI'd love to discuss a potential project with you.\n\nBest regards,"
  );

  window.location.href = `mailto:derekbolyard@gmail.com?subject=${subject}&body=${body}`;
};


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1 animate-spin-slow">
              <div className={`w-full h-full rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300 group-hover:scale-95`}>
                <Code2 className="w-16 h-16 text-blue-500 group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Hello, I'm Derek
        </h1>
        
        <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
          <span className="text-gray-400">I'm a </span>
          <span className="ml-2 font-mono text-blue-400 relative">
            {currentTypeText}
            <span className="opacity-100">|</span>
            {/* Static glow effect behind text - NO blinking */}
            <div className="absolute inset-0 bg-blue-400/20 blur-xl -z-10"></div>
          </span>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about crafting elegant solutions to complex problems. 
          I transform ideas into scalable, user-centric applications that make a difference.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center relative">
          <button 
            onClick={onViewWorkClick}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-visible"
          >
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              View My Work
              <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            
            {/* Easter Egg */}
            {showEasterEgg && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 animate-bounce-up">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-purple-300 text-gray-800 text-sm font-medium whitespace-nowrap">
                  😄 you already are, silly!
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
              </div>
            )}
          </button>
          <button 
            onClick={handleGetInTouchClick}
            className="group px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:border-blue-400"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
