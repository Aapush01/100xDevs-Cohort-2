import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
 
 
 
const Contact = () => {
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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your respones is Submitted");
    }
  };

  return (
    <div id="contact" className="contacts">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm passionate about building beautiful and user-friendly websites
            that leave a lasting impact. Whether you're a potential client
            looking to bring your vision to life or a forward-thinking company
            seeking a dedicated frontend engineer, I'm here to collaborate and
            turn ideas into reality. Reach out, and let's embark on a journey to
            success!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aapushansari@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
               
              <p>+91-87895802XX</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bihar, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Type your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit" >
            Submit now{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
