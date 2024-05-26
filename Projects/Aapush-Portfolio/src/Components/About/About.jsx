import React from "react";
import "./About.css";
import profile_photo from "../../assets/profile_photo.jpg";
import theme_img from "../../assets/theme_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* theme img add */}
        <img className="theme_img" src={theme_img} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* //profile picture */}
          <img className="photo" src={profile_photo} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              Meet MD. Shahid Afridi, a passionate and creative individual with
              a flair for frontend development. Armed with a deep curiosity for
              emerging technologies and a relentless drive to craft seamless
              user experiences, MD. Shahid Afridi is on a mission to bring
              innovation to the digital realm. With a foundation in frontend
              development and a keen eye for design, MD. Shahid Afridi is poised
              to make waves in the ever-evolving world of web development. Join
              MD. Shahid Afridi on this journey as they combine technical
              expertise with boundless creativity to shape the digital
              landscapes of tomorrow.{" "}
            </p>
            <p>
              {" "}
              Passionate about frontend development, I bring ideas to life with
              code and creativity. Fueled by innovation, I craft seamless user
              experiences that captivate and inspire. With a blend of technical
              skill and artistic flair, I strive to push the boundaries of web
              design. Join me in shaping the digital landscape, one pixel at a
              time.{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Tailwind</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> JavaScript </p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Typescript</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> React.js</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Node.js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Next.js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Docker</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Java</p> <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> C & C++</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
