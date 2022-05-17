import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/ME.JPG';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola soy</h5>
        <h1>Van strahlen Alex</h1>
        <h5 className='text-light'>Frontend React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='Me' />
        </div>
        <a href='contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;