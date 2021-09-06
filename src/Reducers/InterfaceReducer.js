import {
  PRODUCTS_VIEW_TYPE_CHANGED,
  REDIRECT_TO_ODER_AFTER_LOGIN,
  SET_COLLECTION_LOADING,
  SET_FETCH_CATEGORIES_LOADING,
  SET_SEARCH_PRODUCTS_ERROR,
  SET_SINGLE_PRODUCT_SCROLLING,
  WELCOME_SKIPPED,
} from '../Actions/ActionTypes/Interface';
import { initialInterfaceState } from '../State/state';

export const interfaceReducer = (state = initialInterfaceState, action) => {
  switch (action.type) {
    case WELCOME_SKIPPED:
      return {
        ...state,
        welcomeSkipped: true,
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
    case REDIRECT_TO_ODER_AFTER_LOGIN:
      return {
        ...state,
        redirectToOrderAfterLogin: true,
      };
    case SET_FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        fetchCategoriesLoading: !state.fetchCategoriesLoading,
      };
    case SET_COLLECTION_LOADING:
      return {
        ...state,
        collectionLoading: action.payload.value,
      };
    case SET_SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        searchProductsError: action.payload.value,
      };
    default:
      return state;
  }
};
