import React, { useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSearchProducts,
  fetchSearchProducts,
  setSearchFilter,
} from '../../Actions/ActionCreators/Products';
import SearchbarResult from './SearchbarResult';

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
                <SearchbarResult
                  product={product}
                  handleClearProducts={handleClearProducts}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
