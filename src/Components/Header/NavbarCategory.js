import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';

const NavbarCategory = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li key={`${item.id}_h`} className='navbar__category'>
      <Link
        onClick={() => dispatch(skipWelcome())}
        to={`/products?category=${item.id}`}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default NavbarCategory;
