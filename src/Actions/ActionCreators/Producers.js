import httpClient from '../../API/httpClient';
import { SET_PRODUCERS } from '../ActionTypes/Producers';
import qs from 'query-string';

const setProducers = (data) => ({
  type: SET_PRODUCERS,
  payload: {
    producers: data,
  },
});

export const fetchProducers = () => async (dispatch, getState) => {
  try {
    const currentState = getState();
    const filter = currentState.products.filterForDisplayedProducts;
    let queryString = qs.stringify(filter, {
      skipNull: true,
      encode: false,
    });
    const producers = await httpClient.producers.list(queryString);
    if (producers.status === 200) {
      return dispatch(setProducers(producers.data));
    }
  } catch (e) {
    console.log(e);
  }
};
