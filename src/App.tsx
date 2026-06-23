import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ZomatoProject } from './pages/ZomatoProject';
import { AirportProject } from './pages/AirportProject';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Root: portfolio homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/zomato-delivery" element={<ZomatoProject />} />
        <Route path="/projects/airport-amr" element={<AirportProject />} />
        {/* Catch-all: redirect unknown routes to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
