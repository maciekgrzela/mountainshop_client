import { SET_LAST_USERS_ORDER, SIGN_IN } from '../Actions/ActionTypes/User';
import { initialUserState } from '../State/state';

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
      };
    case SET_LAST_USERS_ORDER:
      return {
        ...state,
        lastOrder: action.payload.order,
      };
    case SET_LAST_USERS_ORDER:
      return {
        ...state,
        lastOrder: {
          ...state.lastOrder,
          status: 'Paid',
        },
      };
    default:
      return state;
  }
};
