import httpClient from '../../API/httpClient';
import { SIGN_IN, SET_LAST_USERS_ORDER } from '../ActionTypes/User';
import { history } from '../../App';

export const userSignInSlice =
  (email, password) => async (dispatch, getState) => {
    try {
      const user = await httpClient.auth.login({ email, password });
      if (user.status === 200) {
        dispatch(userSignIn(user.data));
        window.localStorage.setItem('jwt', user.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  };

const userSignIn = (data) => ({
  type: SIGN_IN,
  payload: {
    user: data,
  },
});

export const fetchLastUsersOrder = () => async (dispatch, getState) => {
  try {
    const currentState = getState();
    const order = await httpClient.orders.getLastForUser(
      currentState.user.user.id
    );
    if (order.status === 200) {
      dispatch(setLastUsersOrder(order.data));
      console.log('ORDER DATA', order.data);
    }
  } catch (e) {
    console.log(e);
  }
};

const setLastUsersOrder = (data) => ({
  type: SET_LAST_USERS_ORDER,
  payload: {
    order: data,
  },
});
