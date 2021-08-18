import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_PRODUCTS_FILTER_PROP,
} from '../Actions/ActionTypes/Products';

import { initialProductsState } from '../State/state';

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      if (action.payload.displayedProductsOnly) {
        return {
          ...state,
          displayedProducts: action.payload.products,
        };
      }

      return {
        ...state,
        products: action.payload.products,
        displayedProducts: action.payload.products,
      };
    case SET_PRODUCTS_FILTER_PROP:
      return {
        ...state,
        filterForDisplayedProducts: {
          ...state.filterForDisplayedProducts,
          [action.payload.propertyName]: action.payload.propertyValue,
        },
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, { name: 'Nowy kolejny produkt' }],
      };
    case DELETE_PRODUCT:
      return {
        products: state.products.slice(0, -1),
      };
    default:
      return state;
  }
};
