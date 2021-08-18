import React from 'react';
import plecakMock from '../../../Assets/images/plecak_mock.jpg';
import { FiShoppingCart } from 'react-icons/fi';
import Magnifier from 'react-magnifier';
import { Link } from 'react-router-dom';

const ProductsViewProduct = ({ product, viewType }) => {
  return (
    <div className={`products-view__product product product--${viewType}`}>
      <Magnifier src={plecakMock} className='product__image' />
      <div className='product__info'>
        <Link to='/products/12345'>
          <h3 className='product__name'>{product.name}</h3>
        </Link>
        <h5 className='product__price'>{`${product.grossPrice} PLN`}</h5>
        <p className='product__desc'>{`${product.description.substr(
          0,
          150
        )}...`}</p>
      </div>
      <button className='product__add-to-cart'>
        Dodaj do koszyka <FiShoppingCart />
      </button>
    </div>
  );
};

export default ProductsViewProduct;
