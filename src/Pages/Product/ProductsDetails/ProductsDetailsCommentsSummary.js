import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import ProgressBar from '../../../Components/Common/ProgressBar';

const ProductsDetailsCommentsSummary = () => {
  return (
    <div className='product-comments__summary comments-summary'>
      <h2 className='comments-summary__rating'>3.00 / 5.00</h2>
      <span className='comments-summary__count'>125 opinii</span>
      <button className='comments-summary__comment-btn'>Dodaj komentarz</button>
      <button className='comments-summary__comment-btn--outline'>
        Przeglądaj wszystkie opinie
      </button>
      <ul className='comments-summary__stars-list'>
        {[5, 4, 3, 2, 1].map((idx) => (
          <li className='comments-summary__stars-item'>
            {/* <BsStarFill /> ReactStars - react-rating-stars-component  */}
            <ProgressBar />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsDetailsCommentsSummary;
