import React from 'react';

const CartOrderSummary = ({ grossSum, deliveryAndPaymentSum }) => {
  return (
    <div className='cart-page__order-summary cart-order-summary'>
      <div className='cart-order-summary__net-price'>
        <h4>Suma brutto:</h4>
        <h3>{`${grossSum.toFixed(2)} PLN`}</h3>
      </div>
      <div className='cart-order-summary__tax'>
        <h4>Koszt dostawy:</h4>
        <h3>{`${deliveryAndPaymentSum.toFixed(2)} PLN`}</h3>
      </div>
      <div className='cart-order-summary__gross-price'>
        <h4>Całkowicie:</h4>
        <h3>{`${(grossSum + deliveryAndPaymentSum).toFixed(2)} PLN`}</h3>
      </div>
    </div>
  );
};

export default CartOrderSummary;
