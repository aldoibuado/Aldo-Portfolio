import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <div className="navbar">
        <div className="toggleButton">
          <button></button>
        </div>
        <div className="links">
         <Link to='/'> About </Link>
         <Link to='/project'> Projects </Link>
         <Link to='/contact'> Contact </Link>
         <Link to='/resume'> Resume </Link>
        </div>
    </div>
        
    )
}

export default Navigation;