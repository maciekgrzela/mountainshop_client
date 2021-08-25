import httpClient from '../../API/httpClient';
import { history } from '../../App';
import { SIGN_IN } from '../ActionTypes/User';

export const userSignInSlice =
  (email, password) => async (dispatch, getState) => {
    try {
      const user = await httpClient.auth.login({ email, password });
      if (user.status === 200) {
        dispatch(userSignIn(user.data));
        history.push('/account');
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
