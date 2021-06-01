import React from 'react';
import { useSelector } from 'react-redux';

import ProductsViewHeading from './ProductsViewHeading';
import ProductsViewProducts from './ProductsViewProducts';

const ProductsView = () => {
  const productsViewType = useSelector(
    (state) => state.interface.productsViewType
  );

  return (
    <main className='products-view'>
      <ProductsViewHeading viewType={productsViewType} />
      <ProductsViewProducts viewType={productsViewType} />
    </main>
  );
};

export default ProductsView;
