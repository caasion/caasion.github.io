import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1>Home Page</h1>
      <a href="/llx">Go to Learners Lodge</a>
    </div>
  );
}
