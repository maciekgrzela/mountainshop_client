import React from 'react';

const ProductsDetailsComment = ({ comment }) => {
  return (
    <div className='product-comment'>
      <div className='product-comment__comment'>
        <h5>{comment.title}</h5>
        <h6>
          {comment.author.firstName} {comment.author.lastName}
        </h6>
        <div className='product-comment__comment-stars'>
          {/* <ReactStars
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
          /> */}
        </div>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default ProductsDetailsComment;
