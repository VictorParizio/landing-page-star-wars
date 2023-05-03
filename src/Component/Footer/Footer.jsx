import React from "react";
import './Footer.css'
import logo from '../../images/logo-footer.svg'

export default function Footer() {
    return (
        <section className="footer" id="footer">
            <img src={logo} alt="" />
            
            <p>address@email.com</p>
            <p>(00) 9 1234-5678</p>

            <div className="empresa">
                <h2>Teste Técnico</h2>
            </div>

            <div className="attribution">
                Coded by <a href="https://github.com/VictorParizio" target="_blank" >Victor Parizio</a>
            </div>
        </section>
    )
}