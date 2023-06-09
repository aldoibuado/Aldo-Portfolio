import React from 'react';
import {AiTwotoneMail} from 'react-icons/ai'
import './contact.css';

function contact() {
  return (
    <section id="contact">
      <h5>Contact Me</h5>
      <h2>Reach Out</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail />
            <h4>Email</h4>
            <h5>aldo.ibuado@gmail.com</h5>
            <a href="mailto:aldo.ibuado@gmail.com" target="_blank" rel='noreferrer'>Send me a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter Your Message" required />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default contact;