import {
  SET_CATEGORIES,
  SET_CATEGORIES_FILTER_PROPERTY,
  SET_SELECTED_CATEGORY,
  SET_TOTAL_PAGES,
} from '../Actions/ActionTypes/Categories';
import { initialCategoriesState } from '../State/state';

export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      if (state.filter.pageNumber > 1) {
        return {
          ...state,
          categories: [...state.categories, ...action.payload.categories],
        };
      } else {
        return {
          ...state,
          categories: action.payload.categories,
        };
      }

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload.pages,
      };
    case SET_CATEGORIES_FILTER_PROPERTY: {
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    default:
      return state;
  }
};
