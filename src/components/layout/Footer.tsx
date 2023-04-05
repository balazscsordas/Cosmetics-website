import Link from "next/link"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import EmailIcon from "@mui/icons-material/Email"
import PlaceIcon from "@mui/icons-material/Place"

const Footer = () => {
  return (
    <footer className="mx-auto mt-14 flex max-w-5xl flex-col px-4 text-gray-500">
      <div className="flex flex-row flex-wrap justify-around">
        <span className="mx-auto flex items-center py-4">
          <PhoneIphoneIcon fontSize="small" className="mr-1" />
          +36 20 413 5877
        </span>
        <span className="mx-auto flex items-center py-4">
          <EmailIcon fontSize="small" className="mr-1" />
          dorinkozmetika@gmail.com
        </span>
        <span className="mx-auto flex items-center py-4">
          <PlaceIcon fontSize="small" className="mr-1" /> Győr, Dunapart
          Rezidencia Móricz Zsigmond rakpart 1/B
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-center border-b-2 border-t-2 border-gray-200">
        <Link href="/" className="p-3 sm:p-6">
          Kezdőoldal
        </Link>
        <Link href="/aboutMe" className="p-3 sm:p-6">
          Rólam
        </Link>
        <Link href="/kezelesek" className="p-3 sm:p-6">
          Kezelések
        </Link>
        <Link href="/pricelist" className="p-3 sm:p-6">
          Árlista
        </Link>
        <Link href="/elerhetosegek" className="p-3 sm:p-6">
          Elérhetőségek
        </Link>
      </div>
      <p className="p-4 text-center text-sm">
        Készítette: Csordás Balázs - &copy; 2022 Dorin Kozmetika
      </p>
    </footer>
  )
}

export default Footer
