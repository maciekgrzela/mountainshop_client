import React from 'react';
import ProductsViewProduct from './ProductsViewProduct';

const ProductsViewProducts = ({ viewType }) => {
  return (
    <div
      className={`products-view__products products-view__products--${viewType}`}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
        <ProductsViewProduct key={product} viewType={viewType} />
      ))}
    </div>
  );
};

export default ProductsViewProducts;
