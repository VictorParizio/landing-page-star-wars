import React from 'react';
import './Information.css';

export default function Information({ person, onClose }) {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${person.index + 1}.jpg`;

  return (
    <section className="information">
      <h2>{person.name}</h2>
      <div className="container">
        <div className="card">
          <img src={imageUrl} alt={`Character: ${person.name}`} />
          <h3>{person.name}</h3>
          <p>Birth year: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
          <p>Hair color: {person.hair_color}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Skin color: {person.skin_color}</p>
        </div>
      </div>
      <button onClick={onClose}>Fechar</button>
    </section>
  );
}
