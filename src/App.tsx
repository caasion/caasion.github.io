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
      <header className='bg-gray-700'>
        <div className='flex items-center justify-between mx-6'>
            <div className='m-4'><h1 className='text-4xl'>Isaac Ng</h1></div>
          <nav className='flex'>
            <div><h2>About Me</h2></div>
            <div><h2>Projects</h2></div>
              <a href="/llx">Go to Learners Lodge</a>
            <div><h2>Passions</h2></div>
            <div><h2>Blog</h2></div>
          </nav>
          <div className=''><h2>Contact Me!</h2></div>
        </div>
      </header>

      <div className='content-wrapper mt-4 mx-10'>
        <div className='bg-purple-500/50'>
          <h1 className='text-center text-6xl text-bold m-6'> 👋 Hi, I'm Isaac!</h1>
          <div className='m-6 text-shadow-indigo-300'>
            <p>🌟 I am a recent high school graduate who is always curious and learning. I love diving deep into everything I do, from learning languages, programming, and singing to swimming and doing martial arts.</p>
            <p>🌐 I am a highly motivated individual who seeks always to enrich myself. Despite not having taken computer science courses in high school, I am currently learning Java and web development with ReactJS and tailwindCSS by building and creating projects. </p>
            <p>✨ I am seeking to do work that is meaningful and impact to myself, my community, and the world. As a citizen of the world, I believe that I have the responsibility to do what I can to help others.</p>
          </div>
        
        </div>
        
      </div>

      <footer className='bg-gray-700'>
        <div className='flex '>
          <div className='footer-container'>
            <h2>Isaac Ng</h2>
            <p>Graduated High School Student</p>
          </div>
          <div className='footer-container'>
            <h2>Contacts</h2>
            <p><b>Email:</b> isaacngcaasi@gmail.com</p>
            <p><b>Discord:</b> caasi.bun</p>
          </div>
          <div className='footer-container'>
            <button className='socials-button' type="button"><</button>
          </div>
        </div>
      </footer>
      
    </div>
  );
}


// Add attributions section
// <a href="https://www.vecteezy.com/free-vector/bunny">Bunny Vectors by Vecteezy</a>