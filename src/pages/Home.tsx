import { Contact } from "../components/Contact";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Footer } from "../components/Footer";
import { Introduction } from "../components/Introduction";

export function Home() {
  return(
    <div className="w-screen h-auto pt-16">
      <Introduction />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  )
}