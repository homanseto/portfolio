import React from 'react';
import './WaterPoloClub.css';
import {
  waterPoloClub,
  features,
  backEnd,
  frontEnd,
} from '../../waterpoloclub/data';

const WaterPoloClub = () => {
  return (
    <div className="waterpolo">
      <h1 className="waterpoloclub_title">Water Polo Club</h1>
      <br></br>
      <h5>
        Link:
        <a href="https://waterpoloclub.herokuapp.com" className="waterclublink">
          https://waterpoloclub.herokuapp.com
        </a>
      </h5>
      <br></br>
      <div className="row ">
        <div className="col-lg-7 col-12">
          <img src={waterPoloClub.image} className="waterpolo-into-pic" />
        </div>
        <div className="col-lg-5 col-12 waterpolo-into">
          <h1>{waterPoloClub.title}</h1>
          <p className="waterpolo-into-cont">{waterPoloClub.description}</p>
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
      <h1 className="waterpoloclub_title">BACK-END</h1>
      <br></br>
      {backEnd.map((inf) => {
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
      <br></br>
      <h1 className="waterpoloclub_title">FRONT-END</h1>
      <br></br>
      {frontEnd.map((inf) => {
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

export default WaterPoloClub;
