import React from "react";
import './Modal.css'
import check from '../../images/check.svg'

export default function Modal({ closeModal }) {
    return (
        <div className="successMessage">
            <div>
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={check} alt="check" />
                <h2>Sucesso!</h2>
                <p>sua inscrição foi realizada e em breve você começará a receber nossas notícias.</p>
            </div>
        </div>
    );
}
