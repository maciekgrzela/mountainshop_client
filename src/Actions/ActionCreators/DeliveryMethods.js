import httpClient from '../../API/httpClient';
import {
  SET_DELIVERY_METHODS,
  CLEAR_SELECTED_DELIVERY,
} from '../ActionTypes/DeliveryMethods';
import { setCollectionLoading } from './Interface';
import { setPaymentMethods } from './PaymentMethods';

const setDeliveryMethods = (data) => ({
  type: SET_DELIVERY_METHODS,
  payload: {
    deliveryMethods: data,
  },
});

export const fetchDeliveryMethods = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const deliveryMethods = await httpClient.deliveryMethods.list();
    if (deliveryMethods.status === 200) {
      dispatch(setDeliveryMethods(deliveryMethods.data));
      dispatch(setPaymentMethods(deliveryMethods.data[0].id));
    }
    dispatch(setCollectionLoading(false));
  } catch (e) {
    dispatch(setCollectionLoading(false));
  }
};

export const changeDeliveryMethod = (deliveryId) => {
  return setPaymentMethods(deliveryId);
};

export const clearSelectedDelivery = () => ({
  type: CLEAR_SELECTED_DELIVERY,
});
