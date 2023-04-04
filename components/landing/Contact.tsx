import Image from "next/image"
import PageContainer from "../PageContainer"
import { Contacts } from "@/utils/aboutMe"
import styles from "@/styles/components/contact.module.scss"
import ContactData from "./ContactData"

type ContactProps = {
  description: string
  contacts: Contacts[]
}

const Contact: React.FC<ContactProps> = ({ description, contacts }) => {
  return (
    <PageContainer background="dark" id="contact">
      <div className={styles.contact}>
        <h2 className="basicSubtitle">Contact</h2>
        <div className={styles.contact__inner}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src={"/images/girl-coding.png"}
              alt="image of a girl coding"
            />
          </div>
          <div className={styles.dataContainer}>
            <p className="basicDescription">
              <strong>Hey! </strong>
              {description}
            </p>
            <div className={styles.contactIcons}>
              {contacts.map((item) => {
                return <ContactData key={item.id} item={item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Contact
