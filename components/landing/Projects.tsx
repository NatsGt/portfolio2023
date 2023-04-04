import { Project } from "@/utils/aboutMe"
import PageContainer from "../PageContainer"
import styles from "../../styles/components/projects.module.scss"
import Carousel from "../carousel"
import ProjectCard from "./Project"

interface ProjectsProps {
  data: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <PageContainer background="light" id="projects">
      <div className={styles.projectContainer}>
        <h2 className="basicSubtitle">Projects</h2>
        <div className={styles.projectContainer__projects}>
          <Carousel>
            {data.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </PageContainer>
  )
}

export default Projects
