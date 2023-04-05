import { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"
import Image from "next/image"
import slide1 from "../../../public/images/carousel/Dorin_Kozmetika_1.jpg"
import slide2 from "../../../public/images/carousel/Dorin_Kozmetika_2.jpg"
import slide3 from "../../../public/images/carousel/Dorin_Kozmetika_3.jpg"
import slide4 from "../../../public/images/carousel/Dorin_Kozmetika_4.jpg"

export interface Slide {
  image: StaticImageData
  title: string
}

const ImageGalery = () => {
  const slides: Slide[] = [
    {
      image: slide1,
      title: "kep1",
    },
    {
      image: slide2,
      title: "kep1",
    },
    {
      image: slide3,
      title: "kep1",
    },
    {
      image: slide4,
      title: "kep1",
    },
  ]

  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="mb-10 text-center font-medium">Képgaléria</h2>
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
        autoplay={{ delay: 3000 }} // set the autoplay delay
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

export default ImageGalery
