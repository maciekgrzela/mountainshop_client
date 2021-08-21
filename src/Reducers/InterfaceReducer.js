import {
  PRODUCTS_VIEW_TYPE_CHANGED,
  SET_SINGLE_PRODUCT_SCROLLING,
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
    case SET_SINGLE_PRODUCT_SCROLLING:
      return {
        ...state,
        singleProductScrolling: action.payload.value,
      };
    default:
      return state;
  }
};
