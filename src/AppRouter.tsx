// src/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioPage   from './pages/PortfolioPage';
import ServicesPage    from './pages/ServicesPage';
import EyeTracker      from './components/EyeTracker';
import RetroTerminal   from './components/RetroTerminal';
import SpaceExplorer   from './components/SpaceExplorer';
import GlitchArt       from './components/GlitchArt';
import DoomGame        from './components/DoomGame';
import DesignToolApp   from './DesignToolApp';

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/"          element={<PortfolioPage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/eyes"      element={<EyeTracker   />} />
        <Route path="/terminal"  element={<RetroTerminal />} />
        <Route path="/glitch"    element={<GlitchArt     />} />
        <Route path="/space"     element={<SpaceExplorer />} />
        <Route path="/doom"      element={<DoomGame      />} />
        <Route path="/design"    element={<DesignToolApp />} />
        {/* add 404 fallback if you like */}
      </Routes>
  );
}