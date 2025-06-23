import { useNavigate, useLocation } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation';

export default function App() {
  const navigate  = useNavigate();
  const location  = useLocation();

  return (
    <div className="relative">
      <Navigation
        currentPage={location.pathname}          // "/eyes", "/design", …
        onPageChange={(path) => navigate(path)}  // wrapper around router nav
      />
      <AppRouter />
    </div>
  );
}