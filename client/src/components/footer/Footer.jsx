import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import './footer.css';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aldo</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://instagram.com'><AiFillInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer;