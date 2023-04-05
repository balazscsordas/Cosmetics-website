import { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"
import Image from "next/image"
import slide3 from "../../../public/images/bbglowelotteutana3.jpg"
import slide1 from "../../../public/images/bbglowelotteutana1.jpg"
import slide4 from "../../../public/images/bbglowelotteutana4.jpg"
import slide5 from "../../../public/images/bbglowelotteutana5.jpg"

export interface Slide {
  image: StaticImageData
  title: string
}

const Pictures = () => {
  const slides: Slide[] = [
    {
      image: slide3,
      title: "kep3",
    },
    {
      image: slide1,
      title: "kep1",
    },
    {
      image: slide4,
      title: "kep4",
    },
    {
      image: slide5,
      title: "kep5",
    },
  ]

  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="mb-10 text-center font-medium">Kezelés hatása</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className=" rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={"slide"} // set the effect to slide
        speed={1000} // set the slide speed
        autoplay={{ delay: 5000 }} // set the autoplay delay
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.image} alt={slide.title} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Pictures
