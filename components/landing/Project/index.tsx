import { Icon } from "@/components/icons"
import { Skill } from "@/utils/aboutMe"
import { skillIcon } from "@/utils/icons"
import Image from "next/image"
import styles from "../../../styles/components/projectcard.module.scss"
import { IconWeb } from "@/components/icons/icons"

const ProjectCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/wult_website.png"}
          fill
          style={{ objectFit: "contain" }}
          alt="Image of Wult website"
        />
      </div>
      <div className={styles.projectData}>
        <div className={styles.projectData__text}>
          <h3>Project title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae ultrices mauris
            consectetur cursus. Nullam ullamcorper ante fringilla sapien. Vitae
            egestas at scelerisque gravida.
          </p>
          <div className={styles.link}>
            <Icon icon={IconWeb} />
            <a>www.google.com</a>
          </div>
        </div>
        <div className={styles.technologies}>
          <h4>Technologies used</h4>
          <div className={styles.technology}>
            <Icon icon={skillIcon(Skill.REACT)} color="white" />
            React
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
