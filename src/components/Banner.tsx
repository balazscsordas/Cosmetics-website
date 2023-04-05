interface Props {
  bg: string
  text: string
}

const Banner = ({ bg, text }: Props) => {
  return (
    <section
      className={`flex min-h-[80vh] items-center justify-center ${bg} mb-12`}
    >
      <div className="p-4 text-center">
        <h1 className="bg-white bg-opacity-70 p-12 text-5xl font-medium">
          {text}
        </h1>
      </div>
    </section>
  )
}

export default Banner
