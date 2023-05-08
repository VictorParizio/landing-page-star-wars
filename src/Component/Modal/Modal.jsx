import React from "react";
import './Modal.css'
import check from '../../images/check.svg'

export default function Modal({ closeModal }) {
    return (
        <div className="successMessage">
            <div>
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={check} alt="check" />
                <h2>Success!</h2>
                <p>Your registration has been completed and you will soon start receiving our news.</p>
            </div>
        </div>
    );
}
