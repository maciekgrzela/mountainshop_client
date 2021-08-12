import React from 'react';
import Filters from '../../Filters/Filters';
import ProductsCategoriesListItems from './ProductsCategoriesListItems';

const ProductsAside = () => {
  return (
    <aside className='products-aside categories-list'>
      <h3 className='categories-list__header'>Wybierz kategorię</h3>
      <ProductsCategoriesListItems />
      <h3 className='categories-list__header mt-3'>Filtruj produkty</h3>
      <Filters />
    </aside>
  );
};

export default ProductsAside;
