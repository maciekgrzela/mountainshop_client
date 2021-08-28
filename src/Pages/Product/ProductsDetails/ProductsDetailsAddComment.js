import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import StarRatingComponent from 'react-star-rating-component';

const ProductsDetailsAddComment = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <div className='comments-list__add-comment add-comment'>
      <div className='add-comment__heading'>
        <StarRatingComponent
          name='addCommentRating'
          value={selectedRating}
          editing={true}
          onStarClick={(nextValue, prevValue, name) =>
            setSelectedRating(nextValue)
          }
          renderStarIcon={() => (
            <BsStarFill style={{ paddingTop: 5, fontSize: '1.5rem' }} />
          )}
          renderStarIconHalf={() => <BsStarHalf />}
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
