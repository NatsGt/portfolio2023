import { Icon } from "@/components/icons"
import { skillIcon } from "@/utils/icons"

const ProjectCard = () => {
  return (
    <div>
      <div></div>
      <div>
        <div>
          <h3>Project title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae ultrices mauris
            consectetur cursus. Nullam ullamcorper ante fringilla sapien. Vitae
            egestas at scelerisque gravida.
          </p>
          <a>www.google.com</a>
        </div>
        <div>
          <h4>Technologies used</h4>
          <Icon icon={skillIcon("Github")} color="white" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
