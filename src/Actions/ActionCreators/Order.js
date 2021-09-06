import httpClient from '../../API/httpClient';
import { SET_LAST_USERS_ORDER_PAID } from '../ActionTypes/Order';
import { setCollectionLoading } from './Interface';

export const sendRequestLastOrderPaid = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    const orderPaid = await httpClient.orders.setPaid(
      currentState.user.lastOrder.id
    );
    if (orderPaid.status === 204) {
      dispatch(setLastOrderPaid());
    }

    dispatch(setCollectionLoading(false));
  } catch (e) {
    dispatch(setCollectionLoading(false));
  }
};

const setLastOrderPaid = () => ({
  type: SET_LAST_USERS_ORDER_PAID,
});
