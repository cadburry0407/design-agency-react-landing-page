import React from 'react';

import '../styles/header.scss';

import headingImage from '../images/heading-img-2.png';

const Header = () => {
  return (
    <>
      <div className="header-content" id="header-content">
        <div className="container">
          <div className="content">
            <h1 className="content__slogan">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="content__description">
              We help business like yours earn more customers, standout from
              competitors, make more money
            </p>
            <button className="content__btn-cta">Get Started</button>
          </div>
          <div className="header-image">
            <img
              src={headingImage}
              alt="design agency"
              className="header-image-item"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
