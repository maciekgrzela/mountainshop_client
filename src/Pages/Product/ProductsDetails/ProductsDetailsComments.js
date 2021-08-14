import React from 'react';
import ProductsDetailsCommentsList from './ProductsDetailsCommentsList';
import ProductsDetailsCommentsSummary from './ProductsDetailsCommentsSummary';

const comments = [
  {
    title: 'Tytuł',
    author: {
      firstName: 'Imie',
      lastName: 'Nazwisko',
    },
    content: 'Treść komentarza',
  },
  {
    title: 'Tytuł',
    author: {
      firstName: 'Imie',
      lastName: 'Nazwisko',
    },
    content: 'Treść komentarza',
  },
  {
    title: 'Tytuł',
    author: {
      firstName: 'Imie',
      lastName: 'Nazwisko',
    },
    content: 'Treść komentarza',
  },
  {
    title: 'Tytuł',
    author: {
      firstName: 'Imie',
      lastName: 'Nazwisko',
    },
    content: 'Treść komentarza',
  },
];

const ProductsDetailsComments = () => {
  return (
    <div className='products-details__comments product-comments'>
      <ProductsDetailsCommentsSummary />
      <ProductsDetailsCommentsList comments={comments} />
    </div>
  );
};

export default ProductsDetailsComments;
