import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NeoBrutalism from './designtool-components/NeoBrutalism';
import CleanLab from './designtool-components/CleanLab';
import HumanCentric from './designtool-components/HumanCentric';
import DataMinimalism from './designtool-components/DataMinimalism';
import ProfessionalBrutalism from './designtool-components/ProfessionalBrutalism';
import RefinedBrutalism from './designtool-components/RefinedBrutalism';
import FriendlyApproachable from './designtool-components/FriendlyApproachable';
import DesignComparison from './designtool-components/DesignComparison';
import './design-tool.css'; // Import scoped styles

function DesignToolApp() {
  const [activeStyle, setActiveStyle] = useState('design-comparison');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const styles = [
    { id: 'design-comparison', name: '🎨 Choose Your Style', component: DesignComparison },
    { id: 'friendly-approachable', name: 'Friendly & Approachable', component: FriendlyApproachable },
    { id: 'professional-brutalism', name: 'Professional Brutalism', component: ProfessionalBrutalism },
    { id: 'refined-brutalism', name: 'Refined Brutalism', component: RefinedBrutalism },
    { id: 'clean-lab', name: 'Clean Lab', component: CleanLab },
    { id: 'neo-brutalism', name: 'Neo-Brutalism', component: NeoBrutalism },
    { id: 'human-centric', name: 'Human-Centric', component: HumanCentric },
    { id: 'data-minimalism', name: 'Data Minimalism', component: DataMinimalism },
  ];

  // Listen for navigation events from the design comparison
  useEffect(() => {
    const handleNavigateToStyle = (event: any) => {
      setActiveStyle(event.detail);
      setMobileMenuOpen(false); // Close mobile menu when navigating
    };

    window.addEventListener('navigate-to-style', handleNavigateToStyle);
    return () => window.removeEventListener('navigate-to-style', handleNavigateToStyle);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const ActiveComponent = styles.find(style => style.id === activeStyle)?.component || DesignComparison;
  const currentStyleName = styles.find(style => style.id === activeStyle)?.name || 'Choose Your Style';

  const handleStyleSelect = (styleId: any) => {
    setActiveStyle(styleId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = (e: any) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  const handleBackdropClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="design-tool-container min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Navigation */}
          <div className="flex items-center justify-between py-4 md:hidden">
            <div className="flex items-center min-w-0 flex-1">
              <h1 className="text-lg font-bold text-gray-900 truncate">Design Styles</h1>
            </div>
            <div className="relative">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation - Fixed overflow */}
          <div className="hidden md:block py-4">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-2" style={{ minWidth: 'max-content' }}>
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setActiveStyle(style.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm lg:text-base flex-shrink-0 ${
                      activeStyle === style.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={handleBackdropClick}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Design Styles</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Current Style Indicator */}
              <div className="px-4 py-3 bg-blue-50 border-b border-gray-100">
                <p className="text-sm font-medium text-blue-600">Current Style</p>
                <p className="text-base font-semibold text-gray-900 truncate">{currentStyleName}</p>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="py-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => handleStyleSelect(style.id)}
                      className={`w-full text-left px-4 py-4 hover:bg-gray-50 transition-colors border-l-4 ${
                        activeStyle === style.id
                          ? 'bg-blue-50 text-blue-700 border-blue-600 font-medium'
                          : 'text-gray-700 border-transparent hover:border-gray-200'
                      }`}
                    >
                      <div className="font-medium text-base">{style.name}</div>
                      {style.id === 'design-comparison' && (
                        <div className="text-sm text-gray-500 mt-1">Compare all design styles</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Style Component */}
      <ActiveComponent />
    </div>
  );
}

export default DesignToolApp;