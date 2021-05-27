import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const CartInfo = () => {
  return (
    <div className='topbar__cart-info cart-info'>
      <Link to='/cart' className='cart-info__link'>
        0.00PLN
      </Link>
      <FiShoppingCart className='cart-info__icon' />
    </div>
  );
};

export default CartInfo;
