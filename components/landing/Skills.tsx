import { Skills } from "@/utils/aboutMe"
import { Icon } from "../icons"
import styles from "../../styles/components/skills.module.scss"
import PageContainer from "../PageContainer"
import { skillIcon } from "@/utils/icons"

type SkillsProps = {
  description: string
  skills: Skills[]
}

const Skills: React.FC<SkillsProps> = ({ description, skills }) => {
  return (
    <PageContainer id="skills" background="dark">
      <div className={styles.skills}>
        <h2 className="basicSubtitle">Skills</h2>
        <div className={`${styles.description} basicDescription`}>
          {description}
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((item) => (
            <div key={item.id} className={styles.oneSkill}>
              <Icon icon={skillIcon(item.name)} color="white" />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default Skills
