import Image from "next/image"

import styles from "../../styles/components/navigation.module.scss"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <div className={styles.logoContainer}>
          <Link href="#home">
            <Image src="/images/natsgt-color.png" fill alt="NatsGt logo" />
          </Link>
        </div>
      </div>
      <ul className={styles.linksContainer}>
        <li className={styles.links}>
          <Link href="#about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#skills" legacyBehavior>
            <a>Skills</a>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#projects" legacyBehavior>
            <a>Projects</a>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="#contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
