import { Treatment } from "@/data/servicesList"
import PriceTime from "./PriceTime"
import Steps from "./Steps"

interface Props {
  treatment: Treatment
}

const ServicePageItem = ({ treatment }: Props) => {
  const {
    treatmentName,
    treatmentSubname,
    treatmentDescription,
    treatmentPlusDescription,
    treatmentPrice,
    treatmentPlusPrice,
    treatmentTime,
    treatmentPlusTime,
    treatmentSteps,
  } = treatment

  return (
    <section className="mx-auto my-12 max-w-5xl rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <h1 className="mb-8 text-center font-medium">{treatmentName}</h1>
      {treatmentSubname && <p className="text-center">{treatmentSubname}</p>}
      <p className="my-8">{treatmentDescription}</p>
      <Steps steps={treatmentSteps} />
      <PriceTime price={treatmentPrice} time={treatmentTime} />
      {treatmentPlusDescription && (
        <p className="my-8">{treatmentPlusDescription}</p>
      )}
      <PriceTime price={treatmentPlusPrice} time={treatmentPlusTime} />
    </section>
  )
}

export default ServicePageItem
