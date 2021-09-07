import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Actions/ActionCreators/Categories';
import NavbarCategories from './NavbarCategories';

const Navbar = ({ skipped }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <nav className={`header__navbar navbar ${skipped && 'navbar--skipped'}`}>
      <NavbarCategories skipped={skipped} categories={categories} />
    </nav>
  );
};

export default Navbar;
