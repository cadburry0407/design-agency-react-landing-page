import React from 'react';

import '../styles/services.scss';

import activityOne from '../images/activity_1.png';
import activityTwo from '../images/activity_2.png';
import activityThree from '../images/activity_3.png';

const Services = () => {
  return (
    <>
      <div className="business-solution" id="services">
        <div className="container">
          <div className="solution__heading">
            <h3>What we do</h3>
            <h2>
              We provide the Perfect Solution <br />
              to your business growth
            </h2>
          </div>
          <div className="offers">
            <div className="offers__item">
              <img
                src={activityOne}
                alt="Grow Your Business"
                className="offers__icon"
              />
              <h2>Grow Your Business</h2>
              <p>We help identify the best ways to improve your business</p>
              <button className="offers__cta-btn">Learn More</button>
            </div>
            <div className="offers__item">
              <img
                src={activityTwo}
                alt="Improve brand loyalty"
                className="offers__icon"
              />
              <h2>Improve brand loyalty</h2>
              <p>We help identify the best ways to improve your business</p>
              <button className="offers__cta-btn">Learn More</button>
            </div>
            <div className="offers__item">
              <img
                src={activityThree}
                alt="Improve Business Model"
                className="offers__icon"
              />
              <h2>Improve Business Model</h2>
              <p>We help identify the best ways to improve your business</p>
              <button className="offers__cta-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
