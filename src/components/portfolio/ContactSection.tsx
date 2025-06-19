import React from 'react';
import { Mail, Github, Linkedin, Zap, Coffee } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const handleEmailClick = () => {
  const subject = encodeURIComponent("Let's Work Together!");
  const body    = encodeURIComponent(
    "Hi Derek,\n\nI'd love to discuss a potential project with you.\n\nBest regards,"
  );

  window.location.href = `mailto:derekbolyard@gmail.com?subject=${subject}&body=${body}`;
};


  const handleGithubClick = () => {
    window.open('https://github.com/derekbolyard', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/derek-bolyard-1b305516b/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        
        <p className={`text-xl mb-12 max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Ready to turn your ideas into reality? Let's discuss how we can work together 
          to create something extraordinary.
        </p>
        
        {/* Terminal Style Contact */}
        <div className={`max-w-2xl mx-auto p-6 rounded-xl font-mono text-left ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'
        }`}>
          <div className="flex items-center mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className={`ml-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>derek@terminal</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="text-green-500 font-semibold">$ whoami</div>
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Derek Bolyard - Software Engineer & Digital Craftsman</div>
            <div className="text-green-500 font-semibold">$ contact --methods</div>
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              <button
                onClick={handleEmailClick}
                className={`flex items-center gap-2 py-1 cursor-pointer transition-colors group w-full text-left ${
                  isDarkMode 
                    ? 'hover:text-blue-400' 
                    : 'hover:text-blue-600 text-gray-700'
                }`}
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span className="underline decoration-dotted hover:decoration-solid">
                  derekbolyard@gmail.com
                </span>
              </button>
              <button
                onClick={handleGithubClick}
                className={`flex items-center gap-2 py-1 cursor-pointer transition-colors group w-full text-left ${
                  isDarkMode 
                    ? 'hover:text-blue-400' 
                    : 'hover:text-blue-600 text-gray-700'
                }`}
              >
                <Github className="w-4 h-4 group-hover:animate-bounce" />
                <span className="underline decoration-dotted hover:decoration-solid">
                  github.com/derekbolyard
                </span>
              </button>
              <button
                onClick={handleLinkedinClick}
                className={`flex items-center gap-2 py-1 cursor-pointer transition-colors group w-full text-left ${
                  isDarkMode 
                    ? 'hover:text-blue-400' 
                    : 'hover:text-blue-600 text-gray-700'
                }`}
              >
                <Linkedin className="w-4 h-4 group-hover:animate-bounce" />
                <span className="underline decoration-dotted hover:decoration-solid">
                  linkedin.com/in/derekbolyard
                </span>
              </button>
            </div>
            <div className="text-green-500 font-semibold">$ current_projects</div>
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Access Lens, Cancel Widget, Cert Stash</div>
            <div className="text-green-500 font-semibold">$ status</div>
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Building the future, one commit at a time
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-green-500 font-semibold">$ coffee_level</div>
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>OPTIMAL ☕</div>
            <div className="text-green-500 font-semibold">$ _</div>
          </div>
        </div>
      </div>
    </section>
  );
}
