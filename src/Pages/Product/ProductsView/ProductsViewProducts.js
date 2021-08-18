import React from 'react';
import ProductsViewProduct from './ProductsViewProduct';

const ProductsViewProducts = ({ products, viewType }) => {
  return (
    <div
      className={`products-view__products products-view__products--${viewType}`}
    >
      {products.map((product) => (
        <ProductsViewProduct
          key={product.id}
          product={product}
          viewType={viewType}
        />
      ))}
    </div>
  );
};

export default ProductsViewProducts;
