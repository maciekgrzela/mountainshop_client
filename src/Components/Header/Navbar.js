import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Actions/ActionCreators/Categories';
import NavbarCategory from './NavbarCategory';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <nav className='header__navbar navbar'>
      <ul className='navbar__categories'>
        {categories.map((item) => (
          <NavbarCategory item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
