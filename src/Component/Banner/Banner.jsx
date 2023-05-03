import React from "react";
import Header from "../Header/Header"
import Carousel from "../Carousel/Carousel"

import './Banner.css'

export default function Banner() {
    return (
        <section className="banner">
            <div className="img"></div>
            <Header />
            <Carousel />
        </section>
    )
}