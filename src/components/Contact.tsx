import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import EmailIcon from "@mui/icons-material/Email"
import PlaceIcon from "@mui/icons-material/Place"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

const Contact = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
      <section>
        <h3 className="mb-10 text-center font-medium">
          Bejelentkezéshez keress az alábbi elérhetőségek bármelyikén
        </h3>
        <div className="flex flex-col">
          <p className="my-3">
            <PlaceIcon className="mr-2" />
            Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B
          </p>
          <p className="my-3">
            <PhoneIphoneIcon className="mr-2" />
            +36 20 413 5877
          </p>
          <p className="my-3">
            <EmailIcon className="mr-2" />
            dorinkozmetika@gmail.com
          </p>
        </div>
        <h3 className="mt-8 text-center font-medium">Közösségi oldalaim</h3>
        <div className="flex flex-row justify-center">
          <a href="https://www.facebook.com/dorinkozmetika">
            <FacebookIcon className="m-3" fontSize="large" />
          </a>
          <a href="https://www.instagram.com/dorinkozmetika/">
            <InstagramIcon className="m-3" fontSize="large" />
          </a>
        </div>
      </section>
      <section>
        <h3 className="mb-10 text-center font-medium">
          Kozmetika megközelítése
        </h3>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="h-96 w-full"
              title="Google Terkep"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Dorin%20Kozmetika&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact
