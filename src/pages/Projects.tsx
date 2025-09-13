import type { ProjectProps } from "../components/ProjectCard"
import ProjectCard from "../components/ProjectCard";
import llx from "../assets/learners-lodge-logo.png";
import aiTodoList from "../assets/ai-todo-list.png";
import reactMovieApp from "../assets/react-movie-app.png";
import typingTransformer from "../assets/typing-transformer.png";
import ultimatePlanner from "../assets/obsidian-ultimate-planner.png";

const projectList: ProjectProps[] = [
  {
    title: "Ultimate Planner",
    description:
      "A weekly planning tool built with Svelte, TypeScript, and Esbuild, integrated into Obsidian. Features dynamic templates powered by Svelte 5 reactivity, Markdown-enabled cells via Milkdown, and custom data structures for managing tasks and daily actions.",
    tags: ["Svelte", "TypeScript", "Esbuild", "Obsidian", "Milkdown", "State Management"],
    link: "https://github.com/caasion/obsidian-ultimate-planner",
    img: ultimatePlanner,
  },
  {
    title: "AI To-Do List",
    description:
      "An AI-assisted to-do list built with React, TypeScript, and Vite. Uses Firebase to embed a ChatGPT-like assistant that generates tasks and suggests plans based on energy levels, with core task management features and experiments in prompt engineering.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "AI", "Prompt Engineering"],
    link: "https://github.com/caasion/ai-todo-list",
    img: aiTodoList,
  },
  {
    title: "Typing Transformer",
    description:
      "Contributed to an open-source Obsidian plugin with 9,000+ users. Improved plugin stability and performance by refactoring TypeScript and Svelte 5 code, authored clear documentation, and collaborated with maintainers through GitHub issues and PRs.",
    tags: ["Open Source", "TypeScript", "Svelte 5", "GitHub Collaboration", "Documentation"],
    link: "https://github.com/aptend/typing-transformer-obsidian",
    img: typingTransformer,
  },
  {
    title: "React Movie App",
    description:
      "A React.js app that integrates with The Movie Database (TMDB) API to fetch and display films. Features reusable components like a movie card and search bar, styled with Tailwind, and exploration of Appwrite for trending search tracking.",
    tags: ["React", "TMDB API", "TailwindCSS", "Appwrite", "Frontend Development"],
    link: "https://github.com/caasion/react-movie-app",
    img: reactMovieApp,
  },
  {
    title: "Learner's Lodge",
    description:
      "A high school club I founded to explore effective learning strategies and build a community of learners. Organized biweekly workshops on memory, focus, and study techniques inspired by neuroscience, reaching 30+ students with positive feedback.",
    tags: ["Leadership", "Workshops", "Community Building", "Education", "Neuroscience"],
    link: "/llx",
    img: llx,
  },
];


const Projects = () => {
  return (
    <div className='mt-16 mx-60'>
      <h1 className='text-6xl text-bold py-4'>Projects</h1>
      <div className="flex-col row-gap-4">
        {projectList.map(({title, description, tags, link, img}) => (
          <ProjectCard title={title} description={description} tags={tags} link={link} img={img}/>
        ))}
      </div>
      
    </div>
  )
}

export default Projects