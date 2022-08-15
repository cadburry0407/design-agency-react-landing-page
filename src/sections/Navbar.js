import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { selectElement } from '../helpers/helpers';

import '../styles/navbar.scss';

import logo from '../images/logos/logo_design-agency.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.title = 'Design Agency';
  }, []);

  useEffect(() => {
    const navbarElement = selectElement('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 15) {
        navbarElement.classList.add('activated');
      } else {
        navbarElement.classList.remove('activated');
      }
    });
  }, []);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="header" id="header">
        <nav className="nav">
          <Link to="header-content" className="logo-link">
            <img src={logo} alt="Design Agency" className="nav__logo" />
          </Link>

          <ul className="nav__links">
            <li className="nav__items">
              <Link to="services" className="nav__link">
                Services
              </Link>
            </li>
            <li className="nav__items">
              <Link to="testimonial" className="nav__link">
                About Us
              </Link>
            </li>
            <li className="nav__items">
              <Link to="contactus" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav__btn">
            <button className="nav__btn-login">Login</button>
            <button className="nav__btn-register">Register</button>
          </div>
          <button
            className={
              isActive
                ? 'nav__btn-toggle-menu activated'
                : 'nav__btn-toggle-menu '
            }
            id="menu-toggle-icon"
            onClick={handleToggle}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button>

          <div className={isActive ? 'menu activated' : 'menu'} id="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="#services">Services</a>
              </li>
              <li className="menu__list-item">
                <a href="#testimonial">About Us</a>
              </li>
              <li className="menu__list-item">
                <a href="#contactus">Contact Us</a>
              </li>
              <li className="menu__list-item">
                <a href="/">Login</a>
              </li>
              <li className="menu__list-item">
                <a href="/">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
