import httpClient from '../../API/httpClient';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  MODIFY_PRODUCT,
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
      const currentState = getState();
      const filter = currentState.products.filterForDisplayedProducts;
      let queryString = qs.stringify(filter, {
        skipNull: true,
        encode: false,
      });
      const products = await httpClient.products.list(queryString);
      if (products.status === 200) {
        return dispatch(
          setProducts(
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

export const fetchDisplayedProduct = (id) => async (dispatch, getState) => {
  try {
    const product = await httpClient.products.listOne(id);
    if (product.status === 200) {
      return dispatch(setDisplayedProduct(product.data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const likeDisplayedComment = (id) => async (dispatch, getState) => {
  try {
    const like = await httpClient.comments.like(id);
    if (like.status === 204) {
      return dispatch(likeDisplayedCommentAction(id));
    }
  } catch (e) {
    console.log(e);
  }
};

const likeDisplayedCommentAction = (id) => ({
  type: LIKE_DISPLAYED_COMMENT,
  payload: {
    id: id,
  },
});

export const dislikeDisplayedComment = (id) => async (dispatch, getState) => {
  try {
    const dislike = await httpClient.comments.dislike(id);
    if (dislike.status === 204) {
      return dispatch(dislikeDisplayedCommentAction(id));
    }
  } catch (e) {
    console.log(e);
  }
};

const dislikeDisplayedCommentAction = (id) => ({
  type: DISLIKE_DISPLAYED_COMMENT,
  payload: {
    id: id,
  },
});

export const removeLike = (id) => async (dispatch, getState) => {
  try {
    const likeRemoved = await httpClient.comments.removeLike(id);
    if (likeRemoved.status === 204) {
      return dispatch(removeLikeAction(id));
    }
  } catch (e) {
    console.log(e);
  }
};

const removeLikeAction = (id) => ({
  type: REMOVE_LIKE,
  payload: {
    id: id,
  },
});

export const removeDislike = (id) => async (dispatch, getState) => {
  try {
    const likeRemoved = await httpClient.comments.removeDislike(id);
    if (likeRemoved.status === 204) {
      return dispatch(removeDislikeAction(id));
    }
  } catch (e) {
    console.log(e);
  }
};

const removeDislikeAction = (id) => ({
  type: REMOVE_DISLIKE,
  payload: {
    id: id,
  },
});

export const addProductsComment = (body) => async (dispatch, getState) => {
  try {
    const currentState = getState();
    const commentAdded = await httpClient.comments.add(body);
    if (commentAdded.status === 204) {
      return dispatch(
        fetchCommentsForDisplayedProduct(
          currentState.products.displayedProduct.id
        )
      );
    }
  } catch (e) {
    console.log(e);
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
      return dispatch(setSearchProducts(products.data));
    }
  } catch (e) {
    console.log(e);
  }
};

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
      const comments = await httpClient.products.listComments(id);
      if (comments.status === 200) {
        return dispatch(setCommentsForDisplayedProduct(comments.data));
      }
    } catch (e) {
      console.log(e);
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
      const properties = await httpClient.products.listProperties(id);
      if (properties.status === 200) {
        return dispatch(setPropertiesForDisplayedProduct(properties.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

const setPropertiesForDisplayedProduct = (data) => ({
  type: SET_DISPLAYED_PROPERTIES,
  payload: {
    properties: data,
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
