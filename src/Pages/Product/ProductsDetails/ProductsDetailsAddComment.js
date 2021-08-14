import React from 'react';

const ProductsDetailsAddComment = () => {
  return (
    <div className='comments-list__add-comment add-comment'>
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

      <textarea
        rows={5}
        placeholder='Wprowadź treść komentarza'
        className='add-comment__content'
      ></textarea>
      <button className='add-comment__send-btn'>Wyślij komentarz</button>
    </div>
  );
};

export default ProductsDetailsAddComment;
