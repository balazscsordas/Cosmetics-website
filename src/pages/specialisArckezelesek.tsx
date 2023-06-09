import Banner from "@/components/Banner"
import Layout from "@/components/layout/Layout"
import CallNowSection1 from "@/components/small-components/CallNowSection1"
import Head from "next/head"
import services from "@/data/servicesList"
import ServicePageItem from "@/components/treatmentDetail/ServicePageItem"

export const KlasszikusKezelesekPage = () => {
  return (
    <>
      <Head>
        <title>Klasszikus kezelések | Dorin Kozmetika - Győr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Banner
            text="Bruno Vassari speciális arckezelések"
            bg="specialis-kezelesek-bg"
          />
          {services[2].treatments.map((treatment, index) => (
            <ServicePageItem treatment={treatment} key={index} />
          ))}
          <CallNowSection1 />
        </Layout>
      </main>
    </>
  )
}

export default KlasszikusKezelesekPage
