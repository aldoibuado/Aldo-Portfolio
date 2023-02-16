import React from "react";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1>Hello, my name is Aldo Ibuado!</h1>
      <div className="prompt">
        <img className="profile" src="Aldo-profile.jpg" alt="Aldo Ibuado" />
        <p className='about1'> I am currently finishing my full-stack web developer program! I also enjoy learning new skills and pushing myself to excel each day!</p>
        <p className='about1'> My journey into becoming a web developer has had many challenges, but I meet them head on!</p>
      </div>
    </div>
  );
}

export default About;
