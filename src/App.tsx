import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PortfolioPage from './pages/PortfolioPage';
import EyeTracker from './components/EyeTracker';
import RetroTerminal from './components/RetroTerminal';
import SpaceExplorer from './components/SpaceExplorer';
import GlitchArt from './components/GlitchArt';
import DoomGame from './components/DoomGame';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PortfolioPage />;
      case 'eyes':
        return <EyeTracker />;
      case 'terminal':
        return <RetroTerminal />;
      case 'glitch':
        return <GlitchArt />;
      case 'space':
        return <SpaceExplorer />;
      case 'doom':
        return <DoomGame />;
      default:
        return <PortfolioPage />;
    }
  };

  return (
    <div className="relative">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;