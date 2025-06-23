import React, { useState, useEffect } from 'react';
import { Coffee, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import AnimatedBackground from '../components/common/AnimatedBackground';
import ThemeToggle from '../components/common/ThemeToggle';
import HeroSection from '../components/portfolio/HeroSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import TimelineSection from '../components/portfolio/TimelineSection';
import ContactSection from '../components/portfolio/ContactSection';

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const typeStrings = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Code Craftsman'];
  const currentTypeText = useTypewriter({ strings: typeStrings });

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWorkClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 2500);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:derekbolyard@gmail.com?subject=Let\'s Work Together!&body=Hi Derek,%0D%0A%0D%0AI\'d love to discuss a potential project with you.%0D%0A%0D%0ABest regards,';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <AnimatedBackground />
      
      <ThemeToggle 
        isDarkMode={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <HeroSection 
        currentTypeText={currentTypeText}
        isDarkMode={isDarkMode}
        onViewWorkClick={handleViewWorkClick}
        showEasterEgg={showEasterEgg}
      />

      <SkillsSection isDarkMode={isDarkMode} />
      
      <ProjectsSection isDarkMode={isDarkMode} />
      
      <TimelineSection isDarkMode={isDarkMode} />
      
      <ContactSection isDarkMode={isDarkMode} />

      {/* Enhanced Footer */}
      <footer className={`py-8 px-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Made with <Coffee className="w-4 h-4 text-yellow-600" /> and lots of code by Derek
            </p>
            
            {/* Footer Social Links */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleEmailClick}
                className={`flex items-center gap-2 transition-all duration-300 group hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                title="Send me an email"
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Email</span>
              </button>
              
              <button
                onClick={() => window.open('https://github.com/derekbolyard', '_blank', 'noopener,noreferrer')}
                className={`flex items-center gap-2 transition-all duration-300 group hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                title="Check out my GitHub"
              >
                <Github className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">GitHub</span>
              </button>
              
              <button
                onClick={() => window.open('https://www.linkedin.com/in/derek-bolyard-1b305516b/', '_blank', 'noopener,noreferrer')}
                className={`flex items-center gap-2 transition-all duration-300 group hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">LinkedIn</span>
              </button>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-4 pt-4 border-t border-gray-800/50">
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 Derek Bolyard. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
