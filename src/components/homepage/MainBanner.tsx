const MainBanner = () => {
  return (
    <section
      id="main-banner"
      className="flex min-h-[90vh] items-center justify-center"
    >
      <div className="p-4 text-center">
        <h1 className="mb-10 text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
          Dorin Kozmetika
        </h1>
        <p className="mb-8">
          Győr, Dunapart Rezidencia - Móricz Zsigmond rakpart 1/B
        </p>
        <div className="flex flex-row flex-wrap justify-around">
          <button
            type="button"
            id="btn-main-banner"
            className="rounded-lg px-4 py-2"
            onClick={() => window.open("tel:+36204135877")}
          >
            Időpontfoglalás
          </button>
          <a
            href="https://www.facebook.com/dorinkozmetika"
            id="btn-main-banner"
            className="rounded-lg px-4 py-2"
          >
            Időpontfoglalás
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
