import React from 'react';
import ProductsDetailsAddToCart from './ProductsDetailsAddToCart';
import ProductsDetailsImages from './ProductsDetailsImages';
import ProductsDetailsDescription from './ProductsDetailsDescription';

const ProductsDetailsContent = () => {
  return (
    <div className='products-details__content product-content'>
      <ProductsDetailsImages />
      <ProductsDetailsAddToCart />
      <ProductsDetailsDescription />
    </div>
  );
};

export default ProductsDetailsContent;
