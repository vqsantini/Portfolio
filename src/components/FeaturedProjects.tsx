import { ProjectModels } from "./ProjectModels";
import { localDbProjects } from "./local-db/local-db-projects";

export function FeaturedProjects() {
  return (
    <div className="w-full h-auto bg-slate-50 dark:bg-slate-950 pb-16 md:pb-20">
      <div className="text-center pt-12 md:pt-20 pb-8 md:pb-12 px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-slate-100 transition-colors">Featured Projects</p>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto transition-colors">A selection of my recent AI and machine learning projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {
          localDbProjects.filter((project) => [1, 2, 3].includes(project.id)).map((project) => (
            <ProjectModels key={project.id} title={project.name} description={project.description} image={project.image} tags={project.tags} githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
          ))}
      </div >
    </div>
  );
}