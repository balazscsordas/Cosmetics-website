import data from "../../data/servicesList"
import ServiceItem from "./ServiceItem"

const Services = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="mb-10 text-center font-medium">Szolgáltatásaim</h2>
      <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
        {data.map((service, index) => (
          <ServiceItem
            name={service.name}
            src={service.image}
            key={index}
            href="/asd"
          />
        ))}
      </section>
    </section>
  )
}

export default Services
