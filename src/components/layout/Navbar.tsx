import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import { useEffect, useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CallIcon from "@mui/icons-material/Call"
import EmailIcon from "@mui/icons-material/Email"
import PlaceIcon from "@mui/icons-material/Place"
import Image from "next/image"
import dorinKozmetika from "../../../public/images/logo.png"

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const handleClick = () => {
    setShowMobileNavbar(prevValue => !prevValue)
  }

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let contact = document.getElementById("contact")!
      let logo = document.getElementById("logo")!
      let header = document.getElementById("header")!

      if (window.screen.width > 992) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          contact.classList.add("border-bottom")
          header.style.backgroundColor = "white"
          setShowLogo(false)
        } else {
          contact.classList.remove("border-bottom")
          header.style.backgroundColor = "transparent"
          setShowLogo(true)
        }
      }

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("scrollToTheTop")!.style.display = "block"
      } else {
        document.getElementById("scrollToTheTop")!.style.display = "none"
      }
    }
  }

  return (
    <header
      id="header"
      className="fixed top-0 z-10 w-full text-gray-600 transition-all"
    >
      <section className="m-auto hidden max-w-7xl flex-col items-center justify-between px-4 md:flex">
        <div id="contact" className="flex flex-row py-2 text-xs">
          <span className="mx-4 flex flex-row items-center">
            <CallIcon fontSize="small" className="mr-2" />
            +36 20 413 5877
          </span>
          <span className="mx-4 flex flex-row items-center">
            <EmailIcon fontSize="small" className="mr-2" />
            dorinkozmetika@gmail.com
          </span>
          <span className="mx-4 flex flex-row items-center">
            <PlaceIcon fontSize="small" className="mr-2" />
            Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B
          </span>
        </div>
        <Collapse in={showLogo} className="flex flex-row items-center">
          <Link
            id="logo"
            href="/"
            passHref
            className="hidden flex-1 p-4 md:block"
          >
            <Image src={dorinKozmetika} width={140} alt="dorin-kozmetika" />
          </Link>
        </Collapse>
        <nav className="flex flex-row text-center font-medium">
          <Link className="mx-4 p-4" href="/">
            Kezdőoldal
          </Link>
          <Link className="mx-4 p-4" href="aboutMe">
            Rólam
          </Link>
          <Link className="mx-4 p-4" href="/kezelesek">
            Kezelések
          </Link>
          <Link className="mx-4 p-4" href="/bb-glow">
            BB Glow kezelés
          </Link>
          <Link className="mx-4 p-4" href="/pricelist">
            Árlista
          </Link>
          <Link className="mx-4 p-4" href="/elerhetosegek">
            Elérhetőségek
          </Link>
        </nav>
      </section>

      {/* mobile */}
      <section className="m-auto flex max-w-7xl flex-row items-center justify-between px-4 md:hidden">
        <div className="mr-auto flex flex-row items-center">
          <Link href="" passHref className="block md:hidden">
            <span className="ml-3">Kezdőoldal</span>
          </Link>
        </div>
        <div className="block py-4">
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </div>
      </section>

      <Collapse in={showMobileNavbar}>
        <div className="border-t-2 border-slate-300 font-medium">
          <nav className="flex flex-col">
            <Link
              className="ml-auto px-6 py-4"
              onClick={() => setShowMobileNavbar(false)}
              href="/aboutMe"
            >
              Rólam
            </Link>
            <Link
              className="ml-auto px-6 py-4"
              onClick={() => setShowMobileNavbar(false)}
              href="/kezelesek"
            >
              Kezelések
            </Link>
            <Link
              className="ml-auto px-6 py-4"
              onClick={() => setShowMobileNavbar(false)}
              href="/bb-glow"
            >
              BB Glow kezelés
            </Link>
            <Link
              className="ml-auto px-6 py-4"
              onClick={() => setShowMobileNavbar(false)}
              href="/pricelist"
            >
              Árlista
            </Link>
            <Link
              className="ml-auto px-6 py-4"
              onClick={() => setShowMobileNavbar(false)}
              href="/elerhetosegek"
            >
              Elérhetőségek
            </Link>
          </nav>
        </div>
      </Collapse>
    </header>
  )
}

export default Navbar
