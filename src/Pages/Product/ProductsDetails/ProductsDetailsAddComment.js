import React, { useState } from 'react';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import StarRatingComponent from 'react-star-rating-component';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsComment } from '../../../Actions/ActionCreators/Products';

const ProductsDetailsAddComment = ({ user }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.products.displayedProduct
  );
  const [selectedRating, setSelectedRating] = useState(0);
  const [commentContent, setCommentContent] = useState('');
  const [commentTitle, setCommentTitle] = useState('');

  const handleAddComment = () => {
    let body = {
      content: commentContent,
      title: commentTitle,
      userId: user.id,
      productId: selectedProduct.id,
      rate: selectedRating.toFixed(2),
    };
    dispatch(addProductsComment(body));
    setCommentContent('');
    setCommentTitle('');
    setSelectedRating(0);
  };

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
        <input
          type='text'
          placeholder='Wprowadź tytuł oceny'
          value={commentTitle}
          onChange={(e) => setCommentTitle(e.target.value)}
        />
      </div>
      <div className='add-comment__author'>
        <span>
          <b>Autor: </b>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <textarea
        rows={5}
        placeholder='Wprowadź treść komentarza'
        className='add-comment__content'
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      ></textarea>
      <div className='add-comment__send'>
        <button
          className='add-comment__send-btn'
          disabled={commentContent.length === 0 || commentTitle.length === 0}
          onClick={handleAddComment}
        >
          Wyślij komentarz
        </button>
      </div>
    </div>
  );
};

export default ProductsDetailsAddComment;
