import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ZomatoProject } from './pages/ZomatoProject';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default: redirect root to the Zomato project page */}
        <Route path="/" element={<Navigate to="/projects/zomato-delivery" replace />} />
        <Route path="/projects/zomato-delivery" element={<ZomatoProject />} />
        {/* Catch-all: redirect unknown routes to the project page */}
        <Route path="*" element={<Navigate to="/projects/zomato-delivery" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
