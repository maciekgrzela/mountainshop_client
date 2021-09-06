import React from 'react';
import CartDeliveryItem from './CartDeliveryItem';

const CartDelivery = ({ selectedDelivery, delivery }) => {
  return (
    <div className='payment-and-delivery__delivery delivery-methods'>
      <h3>Wybierz metodę dostawy:</h3>
      <div className='delivery-methods__list'>
        {selectedDelivery !== null &&
          delivery.map((method, idx) => (
            <CartDeliveryItem
              method={method}
              selectedDelivery={selectedDelivery}
            />
          ))}
      </div>
    </div>
  );
};

export default CartDelivery;
