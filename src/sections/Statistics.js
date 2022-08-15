import React from 'react';

import '../styles/statistics.scss';

import statsOne from '../images/stats_img-1.png';
import statsTwo from '../images/stats_img-2.png';
import statsThree from '../images/stats_img-3.png';
import statsFour from '../images/stats_img-4.png';

const Statistics = () => {
  return (
    <>
      <div className="statistics-container" id="statistics">
        <div className="container">
          <div className="stats">
            <div className="stats__item">
              <img
                src={statsOne}
                alt="Completed Projects"
                className="stats__item-image"
              />
              <p>Completed Projects</p>
              <h1>
                <span className="stats-1-visible">100</span>+
              </h1>
            </div>
            <div className="stats__item">
              <img
                src={statsTwo}
                alt="Customer Satisfaction"
                className="stats__item-image"
              />
              <p>Customer Satisfaction</p>
              <h1>100%</h1>
            </div>
            <div className="stats__item">
              <img
                src={statsThree}
                alt="Raised by Clients"
                className="stats__item-image"
              />
              <p>Raised by Clients</p>
              <h1>$50M</h1>
            </div>
            <div className="stats__item">
              <img
                src={statsFour}
                alt="Years in Business"
                className="stats__item-image"
              />
              <p>Years in Business</p>
              <h1>21yrs</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
