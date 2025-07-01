import { useNavigate, useLocation } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <Navigation
        currentPage={location.pathname}
        onPageChange={(path) => navigate(path)}
      />
      <AppRouter />
    </div>
  );
}