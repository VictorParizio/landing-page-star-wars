import React from "react";
import './Footer.css'
import logo from '../../images/Star_Wars_Logo.svg'

export default function Footer() {
    return (
        <section className="footer" id="footer">
            <nav>
                <ul className="container">
                    <li><a href="#films">Films</a></li>
                    <li><a href="#characters">Characters</a></li>
                    <li><a href="#subscription">Subscription</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
            
            <p>A long time ago in a galaxy far, far away...</p>

            <div className="container empresa">
                <a href="#">
                    <img src={logo} alt="Star Wars Logo" />
                </a>
            </div>

            <div className="attribution">
                Coded by <a href="https://github.com/VictorParizio" target="_blank">Victor Parizio</a>
            </div>
        </section>
    )
}