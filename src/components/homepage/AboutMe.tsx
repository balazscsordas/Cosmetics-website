import Image from "next/image"
import img from "../../../public/images/Rolam.jpg"

const AboutMe = () => {
  return (
    <section className="mx-auto my-20 grid max-w-7xl grid-cols-1 gap-2 p-4 md:grid-cols-2">
      <div className="m-auto">
        <Image
          src={img}
          alt="rolam"
          width={320}
          className="mb-10 rounded-2xl border-2 border-gray-300 shadow-xl md:m-auto"
        />
      </div>
      <div>
        <h2 className="mb-4 font-medium">Üdvözöllek a weboldalamon!</h2>
        <p className="mb-4">
          A Dorin Kozmetikában teljes nyugalomban, egyedüli vendégként
          élvezheted a személyre szabott kozmetikai kezelések széles
          választékát, a klasszikus és gyümölcssavas Spa élményű Callux
          lábápolás, illetve a kényeztető, relaxáló kezelések varázsát.
        </p>
        <p>
          A kezelések metódusával és a prémium spanyol márka Bruno Vassari által
          nyújtott látványos és tartós eredmények harmóniájával egy olyan helyet
          szeretnék biztosítani vendégeimnek ahova jó megérkezni és visszatérni.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
