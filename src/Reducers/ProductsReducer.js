import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_PRODUCTS_FILTER_PROP,
  SET_PRODUCTS_FILTER_PROPS,
} from '../Actions/ActionTypes/Products';

import { initialProductsState } from '../State/state';

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      if (action.payload.displayedProductsOnly) {
        if (state.appendProductsToList === true) {
          return {
            ...state,
            displayedProducts: [
              ...state.displayedProducts,
              ...action.payload.products,
            ],
            appendProductsToList: false,
          };
        } else {
          return {
            ...state,
            displayedProducts: action.payload.products,
          };
        }
      }

      return {
        ...state,
        products: action.payload.products,
        displayedProducts: action.payload.products,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
      };
    case SET_PRODUCTS_FILTER_PROP:
      if (action.payload.propertyName === 'pageNumber') {
        return {
          ...state,
          filterForDisplayedProducts: {
            ...state.filterForDisplayedProducts,
            [action.payload.propertyName]: action.payload.propertyValue,
          },
          appendProductsToList: true,
        };
      }
      return {
        ...state,
        filterForDisplayedProducts: {
          ...state.filterForDisplayedProducts,
          [action.payload.propertyName]: action.payload.propertyValue,
        },
      };
    case SET_PRODUCTS_FILTER_PROPS:
      return {
        ...state,
        filterForDisplayedProducts: {
          ...state.filterForDisplayedProducts,
          ...action.payload.properties,
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
