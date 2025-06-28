import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import LearnersLodge from './pages/LearnersLodge';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/llx" element={<LearnersLodge />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
