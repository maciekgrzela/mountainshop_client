import React, { useEffect, useState } from 'react';
import logo from '../../Assets/images/logo.svg';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import TopbarOption from './TopbarOption';
import { FiUser, FiShoppingCart, FiPercent, FiTag } from 'react-icons/fi';

const Topbar = ({ cart, skipped }) => {
  const [cartSummary, setCartSummary] = useState(0);

  useEffect(() => {
    // console.log('CART');
    // console.log(cart);
    // let cartSum = 0;
    // cart.forEach((item) => {
    //   if (item.percentageSale !== null) {
    //     cartSum +=
    //       item.orderedAmount *
    //       (item.grossPrice - item.grossPrice * (item.percentageSale / 100));
    //   } else {
    //     cartSum += item.orderedAmount * item.grossPrice;
    //   }
    // });

    // setCartSummary(cartSum);
  }, [cart]);

  return (
    <div className='header__topbar topbar'>
      <Link className='topbar__link' to='/'>
        <img className='topbar__logo' src={logo} alt='MountainShop' />
      </Link>
      <Searchbar />
      <div className='topbar__aside'>
        <TopbarOption path='/account' label='Moje konto' Icon={<FiUser />} />
        <TopbarOption
          path='/cart'
          label={`${cartSummary.toFixed(2)} PLN`}
          Icon={<FiShoppingCart />}
        />
      </div>
    </div>
  );
};

export default Topbar;
