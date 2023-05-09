import React, { useState, useRef } from "react";
import Modal from '../Modal/Modal';
import './Subscription.css'

export default function Subscription() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const valid = () => {
        let nameError = "";
        let emailError = "";

        if (name.trim().length < 3) {
            nameError = "O nome deve ter no mínimo 3 caracteres";
            nameRef.current.classList.add('invalidate')
        } else {
            nameRef.current.classList.remove('invalidate')
        }

        if (email.trim().length < 5) {
            emailError = "O email deve ter no mínimo 5 caracteres";
            emailRef.current.classList.add('invalidate')
        } else if (!email.includes('@') || email.indexOf('@') < 3 || !email.includes('.')) {
            emailError = "Endereço de email inválido";
            emailRef.current.classList.add('invalidate')
        } else {
            emailRef.current.classList.remove('invalidate')
        }

        setNameError(nameError);
        setEmailError(emailError);

        if (nameError || emailError) {
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = valid();
        if (isValid) {
            setShowModal(true);
            setName("")
            setEmail("")
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="subscription" id="subscription">
            <div>
                <h2>Subscribe</h2>
                <span>newsletter</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} ref={nameRef} />
                    {nameError && <div className="error">{nameError}</div>}
                </label>
                <label>
                    <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} ref={emailRef} />
                    {emailError && <div className="error">{emailError}</div>}
                </label>
                <button type="submit"></button>
            </form>
            {showModal && <Modal closeModal={closeModal}/>}
        </section>
    )
}