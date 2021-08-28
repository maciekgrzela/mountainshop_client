import {
  FETCH_CATEGORIES,
  SET_SELECTED_CATEGORY,
} from '../Actions/ActionTypes/Categories';
import { initialCategoriesState } from '../State/state';

export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    default:
      return state;
  }
};
