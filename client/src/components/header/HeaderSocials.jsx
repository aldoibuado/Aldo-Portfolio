import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/aldo-ibuado/" target="blank"><BsLinkedin /></a>
       <a href="https://github.com/aldoibuado" target="blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;