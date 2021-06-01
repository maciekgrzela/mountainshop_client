import React from 'react';

const ProductsCategoriesListItem = ({ name }) => {
  return (
    <li className='categories-list__item'>
      <span>{name}</span>
    </li>
  );
};

export default ProductsCategoriesListItem;
