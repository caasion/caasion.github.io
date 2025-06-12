const projects = [
    {
      title: "Focused vs. Diffuse Mode",
      desc: "Working smarter to understand and problem-solve with ease.",
      img: "images/Wider Stars_BG LL.PNG",
      style: "style1",
      link: "https://docs.google.com/presentation/d/1XyvmcKJ2eZuh-LyisaNak5I9wvszcpmEvFeeteBK4OU/edit?usp=sharing"
    },
    {
      title: "Procrastination",
      desc: "How do we tackle procrastination?",
      img: "images/DD2 Procrastination (no text).JPG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1Of-KP_I_zt6c0SwazYmzFRZAEq8prr2oYPYySx-oX7Y/edit?usp=sharing"
    },
    {
      title: "Memory",
      desc: "What is memory? How does it relate to learning?",
      img: "images/DD3 Memory (no text).JPG",
      style: "style3",
      link: "https://docs.google.com/presentation/d/1K2GTAXS89FmA-6saetV-kkoxTSGueb85Y3stwpf4-Dw/edit?usp=sharing"
    },
    {
      title: "Spaced Repetition and Active Recall",
      desc: "Two strategies to take advantage of how our memory works.",
      img: "images/DD4 SR&AR (no text).JPG",
      style: "style4",
      link: "https://docs.google.com/presentation/d/134buObFhVud6HXMNdI6ZAU2vJ0TuwCko9QHHkqTV_Qg/edit?usp=sharing"
    },
    {
      title: "Exam Study Strategies",
      desc: "How do you organize your studies during exam periods?",
      img: "images/DD5 Exam Tips (no text).PNG",
      style: "style5",
      link: "https://docs.google.com/presentation/d/112fkCsbLYxQpq3FG0c58sy10SSGaj8qPLY1ZQc24ego/edit?usp=sharing"
    },
    {
      title: "Sleep and the Brain",
      desc: "What is the role that sleep plays in learning? What is the brain doing during sleep?",
      img: "images/DD7 Sleep & The Brain (no text).JPG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1R8A7KghwskNrbNyMhlwKwL5-0Tejvts4wD-g8MY9zfI/edit?usp=sharing"
    },
    {
      title: "The Learning Mindset",
      desc: "What we think about our abilities matter. How do we cultivate a positive learning mindset?",
      img: "images/DD8 Learning Mindset (no text).JPG",
      style: "style3",
      link: "https://docs.google.com/presentation/d/1fd7wuNqH1PwXYOIuFXrOYirqbGL1ZxA6rXzuVjyzuYQ/edit?usp=sharing"
    },
    {
      title: "Developing a Skill",
      desc: "What should we do when trying to develop a skill? What should we not do?",
      img: "images/DD9 Math Skills (no text).JPG",
      style: "style1",
      link: "https://docs.google.com/presentation/d/1ftw2Aljk-HZ3FJCKYqoxGIxkrTCGnubTyP7MuKcbT6k/edit?usp=sharing"
    },
    {
      title: "Effective Language learning: The Basics",
      desc: "How do you approach learning a language effectively?",
      img: "images/DD10 Langauge Learning (no text).JPG",
      style: "style5",
      link: "https://docs.google.com/presentation/d/1iXKzkXowUogg0MzhzUSLD_1_wGSG6JLcvNx28RPW53c/edit?usp=sharing"
    },
    {
      title: "Mastering Language Learning: Beyond the Basics",
      desc: "How do you progress after gaining basic proficiency in a language?",
      img: "images/Wider Stars_BG LL.PNG",
      style: "style2",
      link: "https://docs.google.com/presentation/d/1NDDKJtJE0RM71Pcmo91-TSKKtWY879GJE23NeE1k6Qg/edit?usp=sharing"
    },
    {
      title: "Working as a Team & Learning Disabilities",
      desc: "How can we learn better by working with others? How can learning disabilities affect our learning?",
      img: "images/Wider Stars_BG LL.PNG",
      style: "style6",
      link: "https://docs.google.com/presentation/d/18_8uXZs5-GQRgTgJgdHsqeZVMHWK6RHYj8zIBj_e2v4/edit?usp=sharing"
    },
    {
      title: "Chunking",
      desc: "A strategy to optimize our memory.",
      img: "images/Wider Stars_BG LL.PNG",
      style: "style4",
      link: "https://docs.google.com/presentation/d/1NGxtdHEQZ7QXxotquw15jgc5vJhdGnoTVpgFgFS0DOU/edit?usp=sharing"
    }
  ];
  

  const container = document.getElementById("deep-dives");

  console.log("hi")

  projects.forEach(project => {
    container.innerHTML += `
<article class="${project.style}">
    <span class="image">
        <img src="${project.img}" alt="" />
    </span>
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <h2>${project.title}</h2>
        <div class="content">
            <p>${project.desc}</p>
        </div>
    </a>
</article>
    `;
  })
