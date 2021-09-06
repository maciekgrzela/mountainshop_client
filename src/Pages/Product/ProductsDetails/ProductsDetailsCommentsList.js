import React from 'react';
import ProductsDetailsComment from './ProductsDetailsComment';
import ProductsDetailsAddComment from './ProductsDetailsAddComment';
import { useSelector } from 'react-redux';
import ListEmptyPlaceholder from '../../../Components/Common/ListEmptyPlaceholder';

const ProductsDetailsCommentsList = ({ comments }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className='product-comments__list comments-list'>
      {comments.length === 0 ? (
        <ListEmptyPlaceholder />
      ) : (
        <>
          {comments.map((comment, idx) => (
            <ProductsDetailsComment key={idx} comment={comment} />
          ))}
        </>
      )}
      {user.isLogged && <ProductsDetailsAddComment user={user.user} />}
    </div>
  );
};

export default ProductsDetailsCommentsList;
