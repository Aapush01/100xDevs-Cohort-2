import React from "react";
import "./Services.css";
import service_img from "../../assets/service_img.jpg";

const Services = () => {
  return (
    <div id="services" className="service">
      <div className="services-title">
        <h1>My Services</h1>
        {/* theme patter img */}
        <img className="service-img" src={service_img} alt="" />
      </div>
      <div className="services-container">
        <div className="service-provide">
          <h3>01</h3>
          <h1>Website Development</h1>
          <p>
            {" "}
            Creating responsive and user-friendly websites using HTML, CSS, and
            JavaScript.
          </p>
        </div>
        <div className="service-provide">
          <h3>02</h3>
          <h1>Web Application Development</h1>
          <p>
            Building interactive web applications that function seamlessly
            across various devices and browsers.
          </p>
        </div>
        <div className="service-provide">
          <h3>03</h3>
          <h1>UI/UX Design</h1>
          <p>
            {" "}
            Designing intuitive user interfaces and optimizing user experience
            through layout, colors, typography, and navigation.
          </p>
        </div>
        <div className="service-provide">
          <h3>04</h3>
          <h1>Responsive Design</h1>
          <p>
            Ensuring websites and applications adapt smoothly to different
            screen sizes and devices, enhancing accessibility and usability.
          </p>
        </div>
        <div className="service-provide">
          <h3>05</h3>
          <h1>Cross-Browser Compatibility</h1>
          <p>
            {" "}
            Ensuring consistent performance and appearance across different web
            browsers.
          </p>
        </div>
        <div className="service-provide">
          <h3>06</h3>
          <h1>Performance Optimization</h1>
          <p>
            {" "}
            Improving website and application speed and efficiency through code
            optimization, image compression, and other techniques.
          </p>
        </div>

        <div className="service-provide">
          <h3>07</h3>
          <h1>Accessibility Compliance</h1>
          <p>
            {" "}
            Ensuring websites and applications meet accessibility standards,
            making them usable by people with disabilities.
          </p>
        </div>
        <div className="service-provide">
          <h3>08</h3>
          <h1>Frontend Framework Implementation</h1>
          <p>
            {" "}
            Utilizing frontend frameworks like React, Angular, or Vue.js to
            streamline development and enhance functionality.
          </p>
        </div>
        <div className="service-provide">
          <h3>09</h3>
          <h1>Integration with Backend Systems </h1>
          <p>
            {" "}
            Collaborating with backend developers to integrate frontend
            interfaces with server-side applications and databases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
