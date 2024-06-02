import React from "react";
import "./Hero.css";
import profile_photo from "../../assets/profile_photo.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <img className="img" src={profile_photo} alt="" />
      <h1>
        {" "}
        <span>I'm MD. Shahid Afridi, </span> frontend developer based in India.
      </h1>
      <p>
        Passionate to work in the field of software development and work on
        real-time projects. Keen on exploring challenging problems and possible
        way to solve them.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact" >  Hire Me </AnchorLink> </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
