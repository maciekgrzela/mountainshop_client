import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';

const SearchbarResult = ({ product, handleClearProducts }) => {
  const dispatch = useDispatch();

  return (
    <div className='search-results__result search-result'>
      <img
        className='search-result__image'
        src={product.image}
        alt={product.name}
      />
      <div className='search-result__info'>
        <Link
          onClick={() => {
            dispatch(skipWelcome());
            handleClearProducts();
          }}
          to={`/products/${product.id}`}
        >
          <span className='text-weight-400 search-result__name'>
            {product.name}
          </span>
        </Link>
        <span className='text-weight-300 search-result__category'>
          {product.category.name}
        </span>
        <span className='text-weight-bold search-result__price'>
          {`${product.grossPrice.toFixed(2)}zł`}
        </span>
      </div>
    </div>
  );
};

export default SearchbarResult;
