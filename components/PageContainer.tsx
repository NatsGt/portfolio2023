import styles from "@/styles/components/pagecontainer.module.scss"

type PageContainerProps = {
  children: JSX.Element
  background: "light" | "dark"
  id: string
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  background,
  id,
}) => {
  return (
    <div id={id} className={`${styles.container} ${styles[background]}`}>
      {children}
    </div>
  )
}

export default PageContainer
