import { ContactName, Contacts } from "@/utils/aboutMe"
import styles from "../../styles/components/frontpage.module.scss"
import { Icon } from "../icons"
import { IconDatadog, IconGithub, IconLinkedin, IconMail } from "../icons/icons"
import Link from "next/link"

type FrontPageProps = {
  description: string
  contact: Contacts[]
}

const FrontPage: React.FC<FrontPageProps> = ({ description, contact }) => {
  const contactIcon = (name: string): React.ElementType => {
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

  return (
    <div id="home" className={styles.frontpage}>
      <div className={styles.frontpage__data}>
        <div className={styles.contactIcons}>
          {contact.map((item) => (
            <Link
              href={item.value}
              target="_blank"
              key={item.id}
              className={styles.contact}
            >
              <Icon icon={contactIcon(item.name)} />
            </Link>
          ))}
        </div>
        <h1>Natalia Rodas</h1>
        <h2>Front-End Developer</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FrontPage
