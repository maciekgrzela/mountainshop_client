import { ADD_TO_CART } from '../Actions/ActionTypes/Cart';
import { FETCH_DELIVERY_METHODS } from '../Actions/ActionTypes/DeliveryMethods';
import { SET_PAYMENT_METHODS } from '../Actions/ActionTypes/PaymentMethods';
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
    case ADD_TO_CART:
      const existingProduct = state.cart.filter(
        (p) => p.id === action.payload.product.id
      );
      if (existingProduct.length > 0) {
        existingProduct[0].orderedAmount = action.payload.orderedAmount;
        const productsWithoutExisting = state.cart.filter(
          (p) => p.id !== existingProduct.id
        );

        console.log([...productsWithoutExisting, existingProduct[0]]);

        return {
          ...state,
          cart: [...productsWithoutExisting, existingProduct[0]],
        };
      } else {
        console.log([
          ...state.cart,
          {
            ...action.payload.product,
            orderedAmount: action.payload.orderedAmount,
          },
        ]);

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload.product,
              ...action.payload.orderedAmount,
            },
          ],
        };
      }
    default:
      return state;
  }
};
