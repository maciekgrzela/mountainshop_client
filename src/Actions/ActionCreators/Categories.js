import httpClient from '../../API/httpClient';
import {
  SET_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SET_TOTAL_PAGES,
  SET_CATEGORIES_FILTER_PROPERTY,
} from '../ActionTypes/Categories';
import qs from 'query-string';
import { setCollectionLoading } from './Interface';

const setCategories = (data) => ({
  type: SET_CATEGORIES,
  payload: {
    categories: data,
  },
});

export const fetchCategories = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    const filter = currentState.categories.filter;
    let queryString = qs.stringify(filter, {
      skipNull: true,
      encode: false,
    });
    const categories = await httpClient.categories.list(queryString);
    if (categories.status === 200) {
      dispatch(setCategories(categories.data));
      if (currentState.categories.totalPages === null) {
        dispatch(
          setTotalPages(JSON.parse(categories.headers.pagination).totalPages)
        );
      }
      dispatch(setCollectionLoading(false));
    }
  } catch (error) {
    dispatch(setCollectionLoading(false));
  }
};

const setTotalPages = (pages) => ({
  type: SET_TOTAL_PAGES,
  payload: {
    pages: pages,
  },
});

export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: {
    category: category,
  },
});

export const setCategoriesFilterProperty = (propName, propValue) => ({
  type: SET_CATEGORIES_FILTER_PROPERTY,
  payload: {
    name: propName,
    value: propValue,
  },
});
