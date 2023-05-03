import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Card.css'

export default function Cards() {
    const [peoples, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people')
            .then((response) => {
                setPeople(response.data.results);
            })
    }, []);

    return (
        <section className="cards">
            <h2 id="cards">Characters</h2>
            <div className="container">
                {peoples.map((people, index) => (
                    <div className="card" key={index}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${[index + 1]}.jpg`} alt={`Character: ${people.title}`} />
                        <h3>{people.name}</h3>
                        <button>information!</button>
                    </div>
                ))}
            </div>
        </section >
    );
}