import Layout from "@/components/layout"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Work_Sans, Montserrat, Dancing_Script } from "next/font/google"

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--work-sans-font",
})

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--montserrat-font",
})

const dancingScript = Dancing_Script({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--dancing-script-font",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${workSans.variable} ${montserrat.variable} ${dancingScript.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
