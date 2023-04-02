import Image from "next/image"
import ContactIcon from "./ContactIcon"
import { Contacts } from "@/utils/aboutMe"
import styles from "@/styles/components/contactsticky.module.scss"

type ContactSticky = {
  contacts: Contacts[]
}

const VerticalLine = () => {
  return <div className={styles.verticalLine}></div>
}

const ContactSticky: React.FC<ContactSticky> = ({ contacts }) => {
  return (
    <div className={styles.contactSticky}>
      <div className={styles.contactsContainer}>
        {contacts.map((item, index) => {
          if (index === 0) {
            return <ContactIcon key={item.id} item={item} />
          } else {
            return (
              <div key={item.id}>
                <VerticalLine />
                <ContactIcon item={item} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default ContactSticky
