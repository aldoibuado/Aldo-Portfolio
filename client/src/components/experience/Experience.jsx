import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './experience.css';

function Experience() {
  return (
    <section id="experience">
      <h5>These are the skills I possess!</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* information in regards to Front-End languages I know */}
        <div className="experience__front-end">
         <h3>FrontEnd Development</h3>
         <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>CSS</h4>
            <small className="text-light">Experienced</small>
           </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
           </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>BootStrap</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>React</h4>
            <small className="text-light">Intermediate</small>
           </div>
          </article>
         </div>
        </div>
        {/* Information regarding the back-end langagues I know */}
        <div className="experience__back-end">
        <h3>BackEnd Development</h3>
         <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Node.js</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Express.js</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>OOP</h4>
            <small className="text-light">Intermediate</small>
           </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>ORM</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>MERN stack</h4>
            <small className="text-light">Intermediate</small>
           </div>
          </article>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;