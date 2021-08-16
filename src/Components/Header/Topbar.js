import React from 'react';
import logo from '../../Assets/images/logo.svg';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import TopbarOption from './TopbarOption';
import { FiUser, FiShoppingCart, FiPercent, FiTag } from 'react-icons/fi';

const Topbar = ({ skipped }) => {
  return (
    <div className='header__topbar topbar'>
      <Link className='topbar__link' to='/'>
        <img className='topbar__logo' src={logo} alt='MountainShop' />
      </Link>
      <Searchbar />
      <div className='topbar__aside'>
        {skipped === true && (
          <>
            <TopbarOption
              variant='secondary'
              path='/sale'
              label='Promocje'
              Icon={<FiPercent />}
            />
            <TopbarOption path='/new' label='Nowości' Icon={<FiTag />} />
          </>
        )}
        <TopbarOption path='/account' label='Moje konto' Icon={<FiUser />} />
        <TopbarOption path='/cart' label='0.00PLN' Icon={<FiShoppingCart />} />
      </div>
    </div>
  );
};

export default Topbar;
