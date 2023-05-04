import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'

const slides = [
  {
    title: "Lorem ipsum dolor sit amet 1",
    description: "Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus nibh, viverra vitae erat ut, lacinia interdum nisl. 1"
  },
  {
    title: "Lorem ipsum dolor sit amet 2",
    description: "Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus nibh, viverra vitae erat ut, lacinia interdum nisl. 2"
  },
  {
    title: "Lorem ipsum dolor sit amet 3",
    description: "Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus nibh, viverra vitae erat ut, lacinia interdum nisl. 3"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [intervalId, setIntervalId] = useState(null);

  const slideRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1;
      if (nextSlide >= slides.length) {
        return 0;
      }
      return nextSlide;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide - 1;
      if (nextSlide < 0) {
        return slides.length - 1;
      }
      return nextSlide;
    });
  };

  const startInterval = () => {
    const id = setInterval(handleNextSlide, 5000);
    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalId) {
        stopInterval();
      }
    };
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.classList.add('slide-animado');
      setTimeout(() => {
        slideRef.current.classList.remove('slide-animado');
      }, 2000);
    }
  }, [currentSlide]);

  const handleRadioChange = (event) => {
    setCurrentSlide(Number(event.target.value));
    stopInterval();
  };

  return (
    <section className="carousel" onMouseEnter={stopInterval} onMouseLeave={startInterval}>
      <div className="info">
        <div ref={slideRef} className="slide">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>

        <div className="navigation">
          <label className="form-control">
            {slides.map((slide, index) => (
              <input
                key={index}
                type="radio"
                name="slider"
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
      </div>
    </section>
  );
}