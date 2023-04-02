import PageContainer from "../PageContainer"
import ProjectCard from "./Project"

const Projects = () => {
  return (
    <PageContainer background="light" id="projects">
      <div>
        <h2 className="basicSubtitle">Projects</h2>
        <ProjectCard />
      </div>
    </PageContainer>
  )
}

export default Projects
