import ContactIcon from "@/components/ContactIcon"
import { Contacts } from "@/utils/aboutMe"
import { useState } from "react"
import styles from "@/styles/components/contactdata.module.scss"

interface ContactDataProps {
  item: Contacts
}

const ContactData: React.FC<ContactDataProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      className={styles.contactdata}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContactIcon item={item} />
      {isHovered && (
        <a
          className={styles.contactdata__text}
          href={item.value}
          target="_blank"
        >
          {item.description}
        </a>
      )}
    </div>
  )
}

export default ContactData
