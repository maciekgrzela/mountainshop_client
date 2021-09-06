import httpClient from '../../API/httpClient';
import {
  SIGN_IN,
  SIGN_OUT,
  SET_LAST_USERS_ORDER,
  USER_UPDATE,
  SET_USERS_ORDERS,
} from '../ActionTypes/User';
import { setCollectionLoading } from './Interface';

export const userSignOut = () => (dispatch, getState) => {
  dispatch(signOut());
  window.localStorage.removeItem('jwt');
};

const signOut = () => ({
  type: SIGN_OUT,
});

export const signInCurrentUser = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const token = window.localStorage.getItem('jwt');
    if (token) {
      const user = await httpClient.auth.current();
      if (user.status === 200) {
        let data = user.data;
        data.token = token;
        dispatch(userSignInAction(data));
      }
    }
    dispatch(setCollectionLoading(false));
  } catch (e) {
    console.log(e);
    dispatch(setCollectionLoading(false));
  }
};

export const userSignUp = (body) => async (dispatch, getState) => {
  try {
    const userCreated = await httpClient.auth.register(body);
    if (userCreated.status === 200) {
      window.localStorage.setItem('jwt', userCreated.data.token);
      dispatch(signInCurrentUser());
    }
  } catch (e) {
    console.log(e);
  }
};

export const userSignIn = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const user = await httpClient.auth.login({ email, password });
    if (user.status === 200) {
      dispatch(userSignInAction(user.data));
      window.localStorage.setItem('jwt', user.data.token);
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    dispatch(setCollectionLoading(false));
    console.log(e);
  }
};

export const userFacebookSignIn = (body) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const user = await httpClient.auth.loginFacebook(body);
    if (user.status === 200) {
      dispatch(userSignIn(user.data));
      window.localStorage.setItem('jwt', user.data.token);
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    console.log(e);
    dispatch(setCollectionLoading(false));
  }
};

export const userGoogleSignIn = (body) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const user = await httpClient.auth.loginGoogle(body);
    if (user.status === 200) {
      dispatch(userSignInAction(user.data));
      window.localStorage.setItem('jwt', user.data.token);
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    console.log(e);
    dispatch(setCollectionLoading(false));
  }
};

export const userUpdateData = (body) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const userUpdated = await httpClient.auth.updateData(body);
    if (userUpdated.status === 204) {
      dispatch(userUpdate(body));
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    dispatch(setCollectionLoading(false));
    console.log(e);
  }
};

const userUpdate = (data) => ({
  type: USER_UPDATE,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
  },
});

const userSignInAction = (data) => ({
  type: SIGN_IN,
  payload: {
    user: data,
  },
});

export const fetchUsersOrders = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    const orders = await httpClient.orders.getForUser(
      currentState.user.user.id
    );
    if (orders.status === 200) {
      dispatch(setUsersOrders(orders.data));
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    dispatch(setCollectionLoading(false));
    console.log(e);
  }
};

const setUsersOrders = (data) => ({
  type: SET_USERS_ORDERS,
  payload: {
    orders: data,
  },
});

export const fetchLastUsersOrder = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    const order = await httpClient.orders.getLastForUser(
      currentState.user.user.id
    );
    if (order.status === 200) {
      dispatch(setLastUsersOrder(order.data));
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    console.log(e);
    dispatch(setCollectionLoading(false));
  }
};

const setLastUsersOrder = (data) => ({
  type: SET_LAST_USERS_ORDER,
  payload: {
    order: data,
  },
});
