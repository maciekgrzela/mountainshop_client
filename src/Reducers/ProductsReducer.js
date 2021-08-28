import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  LIKE_DISPLAYED_COMMENT,
  SET_DISPLAYED_COMMENTS,
  SET_DISPLAYED_PRODUCT,
  SET_DISPLAYED_PROPERTIES,
  SET_PRODUCTS_FILTER_PROP,
  SET_PRODUCTS_FILTER_PROPS,
  DISLIKE_DISPLAYED_COMMENT,
  REMOVE_LIKE,
  REMOVE_DISLIKE,
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
        appendProductsToList: false,
      };
    case SET_PRODUCTS_FILTER_PROPS:
      return {
        ...state,
        filterForDisplayedProducts: {
          ...state.filterForDisplayedProducts,
          ...action.payload.properties,
        },
        appendProductsToList: false,
      };
    case SET_DISPLAYED_PRODUCT:
      return {
        ...state,
        displayedProduct: action.payload.product,
      };
    case SET_DISPLAYED_COMMENTS:
      return {
        ...state,
        displayedComments: action.payload.comments,
      };
    case LIKE_DISPLAYED_COMMENT:
      let comments = state.displayedComments;
      comments.filter((p) => p.id === action.payload.id)[0].likes += 1;
      return {
        ...state,
        displayedComments: comments,
      };
    case DISLIKE_DISPLAYED_COMMENT:
      let dislikeDisplayedComments = state.displayedComments;
      dislikeDisplayedComments.filter(
        (p) => p.id === action.payload.id
      )[0].dislikes += 1;
      return {
        ...state,
        displayedComments: dislikeDisplayedComments,
      };
    case REMOVE_LIKE:
      let removeLikeComments = state.displayedComments;
      removeLikeComments.filter(
        (p) => p.id === action.payload.id
      )[0].likes -= 1;
      return {
        ...state,
        displayedComments: removeLikeComments,
      };
    case REMOVE_DISLIKE:
      let removeDislikeComments = state.displayedComments;
      removeDislikeComments.filter(
        (p) => p.id === action.payload.id
      )[0].dislikes -= 1;
      return {
        ...state,
        displayedComments: removeDislikeComments,
      };
    case SET_DISPLAYED_PROPERTIES:
      return {
        ...state,
        displayedProperties: action.payload.properties,
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
