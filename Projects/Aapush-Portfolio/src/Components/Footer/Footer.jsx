import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Example icon


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>
            Proudly crafting exceptional digital experiences as a frontend
            developer from India.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="" alt="" />

            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="circle-div"> 
      <a href="/"> 
      <div className="scroll-top">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>
 
</div>
</a>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          ©2024 MD. Shahid Afridi All rights reserved.{" "}
        </p> 
        <div className="footer-bottom-right">
          <div><a href="https://x.com/Aapush2" target="_blank" >Twitter </a> </div>
          <div><a href="https://www.linkedin.com/in/md-shahidafridi/" target="_blank" >LinkedIn </a> </div>
          <div><a href="https://github.com/Aapush01" target="_blank" >Github</a> </div>
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
