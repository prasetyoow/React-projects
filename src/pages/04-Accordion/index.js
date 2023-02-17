import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <Helmet>
        <title>Accordion</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <main className="main__accordion">
        <div className="container__accordion">
          <h3>Questions and answers about login</h3>
          <section className="info__accordion">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
