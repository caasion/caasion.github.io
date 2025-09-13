export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    img: string;
}

export default function ProjectCard({ title, description, tags, link, img }: ProjectProps) {
  return (
    <div className="rounded-2xl bg-gray-700 shadow-md hover:shadow-lg transition p-4 mt-5">
      <div className="flex">
        <div className="flex-2/7 p-5 max-w-fit max-h-fit">
          <img src={img} className="object-cover object-left-top w-full h-full"></img>
        </div>
        <div className="flex-5/7">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex gap-2 mt-3 flex-wrap">
            {tags.map((tag: string) => (
              <span key={tag} className="text-sm bg-purple-900 px-2 py-1 rounded-md">{tag}</span>
            ))}
          </div>
          <p className="text-gray-200">{description}</p>
          <div className="mt-2 rounded-2xl bg-purple-800 text-2xl px-4 py-1 w-fit">
            <a href={link} target="_blank">View</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}