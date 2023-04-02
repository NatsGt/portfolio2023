import Image from "next/image"

import styles from "../../styles/components/navigation.module.scss"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.linksContainer}>
        <li className={styles.links}>
          <Link href="#about" legacyBehavior>
            About
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#skills" legacyBehavior>
            Skills
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#projects" legacyBehavior>
            Projects
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#contact" legacyBehavior>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
