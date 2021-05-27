import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
const Welcome = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-page__banner banner'>
        <div className='banner__container'>
          <h2 className='banner__title'>Przygotuj się na zimowe szaleństwo!</h2>
          <h4 className='banner__desc'>Teraz wszystko do 60% taniej!</h4>
          <button className='banner__go-to-store'>
            Przejdź do sklepu <FiArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
