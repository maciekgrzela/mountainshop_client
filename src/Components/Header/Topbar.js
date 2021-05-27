import React from 'react';
import logo from '../../Assets/images/logo.svg';
import Searchbar from './Searchbar';
import AccountInfo from './AccountInfo';
import CartInfo from './CartInfo';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='header__topbar topbar'>
      <Link className='topbar__link' to='/'>
        <img className='topbar__logo' src={logo} alt='MountainShop' />
      </Link>
      <Searchbar />
      <div className='topbar__aside'>
        <AccountInfo />
        <CartInfo />
      </div>
    </div>
  );
};

export default Topbar;
