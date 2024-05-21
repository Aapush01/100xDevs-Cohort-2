// src/Card.js
import React from 'react';
import './Card.css';
import profile_photo from "../../assets/profile_photo.jpg";

const Card = () => {
  return (
    <div className="card">

       <img src={profile_photo} alt="img" width="300" />
      <h1>Name: MD. Shahid Afridi</h1>
      <p>Age: 24</p>
      <p>Occupation: Software Developer</p>
    </div>
  );
};

export default Card;
