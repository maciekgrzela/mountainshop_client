import React from 'react';
import plecakMock from '../../../Assets/images/plecak_mock.jpg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ProductsDetailsBar = () => {
  return (
    <div className='products-details__bar products-bar'>
      <Link to='/products'>
        <button className={`products-details__back-btn`}>
          <FiArrowLeft />
        </button>
      </Link>
      <div className='products-bar__image'>
        <img src={plecakMock} alt='Plecak' />
      </div>
      <span className='products-bar__title'>
        Produkt o jakiejś konkretnej nazwie
      </span>
    </div>
  );
};

export default ProductsDetailsBar;
