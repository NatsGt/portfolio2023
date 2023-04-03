import { Icon } from "@/components/icons"
import { Project, Skill } from "@/utils/aboutMe"
import { skillIcon } from "@/utils/icons"
import Image from "next/image"
import styles from "../../../styles/components/projectcard.module.scss"
import { IconGithub, IconWeb } from "@/components/icons/icons"
import { capitalize } from "@/utils/string"

interface ProjectProp {
  data: Project
}

const ProjectCard: React.FC<ProjectProp> = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images${data.image}`}
          fill
          style={{ objectFit: "cover" }}
          alt="Image of Wult website"
        />
      </div>
      <div className={styles.projectData}>
        <div className={styles.projectData__text}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className={styles.link}>
            {data.links.map((link) => {
              return (
                <div key={link.id} className={styles.oneLink}>
                  <Icon icon={link.type === "url" ? IconWeb : IconGithub} />
                  <a href={link.link} target="_blank">
                    {link.type === "url" ? "Website" : "Repository"}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.technologies}>
          <h4>Technologies used</h4>
          <div className={styles.list}>
            {data.technologies.map((item, index) => {
              return (
                <div key={index} className={styles.technology}>
                  <Icon icon={skillIcon(item)} color="white" />
                  {capitalize(item)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
