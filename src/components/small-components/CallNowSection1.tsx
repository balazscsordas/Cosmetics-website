const CallNowSection1 = () => {
  return (
    <section className="mx-auto my-16 bg-[#ff4c68] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 py-14 text-center md:grid-cols-2">
        <h2 className="font-medium text-white">Jelentkezz be hozzám!</h2>
        <div className="justify- flex flex-row flex-wrap justify-center">
          <button
            type="button"
            id="btn-main-banner"
            className="m-4 rounded-lg px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={() => window.open("tel:+36204135877")}
          >
            Időpontfoglalás
          </button>
          <button
            type="button"
            id="btn-main-banner"
            className="m-4 rounded-lg px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={() => window.open("tel:+36204135877")}
          >
            Időpontfoglalás
          </button>
        </div>
      </section>
    </section>
  )
}

export default CallNowSection1
