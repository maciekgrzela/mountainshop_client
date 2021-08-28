import React from 'react';
import ProductsAside from './ProductsAside/ProductsAside';
import ProductsView from './ProductsView/ProductsView';

const Products = () => {
  return (
    <div className='products-page'>
      <ProductsAside />
      <ProductsView />
    </div>
  );
};

export default Products;
