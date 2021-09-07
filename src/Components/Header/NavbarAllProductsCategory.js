import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../Actions/ActionCreators/Categories';
import { setProductsFilterProperty } from '../../Actions/ActionCreators/Products';

const NavbarAllProductsCategory = ({ setToggled }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const handleClearSelectedCategory = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setProductsFilterProperty('categoryId', null));
  };

  return (
    <li
      key='all-categories'
      className='navbar__category navbar__category--small navbar__category--all'
    >
      <a
        onClick={() => {
          handleClearSelectedCategory();
          setToggled(false);
        }}
        className={`${selectedCategory === null ? 'text-weight-800' : ''}`}
        href='#'
      >
        Wszystkie produkty
      </a>
    </li>
  );
};

export default NavbarAllProductsCategory;
