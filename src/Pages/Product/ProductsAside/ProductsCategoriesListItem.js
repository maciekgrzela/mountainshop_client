import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../../../Actions/ActionCreators/Categories';
import { setProductsFilterProperty } from '../../../Actions/ActionCreators/Products';

const ProductsCategoriesListItem = ({ category }) => {
  const dispatch = useDispatch();

  const handleSetSelectedCategory = () => {
    dispatch(setSelectedCategory(category));
    dispatch(setProductsFilterProperty('category', category.id));
  };

  return (
    <li className='categories-list__item' onClick={handleSetSelectedCategory}>
      <span>{category.name}</span>
    </li>
  );
};

export default ProductsCategoriesListItem;
