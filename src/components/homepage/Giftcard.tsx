import Image from "next/image"
import img from "../../../public/images/ajandekutalvany.jpg"

const Giftcard = () => {
  return (
    <section className="mx-auto my-20 max-w-7xl">
      <h2 className="mb-10 text-center font-medium">Szolgáltatásaim</h2>
      <section className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2">
        <div className="m-auto">
          <Image
            src={img}
            alt="rolam"
            width={500}
            className="mb-10 rounded-2xl border-2 border-gray-300 shadow-xl md:m-auto"
          />
        </div>
        <div>
          <h3 className="mb-4 font-medium">
            Pihentető élmény szépüléssel egybekötve
          </h3>
          <p className="mb-4">
            Olyan ajándékkal szeretnéd meglepni szeretteidet ami hasznos és
            személyre szabható?
          </p>
          <p>
            A kozmetikai ajándékkártya kiváló meglepetés szeretteidnek minden
            alkalomra legyen szó születésnapról, névnapról, évfordulóról, vagy
            más jeles alkalmakról. Válogass a relax élményt nyújtó regeneráló,
            fiatalító kezelések között. Az ajándékkártyát lehetőséged van
            tetszőleges összeggel feltölteni, ha nem tudod eldönteni minek is
            örülnének a legjobban.
          </p>
        </div>
      </section>
    </section>
  )
}

export default Giftcard
