import React from 'react';
import {AiTwotoneHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';
import './navbar.css';
import {useState} from 'react';

function Navbar() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillBriefcaseFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar;