import { FeaturedProjects } from "../components/FeaturedProjects";
import { Introduction } from "../components/Introduction";

export function Home() {
  return(
    <div className="w-screen h-auto pt-16">
      <Introduction />
      <FeaturedProjects />
    </div>
  )
}