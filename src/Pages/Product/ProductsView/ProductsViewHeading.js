import React from 'react';
import { useDispatch } from 'react-redux';
import { changeProductsViewType } from '../../../Actions/ActionCreators/Interface';
import { FiGrid, FiList } from 'react-icons/fi';
import { setProductsFilterProperties } from '../../../Actions/ActionCreators/Products';

const ProductsViewHeading = ({ viewType, selectedCategory }) => {
  const dispatch = useDispatch();

  const setGridView = () => {
    dispatch(changeProductsViewType('grid'));
  };

  const setListView = () => {
    dispatch(changeProductsViewType('list'));
  };

  const preparePropertiesObjectWithActiveProp = (activeProp) => {
    const propObject = {
      grossPriceAsc: null,
      grossPriceDesc: null,
      bestRatingDesc: null,
      commentsCountDesc: null,
    };

    propObject[activeProp] = true;

    return propObject;
  };

  const handleSortingOptions = (e) => {
    dispatch(
      setProductsFilterProperties(
        preparePropertiesObjectWithActiveProp(
          e.target.options[e.target.options.selectedIndex].value
        )
      )
    );
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
