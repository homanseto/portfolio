import React from 'react';

import './RecipeEngine.css';
import {
  recipeEngine,
  features,
  projectPlanning,
} from '../../recipeEngine/data';

const RecipeEngine = () => {
  return (
    <div className="waterpolo">
      <h1 className="waterpoloclub_title">Recipe Engine</h1>
      <br></br>
      <h5>
        Link:
        <a href="https://waterpoloclub.herokuapp.com" className="waterclublink">
          https://receipes-engine.netlify.app
        </a>
      </h5>
      <br></br>
      <div className="row ">
        <div className="col-lg-7 col-12">
          <img src={recipeEngine.image} className="waterpolo-into-pic" />
        </div>
        <div className="col-lg-5 col-12 waterpolo-into">
          <h1>{recipeEngine.title}</h1>
          <p className="waterpolo-into-cont">{recipeEngine.description}</p>
        </div>
      </div>
      <br></br>
      <h1 className="waterpoloclub_title">Features</h1>
      <br></br>
      {features.map((feature) => {
        return feature.id % 2 !== 0 ? (
          <div className="row feature" key={feature.id}>
            <div className="col-lg-5 waterpolo-into">
              <h1>{feature.title}</h1>
              <p className="waterpolo-into-cont">{feature.description}</p>
            </div>
            <div className="col-lg-7">
              <img src={feature.image} className="waterpolo-into-pic" />
            </div>
          </div>
        ) : (
          <div className="row feature" key={feature.id}>
            <div className="col-lg-7">
              <img src={feature.image} className="waterpolo-into-pic" />
            </div>
            <div className="col-lg-5 waterpolo-into">
              <h1>{feature.title}</h1>
              <p className="waterpolo-into-cont">{feature.description}</p>
            </div>
          </div>
        );
      })}
      <br></br>
      <h1 className="waterpoloclub_title">Project Planning</h1>
      <br></br>
      {projectPlanning.map((inf) => {
        return (
          <div className="backend">
            <h3>{inf.title}</h3>
            <div className="backend-image-class">
              <img src={inf.image} className="backend-image" />
              <p>{inf.imageRemark}</p>
            </div>
            <p className="backend-text">{inf.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeEngine;
