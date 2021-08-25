import { SIGN_IN } from '../Actions/ActionTypes/User';
import { initialUserState } from '../State/state';

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        user: action.payload.user,
        isLogged: true,
      };
    default:
      return state;
  }
};
