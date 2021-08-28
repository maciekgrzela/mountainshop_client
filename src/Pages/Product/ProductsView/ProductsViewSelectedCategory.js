import React from 'react';

const ProductsViewSelectedCategory = ({ category }) => {
  return (
    <div className='products-view__selected-category selected-category'>
      <img
        className='selected-category__img'
        src={category.image}
        alt={category.name}
      />
      <p className='selected-category__desc'>{category.description}</p>
    </div>
  );
};

export default ProductsViewSelectedCategory;
