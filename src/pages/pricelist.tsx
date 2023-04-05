import Banner from "@/components/Banner"
import PriceList from "@/components/price-list/PriceList"
import Layout from "@/components/layout/Layout"
import CallNowSection1 from "@/components/small-components/CallNowSection1"
import Head from "next/head"

export const PriceListPage = () => {
  return (
    <>
      <Head>
        <title>Árlista | Dorin Kozmetika - Győr</title>
        <meta
          name="description"
          content="Kozmetikai kezelések széles választéka: klasszikus, relaxáló, Bruno Vassari speciális arckezelések, pedikűr, szempilla és szemöldök | Dorin Kozmetika - Győr"
        />
        <meta
          name="title"
          content="Kezelések és árak | Dorin Kozmetika - Győr"
        />
        <meta name="image" content="../images/klasszikus_kezelesek_img.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Banner text="Árlista" bg="pricelist-bg" />
          <PriceList />
          <CallNowSection1 />
        </Layout>
      </main>
    </>
  )
}

export default PriceListPage
