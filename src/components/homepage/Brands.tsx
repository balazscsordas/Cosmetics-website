import Image from "next/image"
import brand1 from "../../../public/images/product1-logo.png"
import brand2 from "../../../public/images/product2-logo.png"

const Brands = () => {
  return (
    <section className="my-16 bg-gradient-to-t from-[#ffd2e5] to-[#f9a3c7]">
      <section className="m-auto max-w-5xl px-4 py-12">
        <h2 className="mb-14 text-center font-medium">
          Márkák, amikkel dolgozom
        </h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Image alt="brand-1" src={brand1} width={150} className="mx-auto" />
          <Image alt="brand-2" src={brand2} width={150} className="mx-auto" />
        </div>
      </section>
    </section>
  )
}

export default Brands
