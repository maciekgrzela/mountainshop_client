import httpClient from '../../API/httpClient';
import { SET_PRODUCERS } from '../ActionTypes/Producers';
import qs from 'query-string';
import { setCollectionLoading } from './Interface';

const setProducers = (data) => ({
  type: SET_PRODUCERS,
  payload: {
    producers: data,
  },
});

export const fetchProducers = () => async (dispatch, getState) => {
  try {
    dispatch(setCollectionLoading(true));
    const currentState = getState();
    const filter = currentState.products.filterForDisplayedProducts;
    let queryString = qs.stringify(filter, {
      skipNull: true,
      encode: false,
    });
    const producers = await httpClient.producers.list(queryString);
    if (producers.status === 200) {
      dispatch(setProducers(producers.data));
    }
    dispatch(setCollectionLoading(false));
  } catch (e) {
    dispatch(setCollectionLoading(false));
  }
};
