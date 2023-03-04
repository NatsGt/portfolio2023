import { Contacts } from "@/utils/aboutMe"
import styles from "../../styles/components/frontpage.module.scss"
import PageContainer from "../PageContainer"
import ContactIcon from "../ContactIcon"

type FrontPageProps = {
  description: string
  contact: Contacts[]
}

const FrontPage: React.FC<FrontPageProps> = ({ description, contact }) => {
  return (
    <PageContainer id="home" background="dark">
      <div className={styles.frontpage}>
        <div className={styles.contactIcons}>
          {contact.map((item) => (
            <ContactIcon item={item} key={item.id} />
          ))}
        </div>
        <h1>Natalia Rodas</h1>
        <h2>Front-End Developer</h2>
        <div>{description}</div>
      </div>
    </PageContainer>
  )
}

export default FrontPage
