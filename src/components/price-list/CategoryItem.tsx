import PriceListItem from "./PriceListItem"

interface Props {
  categoryName: string
  treatments: {
    treatmentName: string
    treatmentSubname?: string
    treatmentDescription?: string
    treatmentPlusDescription?: string
    treatmentPrice: string
    treatmentPlusPrice?: string
    treatmentTime?: string
    treatmentPlusTime?: string
    treatmentSteps?: string[]
  }[]
}

const CategoryItem = ({ categoryName, treatments }: Props) => {
  return (
    <section className="mb-20">
      <h1 className="bg-[#fff6ea] py-6 text-center font-medium">
        {categoryName}
      </h1>
      {treatments.map((treatment, index) => (
        <PriceListItem
          key={index}
          name={treatment.treatmentName}
          description={treatment.treatmentDescription}
          price={treatment.treatmentPrice}
        />
      ))}
    </section>
  )
}

export default CategoryItem
