import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesSlice } from '../../Actions/ActionCreators/Categories';
import { Link } from 'react-router-dom';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategoriesSlice);
  }, []);

  return (
    <nav className='header__navbar navbar'>
      <ul className='navbar__categories'>
        {categories.map((item) => (
          <li key={item} className='navbar__category'>
            <Link
              onClick={() => dispatch(skipWelcome())}
              to={`/products?category=${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
