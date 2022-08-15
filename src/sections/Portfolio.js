import React from 'react';

import '../styles/portfolio.scss';

import portfolioOne from '../images/portfolio_img-1.png';
import portfolioTwo from '../images/portfolio_img-2.png';
import portfolioThree from '../images/portfolio_img-3.png';
import portfolioFour from '../images/portfolio_img-4.png';

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="portfolio__heading">
            <h3>Our portfolio</h3>
            <h2>
              We provide the Perfect Solution <br />
              to your business growth
            </h2>
          </div>
          <div className="portfolio__apps">
            <div className="portfolio__apps-item">
              <div className="portfolio__apps-item-website">
                <img
                  src={portfolioOne}
                  alt="Portfolio 1"
                  className="portfolio__apps-item-website-image"
                />
                <h2>Digital Marketing Agency Website</h2>
                <p>
                  This is a website for a client who want to achieve their goals
                  and meet their user need while also increasing their reach.
                  Accross all platforms. This is a website rebrand.
                </p>
              </div>
              <div className="portfolio__apps-item-website">
                <img
                  src={portfolioThree}
                  alt="Portfolio 3"
                  className="portfolio__apps-item-website-image"
                />
                <h2>Digital Marketing Agency Website</h2>
                <p>
                  This is a website for a client who want to achieve their goals
                  and meet their user need while also increasing their reach.
                  Accross all platforms. This is a website rebrand.
                </p>
              </div>
            </div>
            <div className="portfolio__apps-item">
              <div className="portfolio__apps-item-website">
                <img
                  src={portfolioTwo}
                  alt="Portfolio 2"
                  className="portfolio__apps-item-website-image"
                />
                <h2>Digital Marketing Agency Website</h2>
                <p>
                  This is a website for a client who want to achieve their goals
                  and meet their user need while also increasing their reach.
                  Accross all platforms. This is a website rebrand.
                </p>
              </div>
              <div className="portfolio__apps-item-website">
                <img
                  src={portfolioFour}
                  alt="Portfolio 4"
                  className="portfolio__apps-item-website-image"
                />
                <h2>Digital Marketing Agency Website</h2>
                <p>
                  This is a website for a client who want to achieve their goals
                  and meet their user need while also increasing their reach.
                  Accross all platforms. This is a website rebrand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
