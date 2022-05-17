import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
        <h1>Van strahlen Alex</h1>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        {/* <li><a href="#testimoniales">Testimonios</a></li> */}
        <li><a href="#contact">Contacto</a></li>
      </ul>
      
      <div className="footer__sociales">
        <a href='https://www.linkedin.com/in/vanstrahlenalex/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/VanstrahlenAlex' target='_blank' rel="noreferrer"><FaGithub /> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Van strahlen Alex. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer;