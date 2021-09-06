import {
  SET_PRODUCERS,
  SET_PRODUCERS_FILTER_PROP,
  SET_PRODUCERS_FILTER_PROPS,
} from '../Actions/ActionTypes/Producers';
import { initialProducersState } from '../State/state';

export const producersReducer = (state = initialProducersState, action) => {
  switch (action.type) {
    case SET_PRODUCERS:
      return {
        ...state,
        producers: action.payload.producers,
      };
    case SET_PRODUCERS_FILTER_PROP:
      return {
        ...state,
        filterForProducers: {
          ...state.filterForProducers,
          [action.payload.propertyName]: action.payload.propertyValue,
        },
      };
    case SET_PRODUCERS_FILTER_PROPS:
      return {
        ...state,
        filterForProducers: {
          ...state.filterForProducers,
          ...action.payload.properties,
        },
      };
    default:
      return state;
  }
};
