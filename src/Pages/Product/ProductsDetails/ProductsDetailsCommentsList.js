import React from 'react';
import ProductsDetailsComment from './ProductsDetailsComment';
import ProductsDetailsAddComment from './ProductsDetailsAddComment';

const ProductsDetailsCommentsList = ({ comments }) => {
  return (
    <div className='product-comments__list comments-list'>
      {comments.map((comment, idx) => (
        <ProductsDetailsComment key={idx} comment={comment} />
      ))}
      <ProductsDetailsAddComment />
    </div>
  );
};

export default ProductsDetailsCommentsList;
