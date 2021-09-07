import React from 'react';
import { FiGrid, FiList } from 'react-icons/fi';

const ProductsViewControls = ({
  handleSortingOptions,
  setGridView,
  setListView,
  viewType,
  small = false,
}) => {
  return (
    <div
      className={`products-view__controls ${
        small && 'products-view__controls--small'
      }`}
    >
      <select
        onChange={handleSortingOptions}
        name='sorting'
        className='products-view__sorting-select'
      >
        <option value=''>Wybierz opcję</option>
        <option value='grossPriceAsc'>Od najtańszego</option>
        <option value='grossPriceDesc'>Od najdroższego</option>
        <option value='bestRatingDesc'>Najlepiej oceniane</option>
        <option value='commentsCountDesc'>Liczba opinii</option>
      </select>
      <button
        onClick={setGridView}
        className={`products-view__view-btn ${
          viewType === 'grid' && 'products-view__view-btn--active'
        }`}
      >
        <FiGrid />
        {small && <span>Widok siatki</span>}
      </button>
      <button
        onClick={setListView}
        className={`products-view__view-btn ${
          viewType === 'list' && 'products-view__view-btn--active'
        }`}
      >
        <FiList />
        {small && <span>Widok listy</span>}
      </button>
    </div>
  );
};

export default ProductsViewControls;
