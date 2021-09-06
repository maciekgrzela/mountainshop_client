import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesFilterProperty } from '../../../Actions/ActionCreators/Categories';
import ProductsCategoriesListItem from './ProductsCategoriesListItem';

const ProductsCategoriesListItems = ({
  totalPages,
  currentPage,
  categories,
}) => {
  const dispatch = useDispatch();

  return (
    <ul className='categories-list__items p-0'>
      <ProductsCategoriesListItem key={0} clearSelectedCategory={true} />
      {categories.map((category) => (
        <ProductsCategoriesListItem key={category.id} category={category} />
      ))}
      {currentPage < totalPages && (
        <span
          onClick={() =>
            dispatch(setCategoriesFilterProperty('pageNumber', currentPage + 1))
          }
        >
          Pobierz więcej...
        </span>
      )}
    </ul>
  );
};

export default ProductsCategoriesListItems;
