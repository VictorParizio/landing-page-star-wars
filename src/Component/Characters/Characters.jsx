import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Characters.css'
import Information from '../Information/Information';

export default function Characters() {
    const [people, setPeople] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        axios
          .get('https://swapi.dev/api/people')
          .then((response) => {
            setPeople(response.data.results);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Erro na chamada à API:', error);
            setLoading(false);
          });
      }, []);

    return (
        <section className="characters">
            <h2 id="characters">Characters</h2>
            <div className="container">
                {people.map((person, index) => (
                    <div className="card" key={index}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${[index + 1]}.jpg`} alt={`Character: ${person.name}`} />
                        <h3>{person.name}</h3>
                        <button onClick={openModal}>information!</button>
                    </div>
                ))}
            </div>
            {modalOpen && <Information onClose={closeModal} />}
        </section >
    );
}