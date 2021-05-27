import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <h4 className='social-media__title'>Social media</h4>
      <hr className='social-media__line' />
      <div className='social-media__container'>
        <a href='http://facebook.com'>
          <FiFacebook />
        </a>
        <a href='http://instagram.com'>
          <FiInstagram />
        </a>
        <a href='http://twitter.com'>
          <FiTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
