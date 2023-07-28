// HomeBanner.js

import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./HomeBanner.css";

const generateSlides = () => {
  const slides = [];
  for (let i = 1; i <= 5; i++) {
    slides.push({
      src: `/caraousel/image-${i}.jpg`,
      alt: `Slide ${i}`,
      title: `Slide ${i}`,
      description: `This is the description for slide ${i}.`,
      buttonText: 'Shop Now',
    });
  }
  return slides;
};

const HomeBanner = () => {

  const options = {
    type: 'loop',
    gap: '1rem',
    autoWidth: true,
    focus    : 0,
    omitEnd  : true,
    autoplay: true,
    resetProgress: false,
    arrows: true,
    pagination: true,
    perPage: 1,
    perMove: 1,
    interval: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnTrim: true,
    waitForTransition: true,
    keyboard: true,
    drag: true,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: 3,
    trimSpace: true,
    trimFractions: true,
    updateOnMove: false,
    throttle: 100,
    TimeRanges: 5000,
    height: '30rem',
  };

  return (
    <div className="home-banner">

      <div className="wrapper">
        <Splide
          options={options}
          hasTrack={false}
        >
          <div style={{ position: 'relative' }}>
            <SplideTrack>
              {generateSlides().map(slide => (
                <SplideSlide key={slide.src}>
                  <div className="slide-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <button>{slide.buttonText}</button>
                  </div>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default HomeBanner;