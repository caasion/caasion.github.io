import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      const path = redirect.replace(window.location.origin, '');
      navigate(path);
    }
  }, []);

  return (
    <div>
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
}


// Add attributions section
// <a href="https://www.vecteezy.com/free-vector/bunny">Bunny Vectors by Vecteezy</a>