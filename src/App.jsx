import React from "react"

import Banner from "./Component/Banner/Banner"
import Films from "./Component/Films/Films"
import Characters from "./Component/Characters/Characters"
import Subscription from "./Component/Subscription/Subscription"
import Footer from "./Component/Footer/Footer"
import TopButton from "./Component/TopButton/TopButton"

export default function App() {

  return (
    <>
      <Banner />
      <Films />
      <Characters />
      <Subscription />
      <Footer />
      <TopButton />
    </>
  )
}