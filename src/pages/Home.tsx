import background from '../assets/lovely-sunset.jpg';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`}} className='flex-1 h-full bg-bottom bg-size-[120rem]'>
      <div className='content-wrapper mt-4 mx-10'>
        <div className='from-purple-500/0 to-purple-500/50 bg-linear-to-b mt-72'>
          <h1 className='text-center text-6xl text-bold m-6 pt-4'> 👋 Hi, I'm Isaac!</h1>
          <div className='mx-6 my-3 text-shadow-indigo-300'>
            <p>🌟 I am an engineering student (Systems Design Engineering) at the University of Waterloo who is always curious and learning. I love diving deep into everything I do, from learning languages, programming, and singing to swimming and doing martial arts.</p>
            <p>🌐 I am a highly motivated individual who seeks always to enrich myself. I love learning by doing, as I can create something real while learning from the process. Please check out my projects! </p>
            <p>✨ I am seeking to do work that is meaningful and impact to myself, my community, and the world. As a citizen of the world, I believe that I have the responsibility to do what I can to help others.</p>
          </div>
        </div>
      </div>

      <a className="mx-10 text-gray-500" href="https://www.freepik.com/free-photo/lovely-sunset_1437855.htm#fromView=keyword&page=1&position=2&uuid=477da136-8724-4387-a2cf-a11e107be860&query=Dark+Sunset">Image by BiZkettE1 on Freepik</a>


    </div>
  )
}

export default Home