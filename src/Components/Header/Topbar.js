import React from 'react';
import logo from '../../Assets/images/logo.svg';
import Searchbar from './Searchbar';
import AccountInfo from './AccountInfo';
import CartInfo from './CartInfo';

const Topbar = () => {
  return (
    <div className='header__topbar topbar'>
      <img className='topbar__logo' src={logo} alt='MountainShop' />
      <Searchbar />
      <div className='topbar__aside'>
        <AccountInfo />
        <CartInfo />
      </div>
    </div>
  );
};

export default Topbar;
