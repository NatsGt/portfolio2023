import { Contacts } from "@/utils/aboutMe"
import styles from "../../styles/components/frontpage.module.scss"
import PageContainer from "../PageContainer"

type FrontPageProps = {
  description: string
  contact: Contacts[]
}

const FrontPage: React.FC<FrontPageProps> = ({ description, contact }) => {
  return (
    <PageContainer id="home" background="dark">
      <div className={styles.frontpage}>
        <div>
          <h1>Natalia Rodas</h1>
          <h2>
            <strong>Hello !</strong> is it me you&#39;re looking for?
          </h2>
        </div>
        <p className="basicDescription">{description}</p>
      </div>
    </PageContainer>
  )
}

export default FrontPage
