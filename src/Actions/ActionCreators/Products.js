import httpClient from '../../API/httpClient';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  MODIFY_PRODUCT,
  FETCH_PRODUCTS,
  SET_PRODUCTS_FILTER_PROP,
  SET_PRODUCTS_FILTER_PROPS,
} from '../ActionTypes/Products';
import qs from 'query-string';

const fetchProducts = (data, displayed, pagination) => ({
  type: FETCH_PRODUCTS,
  payload: {
    products: data,
    displayedProductsOnly: displayed,
    pagination: pagination,
  },
});

export const fetchProductsSlice =
  (displayedProductsOnly) => async (dispatch, getState) => {
    try {
      const currentState = getState();
      const filter = currentState.products.filterForDisplayedProducts;
      let queryString = qs.stringify(filter, {
        skipNull: true,
        encode: false,
      });
      const products = await httpClient.products.list(queryString);
      if (products.status === 200) {
        return dispatch(
          fetchProducts(
            products.data,
            displayedProductsOnly,
            JSON.parse(products.headers.pagination)
          )
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

export const setProductsFilterProperties = (properties) => ({
  type: SET_PRODUCTS_FILTER_PROPS,
  payload: {
    properties: { ...properties, pageNumber: 1 },
  },
});

export const setProductsFilterProperty = (name, value) => {
  if (name === 'pageNumber') {
    return {
      type: SET_PRODUCTS_FILTER_PROP,
      payload: {
        propertyName: name,
        propertyValue: value,
      },
    };
  } else {
    return {
      type: SET_PRODUCTS_FILTER_PROPS,
      payload: {
        properties: {
          [name]: value,
          pageNumber: 1,
        },
      },
    };
  }
};

export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const modifyProduct = () => {
  return {
    type: MODIFY_PRODUCT,
  };
};

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT,
  };
};
