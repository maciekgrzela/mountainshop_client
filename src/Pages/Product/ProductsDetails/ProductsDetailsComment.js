import React, { useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillLike,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
  likeDisplayedComment,
  dislikeDisplayedComment,
  removeDislike,
  removeLike,
} from '../../../Actions/ActionCreators/Products';
import StarRatingComponent from 'react-star-rating-component';

const ProductsDetailsComment = ({ comment }) => {
  const [likeAdded, setLikeAdded] = useState(false);
  const [dislikeAdded, setDislikeAdded] = useState(false);

  const dispatch = useDispatch();

  const handleLikeComment = () => {
    dispatch(likeDisplayedComment(comment.id));
    setLikeAdded(true);
  };

  const handleDislikeComment = () => {
    dispatch(dislikeDisplayedComment(comment.id));
    setDislikeAdded(true);
  };

  const handleRemoveLike = () => {
    dispatch(removeLike(comment.id));
    setLikeAdded(false);
  };

  const handleRemoveDislike = () => {
    dispatch(removeDislike(comment.id));
    setDislikeAdded(false);
  };

  return (
    <div className='comments-list__comment product-comment'>
      <div className='product-comment__header'>
        <h5 className='product-comment__title'>{comment.title}</h5>
        <div className='product-comment__stars'>
          <StarRatingComponent
            name={comment.id}
            value={comment.rate}
            editing={false}
            renderStarIcon={() => (
              <BsStarFill style={{ paddingTop: 5, fontSize: '1.5rem' }} />
            )}
            renderStarIconHalf={() => <BsStarHalf />}
          />
        </div>
      </div>
      <h6 className='product-comment__author'>
        Autor: {comment.user.firstName} {comment.user.lastName}
      </h6>
      <p className='product-comment__content'>{comment.content}</p>
      <div className='product-comment__popularity'>
        <div className='product-comment__like'>
          {likeAdded ? (
            <AiFillLike onClick={handleRemoveLike} />
          ) : (
            <AiOutlineLike onClick={handleLikeComment} />
          )}
          <span>{comment.likes}</span>
        </div>
        <div className='product-comment__dislike'>
          {dislikeAdded ? (
            <AiFillDislike onClick={handleRemoveDislike} />
          ) : (
            <AiOutlineDislike onClick={handleDislikeComment} />
          )}
          <span>{comment.dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsComment;
