import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Films.css'

export default function Films() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showSlide, setShowSlide] = useState(false);
    const [showList, setShowList] = useState(false);
    const [films, setFilms] = useState([]);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => {
            const nextSlide = prevSlide + 1;
            if (nextSlide >= films.length) {
                return 0;
            }
            return nextSlide;
        });
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => {
            const nextSlide = prevSlide - 1;
            if (nextSlide < 0) {
                return films.length - 1;
            }
            return nextSlide;
        });
    };

    const handleRadioChange = (event) => {
        setCurrentSlide(Number(event.target.value));
    };

    useEffect(() => {
        const handleResize = () => {
            setShowSlide(window.innerWidth < 450);
            setShowList(window.innerWidth > 450);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/films')
            .then((response) => {
                setFilms(response.data.results);
            })
    }, []);

    return (
        <section className="films">
            <h2 id="films">Films</h2>
            {showList && (
                <div className="info">
                    {films.map((film, index) => (
                        <div key={index}>
                            <h3>{film.title}</h3>
                            <div className="star"></div>
                            <img src={`https://starwars-visualguide.com/assets/img/films/${[index + 1]}.jpg`} alt={`Capa do filme ${film.title}`} />
                            <p>{film.opening_crawl}</p>
                        </div>
                    ))}
                </div>
            )}

            {showSlide && (
                <>
                    <div className="info">
                        {films.length > 0 &&
                            <>
                                <h3>{films[currentSlide].title}</h3>
                                <div className="star"></div>
                                <img src={`https://starwars-visualguide.com/assets/img/films/${currentSlide + 1}.jpg`} alt={films[currentSlide].title} />
                                <p>{films[currentSlide].opening_crawl}</p>
                            </>
                        }
                    </div>

                    <div className="navigation">
                        <label className="form-control">
                            {films.map((film, index) => (
                                <input
                                    key={index}
                                    type="radio"
                                    name="film"
                                    value={index}
                                    checked={currentSlide === index}
                                    onChange={handleRadioChange}
                                />
                            ))}
                        </label>

                        <div className="arrow">
                            <button onClick={handlePrevSlide}></button>
                            <button onClick={handleNextSlide}></button>
                        </div>
                    </div>
                </>
            )}
        </section >
    );
}