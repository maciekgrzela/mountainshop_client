import httpClient from '../../API/httpClient';
import { FETCH_PRODUCERS } from '../ActionTypes/Producers';
import qs from 'query-string';

const fetchProducers = (data) => ({
  type: FETCH_PRODUCERS,
  payload: {
    producers: data,
  },
});

export const fetchProducersSlice = async (dispatch, getState) => {
  try {
    const currentState = getState();
    const filter = currentState.products.filterForDisplayedProducts;
    let queryString = qs.stringify(filter, {
      skipNull: true,
      encode: false,
    });
    const producers = await httpClient.producers.list(queryString);
    if (producers.status === 200) {
      return dispatch(fetchProducers(producers.data));
    }
  } catch (e) {
    console.log(e);
  }
};
