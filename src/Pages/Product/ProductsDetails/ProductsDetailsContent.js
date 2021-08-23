import React from 'react';
import ProductsDetailsAddToCart from './ProductsDetailsAddToCart';
import ProductsDetailsImages from './ProductsDetailsImages';
import ProductsDetailsDescription from './ProductsDetailsDescription';

const ProductsDetailsContent = ({ properties, product, otherProducts }) => {
  return (
    <div className='products-details__content product-content'>
      <ProductsDetailsImages products={otherProducts} mainId={product.id} />
      <ProductsDetailsAddToCart product={product} />
      <ProductsDetailsDescription properties={properties} product={product} />
    </div>
  );
};

export default ProductsDetailsContent;
