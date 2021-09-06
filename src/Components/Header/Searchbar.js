import React, { useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSearchProducts,
  fetchSearchProducts,
  setSearchFilter,
} from '../../Actions/ActionCreators/Products';
import { Link } from 'react-router-dom';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';

const Searchbar = () => {
  const searchRef = useRef();

  const dispatch = useDispatch();
  const results = useSelector((state) => state.products.searchedProducts);
  const filter = useSelector(
    (state) => state.products.filterForSearchedProducts
  );
  const searchProductsError = useSelector(
    (state) => state.interface.searchProductsError
  );

  const handleSearchProduct = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  const handleClearProducts = () => {
    dispatch(clearSearchProducts());
    searchRef.current.value = '';
  };

  useEffect(() => {
    if (filter !== null) {
      if (filter !== '') {
        dispatch(fetchSearchProducts());
      } else {
        handleClearProducts();
      }
    }
  }, [filter]);

  return (
    <div className='topbar__searchbar searchbar'>
      <div className='searchbar__wrapper'>
        <input
          ref={searchRef}
          type='text'
          name='search'
          placeholder='Wyszukaj produkt...'
          onChange={handleSearchProduct}
          className='searchbar__input'
        />
        <button className='searchbar__btn'>
          <FiSearch className='searchbar__icon' />
        </button>
        <div className='searchbar__results search-results'>
          {searchProductsError ? (
            <span>Wystąpił błąd podczas wyszukiwania produktów</span>
          ) : (
            <>
              {results.map((product) => (
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
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
