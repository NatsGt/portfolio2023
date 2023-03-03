import Navigation from "./Navigation"

type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  )
}

export default Layout
