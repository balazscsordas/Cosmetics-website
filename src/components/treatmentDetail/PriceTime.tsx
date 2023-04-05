interface Props {
  price?: string
  time?: string
}

const PriceTime = ({ price, time }: Props) => {
  return (
    <>
      {price && time && (
        <section className="mx-auto my-8 flex max-w-lg flex-row">
          <div className="flex-1 rounded-l-full border-2 border-[#efe6da] bg-[#efe6da] p-1 px-4">
            {time}
          </div>
          <div className="w-full flex-1 rounded-r-full border-2 border-[#efe6da] p-1 px-4">
            {price}
          </div>
        </section>
      )}

      {price && !time && (
        <section className="mx-auto my-8 flex max-w-[150px] flex-row">
          <div className="flex-1 rounded-full border-2 border-[#efe6da] bg-[#efe6da] p-1 px-4 text-center">
            {price}
          </div>
        </section>
      )}
    </>
  )
}

export default PriceTime
