import React from "react";
import { Helmet } from "react-helmet";
import { AiFillGithub } from "react-icons/ai";
import { FiCornerDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "./constant";

export default function index() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <h1 className="title__home">React Projects</h1>
      </section>
      <div className="section__projects">
        {projects.map((project) => {
          return (
            <div key={project.id} className="container__projects">
              <div className="projects-flex">
                <img
                  src={project.img}
                  alt="projects"
                  className="img__projects"
                />
                <div className="content__projects">
                  <h4 className="title__projects">{project.title}</h4>
                  <p className="createAt__projects">{project.createdAt}</p>
                  <p className="info__projects">{project.description}</p>
                  <div className="container-icon__projects">
                    <Link to={project.link}>
                      <div className="icon-web__project">
                        <FiCornerDownRight size={25} />
                        <p className="icon-text">Go to Page</p>
                      </div>
                    </Link>
                    <Link to={project.source} target="_blank">
                      <div className="icon-source__project">
                        <AiFillGithub size={25} />
                        <p className="icon-text">Source Code</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
