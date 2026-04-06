import { Github, ExternalLink } from "lucide-react";

interface ProjectModelsProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
}

export function ProjectModels({ title, description, image, tags, githubUrl, liveUrl }: ProjectModelsProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col">
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(tags ?? []).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-sm rounded-full border border-emerald-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Github className="size-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="size-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}