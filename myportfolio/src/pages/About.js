import React from "react";
import profile from "../assets/images/Aldo-profile.jpg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="prompt">
        <img className="profile" src={profile} alt="Aldo Ibuado" />
        <p className='about1'> I am currently finishing my full-stack web developer program! I also enjoy learning new skills and pushing myself to excel each day!</p>
        <p className='about1'> My journey into becoming a web developer has had many challenges, but I meet them head on!</p>
      </div>
    </div>
  );
}

export default About;
