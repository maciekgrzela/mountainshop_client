import React, { useEffect } from 'react';
import CartDelivery from './CartDelivery';
import CartPayment from './CartPayment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeliveryMethodsSlice } from '../../Actions/ActionCreators/DeliveryMethods';

const CartPaymentAndDelivery = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchDeliveryMethodsSlice);
  }, []);

  return (
    <div className='cart-page__payment-and-delivery payment-and-delivery'>
      <CartDelivery
        delivery={cart.deliveryMethods}
        selectedDelivery={cart.selectedDeliveryMethod}
      />
      <CartPayment
        payment={cart.paymentMethods}
        selectedPayment={cart.selectedPaymentMethod}
      />
    </div>
  );
};

export default CartPaymentAndDelivery;
