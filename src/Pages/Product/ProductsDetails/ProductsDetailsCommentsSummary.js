import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import ProgressBar from '../../../Components/Common/ProgressBar';

const ProductsDetailsCommentsSummary = ({ comments }) => {
  return (
    <div className='product-comments__summary comments-summary'>
      <div className='comments-summary__sticky'>
        <h2 className='comments-summary__rating'>
          {comments !== undefined &&
            comments.length > 0 &&
            (
              comments.reduce((total, next) => total + next.rate, 0) /
              comments.length
            ).toFixed(2)}
          / 5.00
        </h2>
        <span className='comments-summary__count'>
          Na podstawie {comments.length} opinii
        </span>
        <ul className='comments-summary__stars-list'>
          {[5, 4, 3, 2, 1].map((idx) => (
            <li className='comments-summary__stars-item'>
              <span>
                {idx} <BsStarFill />
              </span>
              <ProgressBar
                value={
                  comments.filter((p) => Math.floor(p.rate) === idx).length * 10
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsDetailsCommentsSummary;
