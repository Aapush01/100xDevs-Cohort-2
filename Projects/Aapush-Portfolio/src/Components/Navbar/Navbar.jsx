import React, { useRef, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration:1400,
    });
  }, []);
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
 

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  
  return (
    <div id="navbar" className="navbar">
     
      <img src={menu_open} className="nav-mob-open" onClick={openMenu} alt="" data-aos="fade-down" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          className="nav-mob-close"
          onClick={closeMenu}
          alt=""
        />

        <li  onClick={closeMenu} className="home">
          <AnchorLink className="anchor-link" href="#navbar">
            <p onClick={() => setMenu("home")} data-aos="fade-down" >Home</p>{menu==="home"? <img src={underline} alt="" data-aos="fade-down"/> : <></>}
          </AnchorLink>
        </li>
        <li  onClick={closeMenu} className="about-me">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")} data-aos="fade-up">About me</p>{menu==="about"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li  onClick={closeMenu} className="skills">
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")} data-aos="fade-down">Skills</p>{menu==="skills"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li  onClick={closeMenu} className="services">
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")} data-aos="fade-up">Services</p>{menu==="services"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li  onClick={closeMenu} className="contact">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")} data-aos="fade-down">Contact</p>{menu==="contact"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect" data-aos="fade-up">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
