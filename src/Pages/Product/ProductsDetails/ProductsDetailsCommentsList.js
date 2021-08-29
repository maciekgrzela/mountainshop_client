import React from 'react';
import ProductsDetailsComment from './ProductsDetailsComment';
import ProductsDetailsAddComment from './ProductsDetailsAddComment';
import { useSelector } from 'react-redux';

const ProductsDetailsCommentsList = ({ comments }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className='product-comments__list comments-list'>
      {comments.map((comment, idx) => (
        <ProductsDetailsComment key={idx} comment={comment} />
      ))}
      {user.isLogged && <ProductsDetailsAddComment user={user.user} />}
    </div>
  );
};

export default ProductsDetailsCommentsList;
