import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title__tours">
        <h2>our tours</h2>
        <div className="underline__tours"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
