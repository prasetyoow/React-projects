import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <Helmet>
        <title>Birthday Reminder</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <main className="main__birthday">
        <section className="container__birthday">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;
