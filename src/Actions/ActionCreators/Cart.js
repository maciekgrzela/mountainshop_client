import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../ActionTypes/Cart';

export const addToCart = (product, amount) => ({
  type: ADD_TO_CART,
  payload: {
    product: {
      ...product,
      orderedAmount: amount,
    },
  },
});

export const removeFromCart = (product, removeAll = false) => ({
  type: REMOVE_FROM_CART,
  payload: {
    product: product,
    removeAll: removeAll,
  },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
