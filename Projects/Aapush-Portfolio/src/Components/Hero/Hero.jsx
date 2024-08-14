import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import './Hero.css';
import profile_photo from '../../assets/profile_photo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration:1400,
    });
  }, []);

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
      <img className="img" src={profile_photo}   data-aos="zoom-in-down" alt="" />
      <h1 className="multiple-text" data-aos="fade-left">
        <span>I'm MD. Shahid Afridi, </span>
        <br/>
        <span className="typedJs" ref={typedElement}></span>
      </h1>
      <p data-aos="fade-right">
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
