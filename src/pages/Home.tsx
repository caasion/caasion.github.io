import { useRef } from 'react';
import background from '../assets/lovely-sunset.jpg';
import portrait from '../assets/front-potrait.jpg';

const Home = () => {
  const ref = useRef(null);

  const scrollToContent = (ref: any) => {
      window.scrollTo({
        top: ref.offsetTop - 64,
        left: 0,
        behavior: "smooth"
      })
  }

  return (
    <div>
      <div 
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh'}} 
        className='h-full bg-top relative'
      >
        <div className='content-wrapper flex min-h-screen items-center justify-center'>
          <div className="text-center flex-col">
            <h1 className='text-center text-6xl text-bold'> 👋 Hi, I'm Isaac!</h1>
            <p >Welcome to my website!</p>
            <button onClick={() => scrollToContent(ref.current)}>Scroll Down</button>
          </div>
        </div>
      </div>
    
      <div className="flex mx-60">
        <div className='bg-purple-900/60 flex-2/3 mx-5' ref={ref}>
          <div className='mx-6 my-3 text-shadow-indigo-300'>
            <p>🌟 I am an engineering student (Systems Design Engineering) at the University of Waterloo. I am always curious and learning. I love diving deep into everything I do, from learning languages, programming, and singing to swimming and doing martial arts.</p>
            <p>🌐 I am a highly motivated individual who seeks always to enrich myself. I love learning by doing, as I can create something real while learning from the process. Please check out my projects! </p>
            <p>🎉 I love learning languages, programming, singing, swimming, doing marital arts, and baking!</p>
            <p>✨ I am seeking to do work that is meaningful and impact to myself, my community, and the world. As a citizen of the world, I believe that I have the responsibility to do what I can to help others.</p>
            <p>✉️ If you're interested in chatting, feel free to reach out through discord, email, Instagram, or linked in.</p>
          </div>
        </div>
        <div className="flex-1/3">
          <img src={portrait}></img>
        </div>
      </div>
    </div>
  )
}

export default Home