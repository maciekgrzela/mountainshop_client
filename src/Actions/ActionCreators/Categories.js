import httpClient from '../../API/httpClient';
import {
  FETCH_CATEGORIES,
  SET_SELECTED_CATEGORY,
} from '../ActionTypes/Categories';

const fetchCategories = (data) => ({
  type: FETCH_CATEGORIES,
  payload: {
    categories: data,
  },
});

export const fetchCategoriesSlice = async (dispatch, getState) => {
  try {
    const categories = await httpClient.categories.list();
    if (categories.status === 200) {
      return dispatch(fetchCategories(categories.data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: {
    category: category,
  },
});
