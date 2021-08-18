import httpClient from '../../API/httpClient';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  MODIFY_PRODUCT,
  FETCH_PRODUCTS,
  SET_PRODUCTS_FILTER_PROP,
} from '../ActionTypes/Products';

const fetchProducts = (data, displayed) => ({
  type: FETCH_PRODUCTS,
  payload: {
    products: data,
    displayedProductsOnly: displayed,
  },
});

export const fetchProductsSlice =
  (displayedProductsOnly) => async (dispatch, getState) => {
    try {
      const products = await httpClient.products.list();
      if (products.status === 200) {
        return dispatch(fetchProducts(products.data, displayedProductsOnly));
      }
    } catch (e) {
      console.log(e);
    }
  };

export const setProductsFilterProperty = (name, value) => ({
  type: SET_PRODUCTS_FILTER_PROP,
  payload: {
    propertyName: name,
    propertyValue: value,
  },
});

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
