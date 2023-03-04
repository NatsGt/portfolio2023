import Link from "next/link"
import { Icon } from "./icons"
import { contactIcon } from "@/utils/icons"
import { Contacts } from "@/utils/aboutMe"

type ContactIconProps = {
  item: Contacts
}

const ContactIcon: React.FC<ContactIconProps> = ({ item }) => {
  return (
    <Link href={item.value} target="_blank" className="contact">
      <Icon icon={contactIcon(item.name)} />
    </Link>
  )
}

export default ContactIcon
