import { Skills } from "@/utils/aboutMe"

type SkillsProps = {
  description: string
  skills: Skills[]
}

const Skills: React.FC<SkillsProps> = ({ description, skills }) => {
  return (
    <div id="about">
      <h2>About</h2>
      <div>{description}</div>
      {skills.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
