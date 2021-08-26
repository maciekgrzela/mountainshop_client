import {
  CHANGE_PAYMENT_METHOD,
  SET_PAYMENT_METHODS,
  CLEAR_SELECTED_PAYMENT,
} from '../ActionTypes/PaymentMethods';

export const setPaymentMethods = (deliveryId) => ({
  type: SET_PAYMENT_METHODS,
  payload: {
    deliveryId: deliveryId,
  },
});

export const changePaymentMethod = (paymentId) => ({
  type: CHANGE_PAYMENT_METHOD,
  payload: {
    id: paymentId,
  },
});

export const clearSelectedPayment = () => ({
  type: CLEAR_SELECTED_PAYMENT,
});
