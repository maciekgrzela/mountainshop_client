import React, { useEffect } from 'react';
import ProductsDetailsCommentsList from './ProductsDetailsCommentsList';
import ProductsDetailsCommentsSummary from './ProductsDetailsCommentsSummary';

const ProductsDetailsComments = ({ comments }) => {
  return (
    <div className='products-details__comments product-comments'>
      <ProductsDetailsCommentsSummary comments={comments} />
      <ProductsDetailsCommentsList comments={comments} />
    </div>
  );
};

export default ProductsDetailsComments;
