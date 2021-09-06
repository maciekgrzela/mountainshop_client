import React from 'react';
import { useDispatch } from 'react-redux';
import { changePaymentMethod } from '../../Actions/ActionCreators/PaymentMethods';

const CartPaymentItem = ({ paymentMethod, selectedPayment }) => {
  const dispatch = useDispatch();

  const handleChangePayment = (id) => {
    dispatch(changePaymentMethod(id));
  };

  return (
    <div className='payment-methods__item'>
      <input
        type='radio'
        id={paymentMethod.id}
        checked={paymentMethod.id === selectedPayment.id}
        onChange={(e) => handleChangePayment(paymentMethod.id)}
        name='payment'
        value={paymentMethod.name}
      />
      <label for={paymentMethod.id}>{paymentMethod.name}</label>
      <span className='payment-methods__value'>
        {`${paymentMethod.price.toFixed(2)} PLN`}
      </span>
    </div>
  );
};

export default CartPaymentItem;
