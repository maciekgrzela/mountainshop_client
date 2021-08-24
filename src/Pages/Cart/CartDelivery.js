import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDeliveryMethod } from '../../Actions/ActionCreators/DeliveryMethods';

const CartDelivery = ({ selectedDelivery, delivery }) => {
  const dispatch = useDispatch();

  const handleChangeDelivery = (id) => {
    dispatch(changeDeliveryMethod(id));
  };

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
                onChange={(e) => handleChangeDelivery(method.id)}
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
