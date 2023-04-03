import {
  IconBxlPostgresql,
  IconCss3,
  IconDatadog,
  IconGithub,
  IconHtml5,
  IconJavascript,
  IconLinkedin,
  IconMail,
  IconNextjs,
  IconReact,
  IconSass,
  IconTypescript,
} from "@/components/icons/icons"
import { ContactName, Skill } from "./aboutMe"

export const contactIcon = (name: string): React.ElementType => {
  switch (name) {
    case ContactName.LINKEDIN:
      return IconLinkedin
    case ContactName.GITHUB:
      return IconGithub
    case ContactName.MAIL:
      return IconMail
    default:
      return IconDatadog
  }
}

export const skillIcon = (skill: string): React.ElementType => {
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
    case Skill.REACTNATIVE:
      return IconReact
    default:
      return IconDatadog
  }
}
