import React from 'react';
import './header.css';
import CTA from './CTA';
import photo from '../../assets/Alita.png';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Aldo Ibuado</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />

        <div className="me">
          <img src={photo} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header;