import httpClient from '../../API/httpClient';
import { SET_LAST_USERS_ORDER_PAID } from '../ActionTypes/Order';

export const sendRequestLastOrderPaid = () => async (dispatch, getState) => {
  try {
    const currentState = getState();
    const orderPaid = await httpClient.orders.setPaid(
      currentState.user.lastOrder.id
    );
    if (orderPaid.status === 204) {
      dispatch(setLastOrderPaid());
    }
  } catch (e) {
    console.log(e);
  }
};

const setLastOrderPaid = () => ({
  type: SET_LAST_USERS_ORDER_PAID,
});
