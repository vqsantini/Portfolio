import { Footer } from "../components/Footer";
import { localDbProjects } from "../components/local-db/local-db-projects";
import { ProjectModels } from "../components/ProjectModels";

export function Projects() {
  return (
    <div >
      <div className="w-screen h-auto bg-white dark:bg-slate-900 pt-16 px-6 md:px-8 lg:px-10 pb-16">
        <div className="flex flex-col justify-center text-center items-center py-20 gap-6">
          <p className="text-5xl text-black dark:text-white font-bold">All Projects</p>
          <p className="text-xl text-slate-600 dark:text-slate-400 ">Explore my complete portfolio of AI and machine learning projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:px-6">
          {
            localDbProjects.map((project) => (
              <ProjectModels key={project.id} title={project.name} description={project.description} image={project.image} tags={project.tags} githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}