import React, { useEffect } from 'react';
import CartProductsTable from './CartProductsTable';
import CartPaymentAndDelivery from './CartPaymentAndDelivery';
import CartOrderSummary from './CartOrderSummary';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart-page'>
      <h2 className='cart-page__title'>Zawartość Twojego koszyka</h2>
      <CartProductsTable />
      <div className='cart-page__details'>
        <CartPaymentAndDelivery />
        <CartOrderSummary netSum={800.9} taxSum={126.83} />
      </div>
      <div className='cart-page__actions cart-actions'>
        <Link to='/'>
          <button className='cart-actions__back-to-store'>
            <FiArrowLeft /> Wróć do sklepu
          </button>
        </Link>
        <Link to='/payment'>
          <button className='cart-actions__go-to-payment'>
            Przejdź do płatności
            <FiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
