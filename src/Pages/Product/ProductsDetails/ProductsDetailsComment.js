import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const ProductsDetailsComment = ({ comment }) => {
  return (
    <div className='comments-list__comment product-comment'>
      <div className='product-comment__header'>
        <h5 className='product-comment__title'>{comment.title}</h5>
        <div className='product-comment__stars'>
          <ReactStars
            count={5}
            size={30}
            value={comment.value}
            isHalf={true}
            edit={false}
            activeColor='#283b56'
            color='#283b56'
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            filledIcon={<BsStarFill />}
          />
        </div>
      </div>
      <h6 className='product-comment__author'>
        {comment.author.firstName} {comment.author.lastName}
      </h6>
      <p className='product-comment__content'>{comment.content}</p>
      <div className='product-comment__popularity'>
        <div className='product-comment__like'>
          <AiOutlineLike /> <span>10</span>
        </div>
        <div className='product-comment__dislike'>
          <AiOutlineDislike /> <span>15</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsComment;
