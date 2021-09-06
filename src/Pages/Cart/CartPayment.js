import React from 'react';
import CartPaymentItem from './CartPaymentItem';

const CartPayment = ({ selectedPayment, payment }) => {
  return (
    <div className='payment-and-delivery__payment payment-methods'>
      <h3>Wybierz metodę płatności:</h3>
      <div className='payment-methods__list'>
        {selectedPayment !== null &&
          payment.map((paymentMethod) => (
            <CartPaymentItem
              paymentMethod={paymentMethod}
              selectedPayment={selectedPayment}
            />
          ))}
      </div>
    </div>
  );
};

export default CartPayment;
