import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
  return (
    <div className='footer'>
      <Link to='/'><img src='../public/NH_logo_white.png'/></Link>
      <p>Nono Hu</p>
      <a href='mailto:swenonohu@gmail.com'>swenonohu@gmail.com </a>
      <p>© 2022 Fullstack Academy - JPFP</p>
    </div>
  )
  
};

export default Footer;