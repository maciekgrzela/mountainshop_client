import React, { useEffect, useState } from 'react';
import logo from '../../Assets/images/logo.svg';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import TopbarOption from './TopbarOption';
import { FiUser, FiShoppingCart, FiPercent, FiTag } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Topbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const [cartSummary, setCartSummary] = useState(0);
  const [itemsSummary, setItemsSummary] = useState(0);

  useEffect(() => {
    let cartSum = 0;
    let itemsSum = 0;
    cart.cart.forEach((item) => {
      itemsSum += item.orderedAmount;
      if (item.percentageSale !== null) {
        cartSum +=
          item.orderedAmount *
          (item.grossPrice - item.grossPrice * (item.percentageSale / 100));
      } else {
        cartSum += item.orderedAmount * item.grossPrice;
      }
    });

    setCartSummary(cartSum);
    setItemsSummary(itemsSum);
  }, [cart.cart]);

  return (
    <div className='header__topbar topbar'>
      <Link className='topbar__link' to='/'>
        <img className='topbar__logo' src={logo} alt='MountainShop' />
      </Link>
      <Searchbar />
      <div className='topbar__aside'>
        <TopbarOption
          path='/account'
          label={user.isLogged ? `Witaj ${user.user.firstName}` : `Moje konto`}
          Icon={<FiUser />}
        />
        <TopbarOption
          path='/cart'
          label={`${cartSummary.toFixed(2)} PLN`}
          Icon={<FiShoppingCart />}
          notification={itemsSummary > 0 ? `${itemsSummary}` : undefined}
        />
      </div>
    </div>
  );
};

export default Topbar;
