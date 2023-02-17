import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft, FiArrowLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <section className="section__slider">
        <div className="title__slider">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center__slider">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === person.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article key={id} className={position + " article__slider"}>
                <img src={image} alt={name} className="person-img__slider" />
                <h4>{name}</h4>
                <p className="title__slider">{title}</p>
                <p className="text__slider">{quote}</p>
                <FaQuoteRight className="icon__slider" />
              </article>
            );
          })}

          <button className="prev__slider" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>

          <button className="next__slider" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
