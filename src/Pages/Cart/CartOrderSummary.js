import React from 'react';

const CartOrderSummary = ({ netSum, taxSum }) => {
  return (
    <div className='cart-page__order-summary cart-order-summary'>
      <div className='cart-order-summary__net-price'>
        <h4>Suma netto:</h4>
        <h3>{`${netSum.toFixed(2)} PLN`}</h3>
      </div>
      <div className='cart-order-summary__tax'>
        <h4>Suma podatku:</h4>
        <h3>{`${taxSum.toFixed(2)} PLN`}</h3>
      </div>
      <div className='cart-order-summary__gross-price'>
        <h4>Suma brutto:</h4>
        <h3>{`${(netSum + taxSum).toFixed(2)} PLN`}</h3>
      </div>
    </div>
  );
};

export default CartOrderSummary;
