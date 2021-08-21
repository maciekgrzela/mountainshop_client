import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../../../Actions/ActionCreators/Categories';
import { setProductsFilterProperty } from '../../../Actions/ActionCreators/Products';

const ProductsCategoriesListItem = ({ category, clearSelectedCategory }) => {
  const dispatch = useDispatch();

  const handleSetSelectedCategory = () => {
    dispatch(setSelectedCategory(category));
    dispatch(setProductsFilterProperty('categoryId', category.id));
  };

  const handleClearSelectedCategory = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setProductsFilterProperty('categoryId', null));
  };

  if (clearSelectedCategory) {
    return (
      <li
        className='categories-list__item'
        onClick={handleClearSelectedCategory}
      >
        <span>Wszystkie kategorie</span>
      </li>
    );
  } else {
    return (
      <li className='categories-list__item' onClick={handleSetSelectedCategory}>
        <span>{category.name}</span>
      </li>
    );
  }
};

export default ProductsCategoriesListItem;
