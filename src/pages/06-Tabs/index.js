import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading__tabs">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <>
      <Helmet>
        <title>Tabs</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <section className="section__tabs">
        <div className="title__tabs">
          <h2>experience</h2>
          <div className="underline__tabs"></div>
        </div>
        <div className="jobs-center__tabs">
          {/* btn container */}
          <div className="btn-container__tabs">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn__tabs ${
                    index === value && "active-btn__tabs"
                  }`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job info */}
          <article className="job-info__tabs">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date__tabs">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc__tabs">
                  <FaAngleDoubleRight className="job-icon__tabs"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button type="button" className="btn__tabs">
          more info
        </button>
      </section>
    </>
  );
}

export default App;
