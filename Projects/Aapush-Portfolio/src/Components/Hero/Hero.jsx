import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import profile_photo from '../../assets/profile_photo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['frontend developer', 'backend developer', 'full-stack developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay:900,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <img className="img" src={profile_photo} alt="" />
      <h1 className="multiple-text">
        <span>I'm MD. Shahid Afridi, </span>
        <span ref={typedElement}></span>
      </h1>
      <p>
        Passionate to work in the field of software development and work on
        real-time projects. Keen on exploring challenging problems and possible
        ways to solve them.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Hire Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
