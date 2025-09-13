export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition p-4">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag: string) => (
            <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded-md">{tag}</span>
          ))}
        </div>
        <div className="mt-4">
          <a href={link} target="_blank">View</a>
        </div>
      </div>
    </div>
  )
}