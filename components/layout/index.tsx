import Navigation from "./Navigation"

type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <body>{children}</body>
    </>
  )
}

export default Layout
