import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
  src: StaticImageData
  name: string
  href: string
}

const ServiceItem = ({ src, name, href }: Props) => {
  return (
    <Link href={href} passHref>
      <section className="flex flex-col rounded-lg border-[1px] border-gray-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Image src={src} alt={name} className="rounded-t-lg" />
        <div className="flex h-24 items-center justify-center p-4">
          <h3 className="text-center font-medium">{name}</h3>
        </div>
      </section>
    </Link>
  )
}

export default ServiceItem
