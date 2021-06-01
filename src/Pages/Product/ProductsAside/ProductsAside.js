import React from 'react';
import Filters from '../../Filters/Filters';
import ProductsCategoriesListItems from './ProductsCategoriesListItems';

const ProductsAside = () => {
  return (
    <aside className='products-aside categories-list'>
      <h3 className='categories-list__header'>Wybierz kategorię</h3>
      <ProductsCategoriesListItems />
      <Filters />
    </aside>
  );
};

export default ProductsAside;
