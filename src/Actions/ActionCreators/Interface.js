import {
  PRODUCTS_VIEW_TYPE_CHANGED,
  WELCOME_SKIPPED,
} from '../ActionTypes/Interface';

export const skipWelcome = () => {
  return {
    type: WELCOME_SKIPPED,
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
