import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Characters.css'
import Information from '../Information/Information';

export default function Characters() {
  const [people, setPeople] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person, index) => {
    setSelectedPerson({ ...person, index });
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((response) => {
        setPeople(response.data.results);
      })
  }, []);

  return (
    <section className="characters">
      <h2 id="characters">Characters</h2>
      <div className="container">
        {people.map((person, index) => (
          <div className="card" key={index}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${[index + 1]}.jpg`} alt={`Character: ${person.name}`} />
            <h3>{person.name}</h3>
            <button onClick={() => openModal(person, index)}>information!</button>
          </div>
        ))}
      </div>
      {modalOpen && <Information person={selectedPerson} onClose={closeModal} />}
    </section>
  );
}
