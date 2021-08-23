import httpClient from '../../API/httpClient';
import { FETCH_DELIVERY_METHODS } from '../ActionTypes/DeliveryMethods';
import { setPaymentMethods } from './PaymentMethods';

const fetchDeliveryMethods = (data) => ({
  type: FETCH_DELIVERY_METHODS,
  payload: {
    deliveryMethods: data,
  },
});

export const fetchDeliveryMethodsSlice = async (dispatch, getState) => {
  try {
    const deliveryMethods = await httpClient.deliveryMethods.list();

    if (deliveryMethods.status === 200) {
      dispatch(fetchDeliveryMethods(deliveryMethods.data));
      dispatch(setPaymentMethods(deliveryMethods.data[0].id));
    }
  } catch (e) {
    console.log(e);
  }
};
