import React from "react";
import Review from "./Review";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function App() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <main className="main__reviews">
        <section className="container__reviews">
          <div className="title__reviews">
            <h2>our reviews</h2>
            <div className="underline__reviews"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default App;
