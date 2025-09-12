import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home';
import LearnersLodge from './pages/LearnersLodge';
import Blog from './pages/Blog';
import Passions from './pages/Passions';
import Projects from './pages/Projects'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="llx" element={<LearnersLodge />} />
          <Route path="blog" element={<Blog />} />
          <Route path="passions" element={<Passions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
