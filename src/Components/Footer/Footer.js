import React from 'react';
import Contact from './Contact';
import Explanation from './Explanation';
import Shortcuts from './Shortcuts';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className='page-wrapper__footer footer'>
      <div className='footer__container'>
        <div className='footer__contact'>
          <Contact />
        </div>
        <div className='footer__shortcut'>
          <Shortcuts />
        </div>
        <div className='footer__socials'>
          <SocialMedia />
        </div>
      </div>
      <div className='footer__explanation'>
        <Explanation />
      </div>
    </footer>
  );
};

export default Footer;
