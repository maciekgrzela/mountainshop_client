import React from 'react';
import CartDelivery from './CartDelivery';
import CartPayment from './CartPayment';

const CartPaymentAndDelivery = () => {
  return (
    <div className='cart-page__payment-and-delivery payment-and-delivery'>
      <CartPayment />
      <CartDelivery />
    </div>
  );
};

export default CartPaymentAndDelivery;
