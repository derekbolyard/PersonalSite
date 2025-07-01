// src/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioPage   from './pages/PortfolioPage';
import ServicesPage    from './pages/ServicesPage';
import DesignToolApp   from './DesignToolApp';

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/"          element={<PortfolioPage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/design"    element={<DesignToolApp />} />
        {/* add 404 fallback if you like */}
      </Routes>
  );
}