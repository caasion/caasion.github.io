import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50); // Adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-100 transition-colors duration-300 ${isSolid ? 'bg-gray-900' : 'bg-transparent'} min-w-screen`}>
      <div className='flex items-center justify-between mx-6'>
        <div className='m-4'><h1 className='text-2xl'>Isaac Ng</h1></div>
        <nav className='flex'>
          <div><h2 className='nav-header'><a href="/">About Me</a></h2></div>
          <div><h2 className='nav-header'><a href="/projects">Projects</a></h2></div>
          <div><h2 className='nav-header'><a href="/passions">Passions</a></h2></div>
        </nav>
        <div className=''><h2>Contact Me!</h2></div>
      </div>
    </header>
  );
};

export default NavBar;