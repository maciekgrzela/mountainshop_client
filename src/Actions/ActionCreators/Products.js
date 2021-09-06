import httpClient from '../../API/httpClient';
import {
  SET_PRODUCTS,
  SET_PRODUCTS_FILTER_PROP,
  SET_PRODUCTS_FILTER_PROPS,
  SET_DISPLAYED_PRODUCT,
  SET_DISPLAYED_COMMENTS,
  SET_DISPLAYED_PROPERTIES,
  LIKE_DISPLAYED_COMMENT,
  DISLIKE_DISPLAYED_COMMENT,
  REMOVE_LIKE,
  REMOVE_DISLIKE,
  SET_SEARCH_PRODUCTS_FILTER,
  SET_SEARCH_PRODUCTS,
  CLEAR_SEARCH_PRODUCTS,
} from '../ActionTypes/Products';
import qs from 'query-string';
import { setCollectionLoading } from './Interface';
import { SET_SEARCH_PRODUCTS_ERROR } from '../ActionTypes/Interface';

const setProducts = (data, displayed, pagination) => ({
  type: SET_PRODUCTS,
  payload: {
    products: data,
    displayedProductsOnly: displayed,
    pagination: pagination,
  },
});

const setDisplayedProduct = (data) => ({
  type: SET_DISPLAYED_PRODUCT,
  payload: {
    product: data,
  },
});

export const fetchProducts =
  (displayedProductsOnly) => async (dispatch, getState) => {
    try {
      dispatch(setCollectionLoading(true));
      const currentState = getState();
      const filter = currentState.products.filterForDisplayedProducts;
      let queryString = qs.stringify(filter, {
        skipNull: true,
        encode: false,
      });
      const products = await httpClient.products.list(queryString);
      if (products.status === 200) {
        dispatch(
          setProducts(
            products.data,
            displayedProductsOnly,
            JSON.parse(products.headers.pagination)
          )
        );
      }
      dispatch(setCollectionLoading(false));
    } catch (e) {
      dispatch(setCollectionLoading(false));
    }
  };

export const fetchDisplayedProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const product = await httpClient.products.listOne(id);
    if (product.status === 200) {
      dispatch(setDisplayedProduct(product.data));
      dispatch(setCollectionLoading(false));
    }
  } catch (e) {
    dispatch(setCollectionLoading(false));
  }
};

export const likeDisplayedComment = (id) => async (dispatch, getState) => {
  await httpClient.comments.like(id);
  dispatch(likeDisplayedCommentAction(id));
};

const likeDisplayedCommentAction = (id) => ({
  type: LIKE_DISPLAYED_COMMENT,
  payload: {
    id: id,
  },
});

export const dislikeDisplayedComment = (id) => async (dispatch, getState) => {
  await httpClient.comments.dislike(id);
  dispatch(dislikeDisplayedCommentAction(id));
};

const dislikeDisplayedCommentAction = (id) => ({
  type: DISLIKE_DISPLAYED_COMMENT,
  payload: {
    id: id,
  },
});

export const removeLike = (id) => async (dispatch, getState) => {
  await httpClient.comments.removeLike(id);
  dispatch(removeLikeAction(id));
};

const removeLikeAction = (id) => ({
  type: REMOVE_LIKE,
  payload: {
    id: id,
  },
});

export const removeDislike = (id) => async (dispatch, getState) => {
  await httpClient.comments.removeDislike(id);
  dispatch(removeDislikeAction(id));
};

const removeDislikeAction = (id) => ({
  type: REMOVE_DISLIKE,
  payload: {
    id: id,
  },
});

export const addProductsComment = (body) => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    await httpClient.comments.add(body);
    dispatch(
      fetchCommentsForDisplayedProduct(
        currentState.products.displayedProduct.id
      )
    );
    dispatch(setCollectionLoading(false));
  } catch (e) {
    dispatch(setCollectionLoading(false));
  }
};

export const removeDisplayedProduct = () => {
  setPropertiesForDisplayedProduct(null);
  setCommentsForDisplayedProduct(null);
  setDisplayedProduct(null);
};

export const setProductsFilterProperties = (properties) => ({
  type: SET_PRODUCTS_FILTER_PROPS,
  payload: {
    properties: { ...properties, pageNumber: 1 },
  },
});

export const setSearchFilter = (value) => ({
  type: SET_SEARCH_PRODUCTS_FILTER,
  payload: {
    value: value,
  },
});

const setSearchProducts = (products) => ({
  type: SET_SEARCH_PRODUCTS,
  payload: {
    products: products,
  },
});

export const clearSearchProducts = () => ({
  type: CLEAR_SEARCH_PRODUCTS,
});

export const fetchSearchProducts = () => async (dispatch, getState) => {
  try {
    setSearchProductsError(false);
    const currentState = getState();
    let filter = {
      nameFilter: currentState.products.filterForSearchedProducts,
      pageSize: 5,
    };
    let queryString = qs.stringify(filter, {
      skipNull: true,
      encode: false,
    });
    const products = await httpClient.products.list(queryString);
    if (products.status === 200) {
      dispatch(setSearchProducts(products.data));
    }
  } catch (e) {
    setSearchProductsError(true);
  }
};

const setSearchProductsError = (value) => ({
  type: SET_SEARCH_PRODUCTS_ERROR,
  payload: {
    value: value,
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

export const fetchCommentsForDisplayedProduct =
  (id) => async (dispatch, getState) => {
    try {
      dispatch(setCollectionLoading(true));
      const comments = await httpClient.products.listComments(id);
      if (comments.status === 200) {
        dispatch(setCommentsForDisplayedProduct(comments.data));
      }
      dispatch(setCollectionLoading(false));
    } catch (e) {
      dispatch(setCollectionLoading(false));
    }
  };

const setCommentsForDisplayedProduct = (data) => ({
  type: SET_DISPLAYED_COMMENTS,
  payload: {
    comments: data,
  },
});

export const fetchPropertiesForDisplayedProduct =
  (id) => async (dispatch, getState) => {
    try {
      dispatch(setCollectionLoading(true));
      const properties = await httpClient.products.listProperties(id);
      if (properties.status === 200) {
        dispatch(setPropertiesForDisplayedProduct(properties.data));
      }
      dispatch(setCollectionLoading(false));
    } catch (e) {
      dispatch(setCollectionLoading(false));
    }
  };

const setPropertiesForDisplayedProduct = (data) => ({
  type: SET_DISPLAYED_PROPERTIES,
  payload: {
    properties: data,
  },
});
