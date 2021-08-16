import React from 'react';
import ProductsCategoriesListItem from './ProductsCategoriesListItem';

const ProductsCategoriesListItems = () => {
  return (
    <ul className='categories-list__items p-0'>
      {[
        'Wyposażenie turystyczne',
        'Wspinaczka',
        'Sprzęt zimowy',
        'Sprzęt do pracy na wysokościach',
        'Obuwie i odzież do biegania',
        'Wyposażenie skitourowe',
        'Narciarstwo',
        'Kemping',
        'Fitness',
      ].map((category, idx) => (
        <ProductsCategoriesListItem key={idx} name={category} />
      ))}
    </ul>
  );
};

export default ProductsCategoriesListItems;
