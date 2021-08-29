import httpClient from '../../API/httpClient';
import { SIGN_IN, SIGN_OUT, SET_LAST_USERS_ORDER } from '../ActionTypes/User';

export const userSignOut = () => (dispatch, getState) => {
  dispatch(signOut());
  window.localStorage.removeItem('jwt');
};

const signOut = () => ({
  type: SIGN_OUT,
});

export const signInCurrentUser = () => async (dispatch, getState) => {
  try {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      const user = await httpClient.auth.current();
      if (user.status === 200) {
        let data = user.data;
        data.token = token;
        dispatch(userSignIn(data));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

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
