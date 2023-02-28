import Head from "next/head"
import styles from "@/styles/Home.module.scss"
import FrontPage from "@/components/landing/home"
import data from "@/utils/aboutMe"
import Skills from "@/components/landing/Skills"

export default function Home() {
  return (
    <>
      <Head>
        <title>Nats Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avocado-favicon.png" />
      </Head>
      <main className={styles.main}>
        <FrontPage description={data.briefDescription} contact={data.contact} />
        <Skills description={data.skillsDescription} skills={data.skills} />
      </main>
    </>
  )
}
