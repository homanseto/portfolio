import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const skills = [
    'HTML & CSS',
    'Bootstrap 4 & Sass',
    'JavaScript & ES6',
    'React & Redux',
    'Node.js & Express.js',
    'NoSQL & MongoDB',
    'SQL & PostgreSQL',
  ];

  return (
    <div className="homepage">
      <div className="about">
        <h1>About</h1>
        <br></br>
        <h3>Programmer/ Full stack web developer</h3>
        <br></br>
        <p className="about-inf">
          ​As a self-learning programmer, all the projects are finished by
          myself. Therefore, I have developed outstanding self-learning
          capabilities, problem-solving skills and the ability to work
          independently.
        </p>
        <p className="about-inf">
          I work as an engineer in a construction company currently. My job
          needs to cooperate with various parties,  and prepare technical
          reports.
        </p>
        <p className="about-inf">
          Those experiences help me to become a professional programmer.
        </p>
      </div>
      <div>
        <h1>Projects</h1>
        <NavLink to="/waterpoloclub">
          <h3>Water Polo Club</h3>
        </NavLink>
        <NavLink to="/recipeengine">
          <h3>Recipe Engine</h3>
        </NavLink>
      </div>
      <br></br>
      <div className="skills">
        <h1>Skills</h1>
        <div className="row">
          {skills.map((skill, i) => {
            return (
              <h5 className="col-lg-3 skill-item" key={i}>
                {skill}
              </h5>
            );
          })}
        </div>
      </div>
      <br></br>
      <div>
        <h3>GitHub</h3>
        <a href="https://github.com/homanseto" className="github">
          SetoHoMan GitHub Link
        </a>
      </div>
    </div>
  );
};

export default HomePage;
