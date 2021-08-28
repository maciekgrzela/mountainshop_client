import {
  PRODUCTS_VIEW_TYPE_CHANGED,
  WELCOME_SKIPPED,
  SET_SINGLE_PRODUCT_SCROLLING,
  REDIRECT_TO_ODER_AFTER_LOGIN,
} from '../ActionTypes/Interface';

export const skipWelcome = () => {
  return {
    type: WELCOME_SKIPPED,
  };
};

export const redirectToOrderAfterLogin = () => {
  return {
    type: REDIRECT_TO_ODER_AFTER_LOGIN,
  };
};

export const changeProductsViewType = (type) => {
  return {
    type: PRODUCTS_VIEW_TYPE_CHANGED,
    payload: {
      type: type,
    },
  };
};

export const setSingleProductScrolling = (value) => ({
  type: SET_SINGLE_PRODUCT_SCROLLING,
  payload: {
    value: value,
  },
});
