import React, { useEffect } from 'react';

import { selectElement } from '../helpers/helpers';

import '../styles/testimonials.scss';

import ceo from '../images/avatar_ceo.png';

const Testimonials = () => {
  useEffect(() => {
    const slider = selectElement('.testimonials__wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  useEffect(() => {
    const leftBtn = selectElement('#btn-testi-left');
    const rightBtn = selectElement('#btn-testi-right');

    const slider = selectElement('.testimonials__wrapper');
    const sliderItem = selectElement('.testimonials__wrapper-item');

    const style = window.getComputedStyle(sliderItem);
    let marginRight = style.getPropertyValue('margin-right');

    const marginRightNum = parseInt(marginRight.replace(/[^0-9]/g, ''));

    leftBtn.addEventListener('click', () => {
      slider.scrollLeft += sliderItem.offsetWidth + marginRightNum;
    });

    rightBtn.addEventListener('click', () => {
      slider.scrollLeft -= sliderItem.offsetWidth + marginRightNum;
    });
  }, []);

  return (
    <>
      <div className="testimonials" id="testimonial">
        <div className="container">
          <div className="testimonials__heading">
            <div>
              <h3>Testimonials</h3>
              <h2>
                See What Our customer <br />
                say about us
              </h2>
            </div>
            <div className="btn-testimonials">
              <button
                className="btn-testimonials-left"
                id="btn-testi-left"
              ></button>
              <button
                className="btn-testimonials-right"
                id="btn-testi-right"
              ></button>
            </div>
          </div>
          <div className="testimonials__wrapper">
            <div className="testimonials__wrapper-item">
              <p>
                Thank You for your service. I am very pleased with the result, I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="testimonials__wrapper-item-user">
                <img src={ceo} alt="Emily Stones" />
                <div className="user-box">
                  <h3>Emily Stones</h3>
                  <h3>CEO, Marketing Guru</h3>
                </div>
              </div>
            </div>
            <div className="testimonials__wrapper-item">
              <p>
                Thank You for your service. I am very pleased with the result, I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="testimonials__wrapper-item-user">
                <img src={ceo} alt="Emily Stones" />
                <div className="user-box">
                  <h3>Emily Stones</h3>
                  <h3>CEO, Marketing Guru</h3>
                </div>
              </div>
            </div>
            <div className="testimonials__wrapper-item">
              <p>
                Thank You for your service. I am very pleased with the result, I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="testimonials__wrapper-item-user">
                <img src={ceo} alt="Emily Stones" />
                <div className="user-box">
                  <h3>Emily Stones</h3>
                  <h3>CEO, Marketing Guru</h3>
                </div>
              </div>
            </div>
            <div className="testimonials__wrapper-item">
              <p>
                Thank You for your service. I am very pleased with the result, I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="testimonials__wrapper-item-user">
                <img src={ceo} alt="Emily Stones" />
                <div className="user-box">
                  <h3>Emily Stones</h3>
                  <h3>CEO, Marketing Guru</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
