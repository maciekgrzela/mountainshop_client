import React from 'react';
import ProductsCategoriesListItem from './ProductsCategoriesListItem';

const ProductsCategoriesListItems = () => {
  return (
    <ul className='categories-list__items p-0'>
      {[
        'Promocje',
        'Nowości',
        'Dla niego',
        'Dla niej',
        'Dla dziecka',
        'Wyposażenie turystyczne',
        'Narty',
        'Kemping',
        'Fitness',
        'Wyprzedaż',
      ].map((category, idx) => (
        <ProductsCategoriesListItem key={idx} name={category} />
      ))}
    </ul>
  );
};

export default ProductsCategoriesListItems;
