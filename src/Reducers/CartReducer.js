import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/ActionTypes/Cart';
import { FETCH_DELIVERY_METHODS } from '../Actions/ActionTypes/DeliveryMethods';
import {
  CHANGE_PAYMENT_METHOD,
  SET_PAYMENT_METHODS,
} from '../Actions/ActionTypes/PaymentMethods';
import { initialCartState } from '../State/state';

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case FETCH_DELIVERY_METHODS:
      return {
        ...state,
        deliveryMethods: action.payload.deliveryMethods,
      };
    case SET_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethods: state.deliveryMethods.filter(
          (p) => p.id === action.payload.deliveryId
        )[0].paymentMethods,
        selectedDeliveryMethod: state.deliveryMethods.filter(
          (p) => p.id === action.payload.deliveryId
        )[0],
        selectedPaymentMethod: state.deliveryMethods.filter(
          (p) => p.id === action.payload.deliveryId
        )[0].paymentMethods[0],
      };
    case CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: state.paymentMethods.filter(
          (p) => p.id === action.payload.id
        )[0],
      };
    case ADD_TO_CART:
      const productAlreadyInCart = state.cart.filter(
        (p) => p.id === action.payload.product.id
      );

      if (productAlreadyInCart.length > 0) {
        productAlreadyInCart[0].orderedAmount +=
          action.payload.product.orderedAmount;

        const remainProducts = state.cart.filter(
          (p) => p.id !== productAlreadyInCart[0].id
        );

        return {
          ...state,
          cart: [...remainProducts, productAlreadyInCart[0]],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload.product,
            },
          ],
        };
      }
    case REMOVE_FROM_CART:
      const itemRemoved = state.cart.filter(
        (p) => p.id === action.payload.product.id
      );
      let removeAll = false;

      if (itemRemoved.length > 0) {
        if (action.payload.removeAll) {
          removeAll = true;
        }

        if (itemRemoved[0].orderedAmount === 1 || removeAll) {
          return {
            ...state,
            cart: state.cart.filter((p) => p.id !== itemRemoved[0].id),
          };
        } else {
          itemRemoved[0].orderedAmount -= 1;
          return {
            ...state,
            cart: [
              ...state.cart.filter((p) => p.id !== itemRemoved[0].id),
              {
                ...itemRemoved[0],
              },
            ],
          };
        }
      } else {
        return state;
      }
    default:
      return state;
  }
};
