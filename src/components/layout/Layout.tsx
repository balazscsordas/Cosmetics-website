import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTopButton from "../small-components/ScrollToTopButton"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default Layout
