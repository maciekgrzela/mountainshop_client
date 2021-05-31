import {
  PRODUCTS_VIEW_TYPE_CHANGED,
  WELCOME_SKIPPED,
} from '../Actions/ActionTypes/Interface';
import { initialInterfaceState } from '../State/state';

export const interfaceReducer = (state = initialInterfaceState, action) => {
  switch (action.type) {
    case WELCOME_SKIPPED:
      return {
        ...state,
        welcomeSkipped: !state.welcomeSkipped,
      };
    case PRODUCTS_VIEW_TYPE_CHANGED:
      return {
        ...state,
        productsViewType: action.payload.type,
      };
    default:
      return state;
  }
};
