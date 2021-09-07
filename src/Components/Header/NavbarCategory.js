import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';
import { setSelectedCategory } from '../../Actions/ActionCreators/Categories';
import { setProductsFilterProperty } from '../../Actions/ActionCreators/Products';

const NavbarCategory = ({ setToggled, skipped, item, small = null }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const handleSetSelectedCategory = () => {
    dispatch(setSelectedCategory(item));
    dispatch(setProductsFilterProperty('categoryId', item.id));
  };

  return (
    <li
      key={`${item.id}_h`}
      className={`navbar__category ${
        small !== null && 'navbar__category--small'
      }`}
    >
      {skipped ? (
        <a
          onClick={() => {
            handleSetSelectedCategory();
            setToggled(false);
          }}
          className={`${
            selectedCategory !== null && selectedCategory.id === item.id
              ? 'text-weight-800'
              : ''
          }`}
          href='#'
        >
          {item.name}
        </a>
      ) : (
        <Link
          onClick={() => {
            dispatch(skipWelcome());
            setToggled(false);
          }}
          to={`/products?category=${item.id}`}
        >
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default NavbarCategory;
