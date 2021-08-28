import React from 'react';
import plecakMock from '../../../Assets/images/plecak_mock.jpg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleProductScrolling } from '../../../Actions/ActionCreators/Interface';

const ProductsDetailsBar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div className='products-details__bar products-bar'>
      <Link
        onClick={(e) => dispatch(setSingleProductScrolling(false))}
        to='/products'
      >
        <button className={`products-details__back-btn`}>
          <FiArrowLeft />
        </button>
      </Link>
      <div className='products-bar__image'>
        <img
          src={products.displayedProduct.image}
          alt={products.displayedProduct.name}
        />
      </div>
      <span className='products-bar__title'>
        {products.displayedProduct.name}
      </span>
    </div>
  );
};

export default ProductsDetailsBar;
