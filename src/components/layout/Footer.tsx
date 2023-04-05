import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mx-auto mt-14 flex max-w-5xl flex-col text-gray-500">
      <div className="flex flex-row flex-wrap justify-around">
        <span className="py-4">+36 20 413 5877</span>
        <span className="py-4">dorinkozmetika@gmail.com</span>
        <span className="py-4">
          Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B
        </span>
      </div>
      <div className="flex flex-row justify-center border-b-2 border-t-2 border-gray-200">
        <Link href="/" className="px-6 py-8">
          Kezdőoldal
        </Link>
        <Link href="/aboutMe" className="px-6 py-8">
          Rólam
        </Link>
        <Link href="/kezelesek" className="px-6 py-8">
          Kezelések
        </Link>
        <Link href="/pricelist" className="px-6 py-8">
          Árlista
        </Link>
        <Link href="/elerhetosegek" className="px-6 py-8">
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
