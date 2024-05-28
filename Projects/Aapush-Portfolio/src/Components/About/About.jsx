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
              Hi, I'm MD. Shahid Afridi, a passionate frontend developer who
              loves creating smooth and engaging user experiences. I'm always
              curious about the latest technologies and driven to innovate. With
              a strong foundation in frontend development and a keen eye for
              design, I'm ready to make my mark in the world of web development.
              Join me on this exciting journey as I combine my technical skills
              and creativity to shape the digital landscape of tomorrow.{" "}
            </p>
            <p>
              {" "}
              I'm passionate about frontend development and love bringing ideas
              to life with code and creativity. I focus on crafting smooth and
              engaging user experiences. With my technical skills and artistic
              touch, I aim to push the limits of web design. Join me in shaping
              the digital world, one pixel at a time.{" "}
            </p>
          </div>
          <div id="skills" className="about-skills"> <h1>Skills</h1>
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
              <p> JavaScript </p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Typescript</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>MongoDB</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Express.js</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> React.js</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Node.js</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Next.js</p> <hr style={{ width: "55%" }} />
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
