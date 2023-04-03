import { Project } from "@/utils/aboutMe"
import PageContainer from "../PageContainer"
import ProjectCard from "./Project"

interface ProjectsProps {
  data: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <PageContainer background="light" id="projects">
      <div>
        <h2 className="basicSubtitle">Projects</h2>
        <div>
          {/* {data.map((item) => (
            <ProjectCard data={item} key={item.id} />
          ))} */}
          <ProjectCard data={data[0]} />
        </div>
      </div>
    </PageContainer>
  )
}

export default Projects
