import React, { useRef, useState } from "react";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
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
     
      <img src={menu_open} className="nav-mob-open" onClick={openMenu} alt="" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          className="nav-mob-close"
          onClick={closeMenu}
          alt=""
        />

        <li className="home">
          <AnchorLink className="anchor-link" href="#navbar">
            <p onClick={() => setMenu("home")} >Home</p>{menu==="home"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li className="about-me">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")} >About me</p>{menu==="about"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li className="skills">
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")} >Skills</p>{menu==="skills"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li className="services">
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")} >Services</p>{menu==="services"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li className="contact">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")} >Contact</p>{menu==="contact"? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
