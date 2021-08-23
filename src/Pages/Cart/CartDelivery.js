import React from 'react';

const CartDelivery = ({ selectedDelivery, delivery }) => {
  return (
    <div className='payment-and-delivery__delivery delivery-methods'>
      <h3>Wybierz metodę dostawy:</h3>
      <div className='delivery-methods__list'>
        {selectedDelivery !== null &&
          delivery.map((method, idx) => (
            <div className='delivery-methods__item'>
              <input
                type='radio'
                id={method.id}
                checked={method.id === selectedDelivery.id}
                onChange={(e) => e.preventDefault()}
                name='delivery'
                value={method.name}
              />
              <label for={method.id}>{method.name}</label>
              <span className='delivery-methods__value'>
                {`${method.price.toFixed(2)} PLN`}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartDelivery;
