import React from 'react';
import ProductsCategoriesListItem from './ProductsCategoriesListItem';

const ProductsCategoriesListItems = ({ categories }) => {
  return (
    <ul className='categories-list__items p-0'>
      <ProductsCategoriesListItem key={0} clearSelectedCategory={true} />
      {categories.map((category) => (
        <ProductsCategoriesListItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default ProductsCategoriesListItems;
