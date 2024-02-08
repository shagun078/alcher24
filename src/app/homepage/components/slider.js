"use client"
import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '../homepage.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const MySlider = () => {
  useEffect(() => {
    const splide = new Splide('.splide', {
      pagination: false,
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3, 
      drag:false,
      autoScroll: {
        speed: 2,
      },
      arrows: false,
    });

    splide.mount({ AutoScroll });

    // Cleanup on component unmount
    return () => {
      splide.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div className='splideWrapper'>
    <img src="left_gate.svg" id="leftGate"></img>
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img src="download.png" className='sponsorImage' alt="Slide 1" />
            </li>
            <li className="splide__slide">
              <img src="download.png" className='sponsorImage' alt="Slide 2" />
            </li>
            <li className="splide__slide">
              <img src="download.png" className='sponsorImage' alt="Slide 3" />
            </li>
          </ul>
        </div>
      </div>
      <img src="right_gate.svg" id="rightGate"></img>
    </div>

  );
};

export default MySlider;
