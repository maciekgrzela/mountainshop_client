import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='cart-page__empty cart-empty'>
      <FiShoppingCart className='cart-empty__icon' />
      <h2>Trochę tu pusto :(</h2>
      <p>
        W twoim koszyku nie ma żadnego produktu. Przejdź do{' '}
        <Link to='/products'>
          <span className='text-weight-800'>listy asortymentu</span>
        </Link>{' '}
        i wybierz to, czego potrzebujesz.
      </p>
    </div>
  );
};

export default CartEmpty;
