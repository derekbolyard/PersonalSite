import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  styles: Array<{
    id: string;
    name: string;
    component: React.ComponentType;
  }>;
  activeStyle: string;
  onStyleChange: (styleId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ styles, activeStyle, onStyleChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const currentStyleName = styles.find(style => style.id === activeStyle)?.name || 'Choose Your Style';

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopDropdownOpen && !(event.target as Element).closest('.desktop-dropdown')) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [desktopDropdownOpen]);

  const handleStyleSelect = (styleId: string) => {
    onStyleChange(styleId);
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDesktopDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDesktopDropdownOpen(!desktopDropdownOpen);
  };

  const handleBackdropClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
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

          {/* Desktop Navigation */}
          <div className="hidden md:block py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">Design Style Comparison Tool</h1>
              
              {/* Desktop Dropdown */}
              <div className="relative desktop-dropdown">
                <button
                  onClick={toggleDesktopDropdown}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  aria-expanded={desktopDropdownOpen}
                >
                  <span className="mr-2">{currentStyleName}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {desktopDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-500">Choose Design Style</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {styles.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => handleStyleSelect(style.id)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            activeStyle === style.id
                              ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                              : 'text-gray-700'
                          }`}
                        >
                          <div>
                            <div className="font-medium">{style.name}</div>
                            {style.id === 'design-comparison' && (
                              <div className="text-sm text-gray-500 mt-1">Compare all design styles</div>
                            )}
                          </div>
                          {activeStyle === style.id && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
    </>
  );
};

export default Navigation;