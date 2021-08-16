import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const ProductsDetailsAddComment = () => {
  return (
    <div className='comments-list__add-comment add-comment'>
      <div className='add-comment__heading'>
        <ReactStars
          count={5}
          size={30}
          value={0}
          isHalf={true}
          edit={false}
          activeColor='#283b56'
          color='#283b56'
          emptyIcon={<BsStar />}
          halfIcon={<BsStarHalf />}
          filledIcon={<BsStarFill />}
        />
        <input type='text' placeholder='Wprowadź tytuł oceny' />
      </div>
      <div className='add-comment__author'>
        <span>
          <b>Autor: </b>Jan Kowalski
        </span>
      </div>
      <textarea
        rows={5}
        placeholder='Wprowadź treść komentarza'
        className='add-comment__content'
      ></textarea>
      <div className='add-comment__send'>
        <button className='add-comment__send-btn'>Wyślij komentarz</button>
      </div>
    </div>
  );
};

export default ProductsDetailsAddComment;
