import React from "react"

import Banner from "./Component/Banner/Banner"
import Cards from "./Component/Cards/Cards"
import Evaluateds from "./Component/Evaluateds/Evaluateds"
import Subscription from "./Component/Subscription/Subscription"
import Footer from "./Component/Footer/Footer"
import TopButton from "./Component/TopButton/TopButton"

export default function App() {

  return (
    <>
      <Banner />
      <Cards />
      <Evaluateds />
      <Subscription />
      <Footer />
      <TopButton />
    </>
  )
}