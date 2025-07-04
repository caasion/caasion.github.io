import llxLogo from '../assets/learners-lodge-logo.png';

const IMG_PREFIX = "/llx/"

const projects = [
    {
      title: "Focused vs. Diffuse Mode",
      desc: "Working smarter to understand and problem-solve with ease.",
      img: "learners-lodge-logo.PNG",
      style: "style1",
      link: "https://docs.google.com/presentation/d/1XyvmcKJ2eZuh-LyisaNak5I9wvszcpmEvFeeteBK4OU/edit?usp=sharing"
    },
    {
      title: "Procrastination",
      desc: "How do we tackle procrastination?",
      img: "DD2 Procrastination (no text).JPG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1Of-KP_I_zt6c0SwazYmzFRZAEq8prr2oYPYySx-oX7Y/edit?usp=sharing"
    },
    {
      title: "Memory",
      desc: "What is memory? How does it relate to learning?",
      img: "DD3 Memory (no text).JPG",
      style: "style3",
      link: "https://docs.google.com/presentation/d/1K2GTAXS89FmA-6saetV-kkoxTSGueb85Y3stwpf4-Dw/edit?usp=sharing"
    },
    {
      title: "Spaced Repetition and Active Recall",
      desc: "Two strategies to take advantage of how our memory works.",
      img: "DD4 SR&AR (no text).JPG",
      style: "style4",
      link: "https://docs.google.com/presentation/d/134buObFhVud6HXMNdI6ZAU2vJ0TuwCko9QHHkqTV_Qg/edit?usp=sharing"
    },
    {
      title: "Exam Study Strategies",
      desc: "How do you organize your studies during exam periods?",
      img: "DD5 Exam Tips (no text).PNG",
      style: "style5",
      link: "https://docs.google.com/presentation/d/112fkCsbLYxQpq3FG0c58sy10SSGaj8qPLY1ZQc24ego/edit?usp=sharing"
    },
    {
      title: "Sleep and the Brain",
      desc: "What is the role that sleep plays in learning? What is the brain doing during sleep?",
      img: "DD7 Sleep & The Brain (no text).JPG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1R8A7KghwskNrbNyMhlwKwL5-0Tejvts4wD-g8MY9zfI/edit?usp=sharing"
    },
    {
      title: "The Learning Mindset",
      desc: "What we think about our abilities matter. How do we cultivate a positive learning mindset?",
      img: "DD8 Learning Mindset (no text).JPG",
      style: "style3",
      link: "https://docs.google.com/presentation/d/1fd7wuNqH1PwXYOIuFXrOYirqbGL1ZxA6rXzuVjyzuYQ/edit?usp=sharing"
    },
    {
      title: "Developing a Skill",
      desc: "What should we do when trying to develop a skill? What should we not do?",
      img: "DD9 Math Skills (no text).JPG",
      style: "style1",
      link: "https://docs.google.com/presentation/d/1ftw2Aljk-HZ3FJCKYqoxGIxkrTCGnubTyP7MuKcbT6k/edit?usp=sharing"
    },
    {
      title: "Effective Language learning: The Basics",
      desc: "How do you approach learning a language effectively?",
      img: "DD10 Langauge Learning (no text).JPG",
      style: "style5",
      link: "https://docs.google.com/presentation/d/1iXKzkXowUogg0MzhzUSLD_1_wGSG6JLcvNx28RPW53c/edit?usp=sharing"
    },
    {
      title: "Mastering Language Learning: Beyond the Basics",
      desc: "How do you progress after gaining basic proficiency in a language?",
      img: "learners-lodge-logo.PNG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1NDDKJtJE0RM71Pcmo91-TSKKtWY879GJE23NeE1k6Qg/edit?usp=sharing"
    },
    {
      title: "Working as a Team & Learning Disabilities",
      desc: "How can we learn better by working with others? How can learning disabilities affect our learning?",
      img: "learners-lodge-logo.PNG",
      style: "style6",
      link: "https://docs.google.com/presentation/d/18_8uXZs5-GQRgTgJgdHsqeZVMHWK6RHYj8zIBj_e2v4/edit?usp=sharing"
    },
    {
      title: "Chunking",
      desc: "A strategy to optimize our memory.",
      img: "learners-lodge-logo.PNG",
      style: "style4",
      link: "https://docs.google.com/presentation/d/1NGxtdHEQZ7QXxotquw15jgc5vJhdGnoTVpgFgFS0DOU/edit?usp=sharing"
    }
  ];

const LearnersLodge = () => {
  return (
    <div className='m-10'>
      <h1 className='text-center text-6xl text-bold pt-4'> Welcome to Learner's Lodge!</h1>
      <h2 className='text-center text-4xl text-bold pt-4'>Review, Rethink, Remember</h2>

      <div className="info-container flex py-6">
        <div className="info-logo w-1/6 mr-6" >
          <img src={llxLogo} />
        </div>
        <div className="info-description w-5/6">
          <p>💡 Learner's Lodge is a place where you can find like-minded individuals who are serious about their learning. We aim to use science-based techniques, from psychology and neuroscience, to explain how you can learn best.</p>
          
          <p>🌐 Learner's Lodge was a club that I, along with my friends Erika and Gordon, established in high school. This page is an archive of our knowledge. We hope that this will be useful! </p>

          <p>🎨 All artwork is by <a href="https://www.instagram.com/eri.lw/" className='text-cyan-500'>Erika</a>, and is used with her permission.</p>
        </div>
        
      </div>

      <div className='bg-[#002127] p-4'>
        <div>
          <h2 className='text-3xl font-bold mx-5 my-4'>Deep Dives</h2>
        </div>

        <div className="lessons-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-30">
          {projects.map(({ title, desc, img, style, link }, index) => (
            <a
              key={index}
              href={link}
              className="block w-96 sm:w-96 h-96 relative group overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image Layer */}
              <img
                src={IMG_PREFIX + img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-75"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 top-20 flex flex-col items-center justify-center text-white text-center z-10 px-4 group-hover:-translate-y-8 duration-500 ease-in-out">
                <h3 className="text-xl font-bold text-shadow-md text-shadow-black">{title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-sm mt-2">
                  {desc}
                </p>
              </div>

              {/* Optional black overlay for better contrast */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 z-0" />

              {style}
            </a>
          ))}
        </div>
      </div>

      

    </div>
  )
}

export default LearnersLodge