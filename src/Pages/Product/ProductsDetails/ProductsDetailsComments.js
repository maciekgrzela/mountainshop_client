import React from 'react';
import ProductsDetailsCommentsList from './ProductsDetailsCommentsList';
import ProductsDetailsCommentsSummary from './ProductsDetailsCommentsSummary';

const ProductsDetailsComments = () => {
  return (
    <div className='products-details__comments product-comments'>
      <ProductsDetailsCommentsSummary />
      <ProductsDetailsCommentsList />
    </div>
  );
};

export default ProductsDetailsComments;
