import React from 'react';
import {AiTwotoneHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <a href="#"><AiTwotoneHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#portfolio"><BsFillBriefcaseFill /></a>
      <a href="#contact"><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar;