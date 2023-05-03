import React from "react";
import './Header.css'
import logo from '../../images/Star_Wars_Logo.svg'
import HamburgerMenu from "../Hamburger/Hamburger";

export default function Header() {
    return (
        <section className="header">
            <img src={logo} alt="" />

            <nav className="desktop">
                <ul>
                    <li><a href="#cards">Cards</a></li>
                    <li><a href="#evaluated">+ Evaluated</a></li>
                    <li><a href="#subscription">Subscription</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
            
            <HamburgerMenu />

        </section>
    )
}