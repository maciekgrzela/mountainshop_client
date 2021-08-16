import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductsDetailsHeading = ({ id }) => {
  return (
    <div className='products-details__headline mb-2'>
      <div className='products-details__controls'>
        <Link to='/products'>
          <button className={`products-details__back-btn`}>
            <FiArrowLeft />
          </button>
        </Link>
      </div>
      <h3 className='products-details__header my-1'>
        Nazwa produktu o identyfikatorze: {id}
      </h3>
    </div>
  );
};

export default ProductsDetailsHeading;
