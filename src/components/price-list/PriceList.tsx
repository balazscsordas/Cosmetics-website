import services from "@/data/servicesList"
import CategoryItem from "./CategoryItem"

const PriceList = () => {
  return (
    <section className="mx-auto max-w-4xl">
      {services.map((service, index) => (
        <CategoryItem
          key={index}
          categoryName={service.name}
          treatments={service.treatments}
        />
      ))}
    </section>
  )
}

export default PriceList
