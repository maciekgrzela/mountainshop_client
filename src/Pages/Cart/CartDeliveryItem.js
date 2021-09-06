import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDeliveryMethod } from '../../Actions/ActionCreators/DeliveryMethods';

const CartDeliveryItem = ({ method, selectedDelivery }) => {
  const dispatch = useDispatch();

  const handleChangeDelivery = (id) => {
    dispatch(changeDeliveryMethod(id));
  };

  return (
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
  );
};

export default CartDeliveryItem;
