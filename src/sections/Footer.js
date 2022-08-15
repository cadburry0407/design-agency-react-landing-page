import React from 'react';

import '../styles/footer.scss';

import facebookLogo from '../images/logos/fb_footer-logo.png';
import twitterLogo from '../images/logos/twitter_footer-logo.png';
import linkedinLogo from '../images/logos/linkedin_footer-logo.png';
import instagramLogo from '../images/logos/instagram_footer-logo.png';

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer">
            <div className="social">
              <h1>Web Logo</h1>
              <p>
                Some footer text about the agency. Just a liitle descriptionto
                help people understand you better
              </p>
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/">
                      <img src={facebookLogo} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={twitterLogo} alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={linkedinLogo} alt="Linkden" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagramLogo} alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>

              <p>Copyright Design Agency 2022</p>
            </div>
            <div className="quicklinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Portfilio</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="address">
              <h2>Address</h2>
              <p>
                Design Agency Head Office <br />
                Airport Road <br />
                United Arab Emirate
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
