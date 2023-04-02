import PageContainer from "../PageContainer"
import styles from "@/styles/components/about.module.scss"

type AboutProps = {
  description: string
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <PageContainer background="light" id="about">
      <div className={`${styles.about} basicDescription`}>
        <h2 className="basicSubtitle">About</h2>
        <p className="basicDescription">{description}</p>
      </div>
    </PageContainer>
  )
}

export default About
