import { Skill, Skills } from "@/utils/aboutMe"
import { IconHtml5 } from "../icons/icons"
import { IconCss3 } from "../icons/icons"
import { IconJavascript } from "../icons/icons"
import { IconTypescript } from "../icons/icons"
import { IconReact } from "../icons/icons"
import { IconGithub } from "../icons/icons"
import { IconNextjs } from "../icons/icons"
import { IconSass } from "../icons/icons"
import { IconBxlPostgresql } from "../icons/icons"
import { IconDatadog } from "../icons/icons"
import { Icon } from "../icons"
import styles from "../../styles/components/skills.module.scss"
import PageContainer from "../PageContainer"

type SkillsProps = {
  description: string
  skills: Skills[]
}

const Skills: React.FC<SkillsProps> = ({ description, skills }) => {
  const skillIcon = (skill: string): React.ElementType => {
    switch (skill) {
      case Skill.HTML:
        return IconHtml5
      case Skill.CSS:
        return IconCss3
      case Skill.JAVASCRIPT:
        return IconJavascript
      case Skill.TYPESCRIPT:
        return IconTypescript
      case Skill.REACT:
        return IconReact
      case Skill.GITHUB:
        return IconGithub
      case Skill.NEXT:
        return IconNextjs
      case Skill.SASS:
        return IconSass
      case Skill.SQL:
        return IconBxlPostgresql
      default:
        return IconDatadog
    }
  }
  return (
    <PageContainer id="skills" background="dark">
      <div className={styles.skills}>
        <h2 className="basicSubtitle">Skills</h2>
        <div className={styles.description}>{description}</div>
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
