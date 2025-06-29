import React, { useState, useEffect } from 'react';
import NeoBrutalism from './designtool-components/NeoBrutalism';
import CleanLab from './designtool-components/CleanLab';
import HumanCentric from './designtool-components/HumanCentric';
import DataMinimalism from './designtool-components/DataMinimalism';
import ProfessionalBrutalism from './designtool-components/ProfessionalBrutalism';
import RefinedBrutalism from './designtool-components/RefinedBrutalism';
import FriendlyApproachable from './designtool-components/FriendlyApproachable';
import ModernMinimalist from './designtool-components/ModernMinimalist';
import PlayfulWhimsical from './designtool-components/PlayfulWhimsical';
import SleekDarkMode from './designtool-components/SleekDarkMode';
import EightiesRetro from './designtool-components/EightiesRetro';
import EditorialLayout from './designtool-components/EditorialLayout';
import VSCodeStyle from './designtool-components/VSCodeStyle';
import DesignComparison from './designtool-components/DesignComparison';
import Navigation from './designtool-components/Navigation';
import './design-tool.css'; // Import scoped styles


function DesignToolApp() {
  const [activeStyle, setActiveStyle] = useState('design-comparison');

  const styles = [
    { id: 'design-comparison', name: '🎨 Choose Your Style', component: DesignComparison },
    { id: 'friendly-approachable', name: 'Friendly & Approachable', component: FriendlyApproachable },
    { id: 'professional-brutalism', name: 'Professional Brutalism', component: ProfessionalBrutalism },
    { id: 'refined-brutalism', name: 'Refined Brutalism', component: RefinedBrutalism },
    { id: 'clean-lab', name: 'Clean Lab', component: CleanLab },
    { id: 'neo-brutalism', name: 'Neo-Brutalism', component: NeoBrutalism },
    { id: 'human-centric', name: 'Human-Centric', component: HumanCentric },
    { id: 'data-minimalism', name: 'Data Minimalism', component: DataMinimalism },
    { id: 'modern-minimalist', name: 'Modern Minimalist', component: ModernMinimalist },
    { id: 'playful-whimsical', name: 'Playful & Whimsical', component: PlayfulWhimsical },
    { id: 'sleek-dark-mode', name: 'Sleek Dark Mode', component: SleekDarkMode },
    { id: 'eighties-retro', name: '80s Retro', component: EightiesRetro },
    { id: 'editorial-layout', name: 'Editorial/Magazine', component: EditorialLayout },
    { id: 'vscode-style', name: 'VS Code Style', component: VSCodeStyle },
  ];

  // Listen for navigation events from the design comparison
  useEffect(() => {
    const handleNavigateToStyle = (event: any) => {
      setActiveStyle(event.detail);
    };

    window.addEventListener('navigate-to-style', handleNavigateToStyle);
    return () => window.removeEventListener('navigate-to-style', handleNavigateToStyle);
  }, []);

  const ActiveComponent = styles.find(style => style.id === activeStyle)?.component || DesignComparison;

  const handleStyleSelect = (styleId: any) => {
    setActiveStyle(styleId);
  };

  return (
    <div className="design-tool-container min-h-screen bg-gray-50">
      <Navigation 
        styles={styles}
        activeStyle={activeStyle}
        onStyleChange={handleStyleSelect}
      />

      {/* Active Style Component */}
      <ActiveComponent />
    </div>
  );
}

export default DesignToolApp;