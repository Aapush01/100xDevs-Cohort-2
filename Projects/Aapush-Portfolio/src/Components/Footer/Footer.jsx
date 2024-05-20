import React from "react";
import "./Footer.css";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7585b00a-6e55-4bd7-b462-efb233e4e91f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Thanks for Subscribe")
    }
  };



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
            
            <input type="email" placeholder="Enter your email"  />
            {/* <input type="email" placeholder="Enter your email"  /> */}
          </div>
          <div className="footer-subscribe"   >Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          ©2024 MD. Shahid Afridi All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
