import React from 'react';
import plecakMock from '../../../Assets/images/plecak_mock.jpg';
import { FiShoppingCart } from 'react-icons/fi';
import Magnifier from 'react-magnifier';
import { Link } from 'react-router-dom';

const ProductsViewProduct = ({ viewType }) => {
  return (
    <div className={`products-view__product product product--${viewType}`}>
      <Magnifier src={plecakMock} className='product__image' />
      <div className='product__info'>
        <Link to='/products/12345'>
          <h3 className='product__name'>Nazwa Produktu</h3>
        </Link>
        <h5 className='product__price'>290.99PLN</h5>
        <p className='product__desc'>
          Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi aliquip
          excepteur enim.Laboris commodo commodo exercitation et elit.
        </p>
      </div>
      <button className='product__add-to-cart'>
        Dodaj do koszyka <FiShoppingCart />
      </button>
    </div>
  );
};

export default ProductsViewProduct;
