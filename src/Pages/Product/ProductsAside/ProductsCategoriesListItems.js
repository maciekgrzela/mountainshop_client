import React from 'react';
import ProductsCategoriesListItem from './ProductsCategoriesListItem';

const ProductsCategoriesListItems = ({ categories }) => {
  return (
    <ul className='categories-list__items p-0'>
      {categories.map((category) => (
        <ProductsCategoriesListItem category={category} />
      ))}
    </ul>
  );
};

export default ProductsCategoriesListItems;
