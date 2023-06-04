import React from 'react';
import CTA from './CTA';
import photo from '../../assets/Alita.png';
import HeaderSocials from './HeaderSocials';
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Aldo Ibuado</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={photo} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;