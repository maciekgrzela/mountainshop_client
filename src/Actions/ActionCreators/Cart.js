import { ADD_TO_CART } from '../ActionTypes/Cart';

export const addToCart = (product, amount) => ({
  type: ADD_TO_CART,
  payload: {
    product: product,
    orderedAmount: amount,
  },
});
