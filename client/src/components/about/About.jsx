import React from 'react';
import photo from '../../assets/Alita.png';
import {FaAward} from 'react-icons/fa';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import './about.css';

function about() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
           <img src={photo} alt="art" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>8 months Experience</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="folder__icon"/>
              <h5>Projects</h5>
              <small>top 6 projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ipsam officia ad harum at corporis fuga, nisi, 
            libero reiciendis laboriosam laborum ullam sunt omnis voluptatum earum beatae blanditiis, exercitationem sit?
          </p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default about;