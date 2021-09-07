import React from 'react';
import ProductsViewControls from './ProductsViewControls';

const ProductsViewHeading = ({
  viewType,
  selectedCategory,
  setListView,
  setGridView,
  handleSortingOptions,
}) => {
  return (
    <div className='products-view__headline'>
      <h3 className='products-view__header'>
        {selectedCategory === null ? (
          'Wszystkie produkty'
        ) : (
          <>
            Kategoria:
            <span className='text-weight-400'>{selectedCategory.name}</span>
          </>
        )}
      </h3>
      <ProductsViewControls
        handleSortingOptions={handleSortingOptions}
        setGridView={setGridView}
        setListView={setListView}
        viewType={viewType}
      />
    </div>
  );
};

export default ProductsViewHeading;
