import { projects } from "../data"
import ProjectsCard from "./ProjectsCard"
import SectionTitle from "./SectionTitle"

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle title="My Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map(project => {
          return (
            <ProjectsCard key={project.id} {...project} />
          )
        })}

      </div>
    </section>
  )
}

export default Projects