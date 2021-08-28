import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../../../Actions/ActionCreators/Categories';
import { setProductsFilterProperty } from '../../../Actions/ActionCreators/Products';

const ProductsCategoriesListItem = ({ category, clearSelectedCategory }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

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
        className={`categories-list__item ${
          selectedCategory === null ? 'categories-list__item--selected' : ''
        }`}
        onClick={handleClearSelectedCategory}
      >
        <span>Wszystkie kategorie</span>
      </li>
    );
  } else {
    return (
      <li
        className={`categories-list__item ${
          selectedCategory !== null && selectedCategory.id === category.id
            ? 'categories-list__item--selected'
            : ''
        }`}
        onClick={handleSetSelectedCategory}
      >
        <span
          className={`${
            selectedCategory !== null && selectedCategory.id === category.id
              ? 'text-weight-800'
              : ''
          }`}
        >
          {category.name}
        </span>
      </li>
    );
  }
};

export default ProductsCategoriesListItem;
