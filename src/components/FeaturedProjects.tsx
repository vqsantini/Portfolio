import { ProjectModels } from "./ProjectModels";
import { localDbProjects } from "./local-db/local-db-projects";

export function FeaturedProjects() {
  return (
    <div className="w-screen h-auto bg-slate-50 dark:bg-slate-950 justify-center items-center">
      <div className="text-center pt-20 pb-12">
        <p className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100 transition-colors">Featured Projects</p>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 mx-auto transition-colors">A selection of my recent AI and machine learning projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:px-6">
        {
          localDbProjects.map((project) => (
            <ProjectModels key={project.id} title={project.name} description={project.description} image={project.image} tags={project.tags} githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
          ))}
      </div >
    </div>
  );
}