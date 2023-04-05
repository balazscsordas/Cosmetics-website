interface Props {
  name: string
  description?: string
  price: string
}

const PriceListItem = ({ name, description, price }: Props) => {
  return (
    <section className="mb-12 mt-6 flex flex-col">
      <div className="flex flex-row justify-between border-b-2 border-dotted border-gray-300 font-bold">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <p>{description}</p>
    </section>
  )
}

export default PriceListItem
