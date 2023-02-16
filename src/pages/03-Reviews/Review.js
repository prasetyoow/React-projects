import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container__reviews">
        <img src={image} alt={name} className="person-img__reviews" />
        <span className="quote-icon__reviews">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author__reviews">{name}</h4>
      <p className="job__reviews">{job}</p>
      <p className="info__reviews">{text}</p>
      <div className="button-container__reviews">
        <button className="prev-btn__reviews" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn__reviews" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn__reviews" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
