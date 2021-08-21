import React from 'react';
import ProductsDetailsAddToCart from './ProductsDetailsAddToCart';
import ProductsDetailsImages from './ProductsDetailsImages';
import ProductsDetailsDescription from './ProductsDetailsDescription';

const ProductsDetailsContent = ({ properties, product }) => {
  return (
    <div className='products-details__content product-content'>
      <ProductsDetailsImages image={product.image} />
      <ProductsDetailsAddToCart product={product} />
      <ProductsDetailsDescription properties={properties} product={product} />
    </div>
  );
};

export default ProductsDetailsContent;
