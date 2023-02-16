import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer () {
    return (
       <div className='footer'>
        <div className="socialMedia">
          <LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/aldo-ibuado-7a3639153/'}/>
          <GitHubIcon onClick={event => window.location.href='https://github.com/aldoibuado'}/>
          <EmailIcon onClick={event => window.location.href='mailto:aldo.ibuado@gmail.com'}/>
        </div>
        <p> &copy; 2023 All Rights Reserved</p>
       </div>
    )
}

export default Footer;