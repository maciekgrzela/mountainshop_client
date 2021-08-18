import React from 'react';
import { useDispatch } from 'react-redux';
import { changeProductsViewType } from '../../../Actions/ActionCreators/Interface';
import { FiGrid, FiList } from 'react-icons/fi';

const ProductsViewHeading = ({ viewType, selectedCategory }) => {
  const dispatch = useDispatch();

  const setGridView = () => {
    dispatch(changeProductsViewType('grid'));
  };

  const setListView = () => {
    dispatch(changeProductsViewType('list'));
  };

  return (
    <div className='products-view__headline'>
      <h3 className='products-view__header'>
        {selectedCategory === null ? (
          'Wszystkie produkty'
        ) : (
          <>
            Produkty z kategorii:
            <span className='text-weight-400'>{selectedCategory.name}</span>
          </>
        )}
      </h3>
      <div className='products-view__controls'>
        <select name='sorting' className='products-view__sorting-select'>
          <option value='popular'>Popularność</option>
          <option value='brand_asc'>Marka A-Z</option>
          <option value='brand_desc'>Marka Z-A</option>
          <option value='price_asc'>Od najtańszego</option>
          <option value='price_desc'>Od najdroższego</option>
          <option value='rating'>Najlepiej oceniane</option>
          <option value='comments'>Liczba opinii</option>
        </select>
        <button
          onClick={setGridView}
          className={`products-view__view-btn ${
            viewType === 'grid' && 'products-view__view-btn--active'
          }`}
        >
          <FiGrid />
        </button>
        <button
          onClick={setListView}
          className={`products-view__view-btn ${
            viewType === 'list' && 'products-view__view-btn--active'
          }`}
        >
          <FiList />
        </button>
      </div>
    </div>
  );
};

export default ProductsViewHeading;
