import React, { useState } from "react";
import '../Hamburger/Hamburger.css'

export default function HamburgerMenu() {
    const [toggle, setToggle] = useState(false)

    const btnMobile = () => {
        setToggle(!toggle)
    }

    return (
        <nav className={`mobile ${toggle ? 'active' : ''}`}>
            <button id="btn-mobile" onClick={btnMobile}>
                <span id="hamburguer"></span>
            </button>
            <ul className="menu">
                <li><a href="#films">Films</a></li>
                <li><a href="#characters">Characters</a></li>
                <li><a href="#subscription">Subscription</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
    );
}