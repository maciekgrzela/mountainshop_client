import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';

const Welcome = () => {
  const dispatch = useDispatch();

  const goToStore = () => {
    dispatch(skipWelcome());
  };

  return (
    <div className='welcome-page'>
      <div className='welcome-page__banner banner'>
        <div className='banner__container'>
          <h2 className='banner__title'>Zimowe szaleństwo!</h2>
          <h4 className='banner__desc'>Wszystko do 60% taniej!</h4>
          <button onClick={goToStore} className='banner__go-to-store'>
            Przejdź do sklepu <FiArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
