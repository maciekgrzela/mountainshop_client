import React from 'react';
import ProductsDetailsCommentsList from './ProductsDetailsCommentsList';
import ProductsDetailsCommentsSummary from './ProductsDetailsCommentsSummary';

const comments = [
  {
    title: 'Bardzo dobry produkt',
    author: {
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
    content:
      'Consectetur consectetur dolor nulla pariatur proident. Sunt mollit aute nulla magna. Consectetur sit magna velit ad duis mollit elit et ut. Deserunt ea dolor laboris labore nisi duis reprehenderit labore sint eiusmod.Excepteur minim veniam tempor culpa nisi et laboris ea qui ipsum aute Lorem ex commodo. Enim officia velit et commodo. Magna culpa incididunt excepteur voluptate ullamco laborum deserunt cillum. Magna sint ullamco non mollit adipisicing cillum. Velit consectetur mollit do occaecat eiusmod cillum ullamco dolore. Anim sint reprehenderit exercitation consequat reprehenderit elit et aliqua consectetur fugiat ad irure. Laborum in duis aliquip sit deserunt labore excepteur tempor.',
  },
  {
    title: 'Bardzo dobry produkt',
    author: {
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
    content:
      'Consectetur consectetur dolor nulla pariatur proident. Sunt mollit aute nulla magna. Consectetur sit magna velit ad duis mollit elit et ut. Deserunt ea dolor laboris labore nisi duis reprehenderit labore sint eiusmod.Excepteur minim veniam tempor culpa nisi et laboris ea qui ipsum aute Lorem ex commodo. Enim officia velit et commodo. Magna culpa incididunt excepteur voluptate ullamco laborum deserunt cillum. Magna sint ullamco non mollit adipisicing cillum. Velit consectetur mollit do occaecat eiusmod cillum ullamco dolore. Anim sint reprehenderit exercitation consequat reprehenderit elit et aliqua consectetur fugiat ad irure. Laborum in duis aliquip sit deserunt labore excepteur tempor.',
  },
  {
    title: 'Bardzo dobry produkt',
    author: {
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
    content:
      'Consectetur consectetur dolor nulla pariatur proident. Sunt mollit aute nulla magna. Consectetur sit magna velit ad duis mollit elit et ut. Deserunt ea dolor laboris labore nisi duis reprehenderit labore sint eiusmod.Excepteur minim veniam tempor culpa nisi et laboris ea qui ipsum aute Lorem ex commodo. Enim officia velit et commodo. Magna culpa incididunt excepteur voluptate ullamco laborum deserunt cillum. Magna sint ullamco non mollit adipisicing cillum. Velit consectetur mollit do occaecat eiusmod cillum ullamco dolore. Anim sint reprehenderit exercitation consequat reprehenderit elit et aliqua consectetur fugiat ad irure. Laborum in duis aliquip sit deserunt labore excepteur tempor.',
  },
  {
    title: 'Bardzo dobry produkt',
    author: {
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
    content:
      'Consectetur consectetur dolor nulla pariatur proident. Sunt mollit aute nulla magna. Consectetur sit magna velit ad duis mollit elit et ut. Deserunt ea dolor laboris labore nisi duis reprehenderit labore sint eiusmod.Excepteur minim veniam tempor culpa nisi et laboris ea qui ipsum aute Lorem ex commodo. Enim officia velit et commodo. Magna culpa incididunt excepteur voluptate ullamco laborum deserunt cillum. Magna sint ullamco non mollit adipisicing cillum. Velit consectetur mollit do occaecat eiusmod cillum ullamco dolore. Anim sint reprehenderit exercitation consequat reprehenderit elit et aliqua consectetur fugiat ad irure. Laborum in duis aliquip sit deserunt labore excepteur tempor.',
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
