import React from 'react';

const someDeliveryMethods = [
  {
    id: 'carrier24',
    name: 'Przesyłka kurierska 24h',
    value: 19.5,
  },
  {
    id: 'carrier48',
    name: 'Przesyłka kurierska 48h',
    value: 13.9,
  },
  {
    id: 'parcel-locker',
    name: 'Paczkomaty InPost',
    value: 9.9,
  },
  {
    id: 'collect-locally',
    name: 'Odbiór w sklepie stacjonarnym',
    value: 0,
  },
];

const CartDelivery = () => {
  return (
    <div className='payment-and-delivery__delivery delivery-methods'>
      <h3>Wybierz metodę dostawy:</h3>
      <div className='delivery-methods__list'>
        {someDeliveryMethods.map((deliveryMethod) => (
          <div className='delivery-methods__item'>
            <input
              type='radio'
              id={deliveryMethod.id}
              name='delivery'
              value={deliveryMethod.name}
            />
            <label for={deliveryMethod.id}>{deliveryMethod.name}</label>
            <span className='delivery-methods__value'>
              {`${deliveryMethod.value.toFixed(2)} PLN`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDelivery;
