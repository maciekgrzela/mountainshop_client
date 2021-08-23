import { SET_PAYMENT_METHODS } from '../ActionTypes/PaymentMethods';

export const setPaymentMethods = (deliveryId) => ({
  type: SET_PAYMENT_METHODS,
  payload: {
    deliveryId: deliveryId,
  },
});
