import type { ProjectProps } from "../components/ProjectCard"
import ProjectCard from "../components/ProjectCard";

const projectList: ProjectProps[] = [
  {
    title: "Ultimate Planner",
    description:
      "A weekly planning tool built with Svelte, TypeScript, and Esbuild, integrated into Obsidian. Features dynamic templates powered by Svelte 5 reactivity, Markdown-enabled cells via Milkdown, and custom data structures for managing tasks and daily actions.",
    tags: ["Svelte", "TypeScript", "Esbuild", "Obsidian", "Milkdown", "State Management"],
    link: "#",
  },
  {
    title: "AI To-Do List",
    description:
      "An AI-assisted to-do list built with React, TypeScript, and Vite. Uses Firebase to embed a ChatGPT-like assistant that generates tasks and suggests plans based on energy levels, with core task management features and experiments in prompt engineering.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "AI", "Prompt Engineering"],
    link: "#",
  },
  {
    title: "Typing Transformer",
    description:
      "Contributed to an open-source Obsidian plugin with 9,000+ users. Improved plugin stability and performance by refactoring TypeScript and Svelte 5 code, authored clear documentation, and collaborated with maintainers through GitHub issues and PRs.",
    tags: ["Open Source", "TypeScript", "Svelte 5", "GitHub Collaboration", "Documentation"],
    link: "#",
  },
  {
    title: "React Movie App",
    description:
      "A React.js app that integrates with The Movie Database (TMDB) API to fetch and display films. Features reusable components like a movie card and search bar, styled with Tailwind, and exploration of Appwrite for trending search tracking.",
    tags: ["React", "TMDB API", "TailwindCSS", "Appwrite", "Frontend Development"],
    link: "#",
  },
  {
    title: "Learner’s Lodge",
    description:
      "A high school club I founded to explore effective learning strategies and build a community of learners. Organized biweekly workshops on memory, focus, and study techniques inspired by neuroscience, reaching 30+ students with positive feedback.",
    tags: ["Leadership", "Workshops", "Community Building", "Education", "Neuroscience"],
    link: "#",
  },
];


const Projects = () => {
  return (
    <div className='mt-16 mx-60'>
      <h1 className='text-6xl text-bold pt-4'>Projects</h1>
      {projectList.map(({title, description, tags, link}) => (
        <ProjectCard title={title} description={description} tags={tags} link={link} />
      ))}
    </div>
  )
}

export default Projects