import React from 'react';

import '../styles/subscribe.scss';

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-wrapper" id="contactus">
        <div className="container">
          <div className="subscribe">
            <h2>Subscribe</h2>
            <h3>
              subscribe to get the latest <br />
              news about us
            </h3>
            <p>
              please drop your email below to get daily update about what we do
            </p>

            <form>
              <input type="text" placeholder="Enter Your Email Address" />
              <button type="submit" className="btn-subscribe">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
