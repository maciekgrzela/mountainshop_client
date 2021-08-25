import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(undefined, (error) => {
  const { status, headers } = error.response;

  switch (status) {
    case 401:
      if (
        headers['www-authenticate'] !== undefined &&
        headers['www-authenticate'].includes('The token expired') === true
      ) {
        // history.push('/expired');
        toast.info('Sesja wygasła. Wprowadź ponownie dane uwierzytelniające');
      }
      break;
    case 404:
      // history.push('/notfound');
      break;
    case 500:
      toast.error(
        'Wystąpił błąd po stronie serwera. Skontaktuj się z administratorem systemu'
      );
      break;
  }

  throw error;
});

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem(`jwt`);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = (response) => ({
  data: response.data,
  status: response.status,
  headers: response.headers,
});

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  patch: (url) => axios.patch(url).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const products = {
  list: (filters) => requests.get(`/products?${filters}`),
  listOne: (id) => requests.get(`/products/${id}`),
  listComments: (id) => requests.get(`/products/${id}/comments`),
  listProperties: (id) => requests.get(`/products/${id}/properties`),
};

const categories = {
  list: () => requests.get('/categories'),
};

const producers = {
  list: (filters) => requests.get(`/producers?${filters}`),
};

const comments = {
  like: (id) => requests.patch(`/comments/${id}/like`),
  removeLike: (id) => requests.patch(`/comments/${id}/like/cancel`),
  dislike: (id) => requests.patch(`/comments/${id}/dislike`),
  removeDislike: (id) => requests.patch(`/comments/${id}/dislike/cancel`),
};

const paymentMethods = {
  list: () => requests.get('/payment'),
};

const deliveryMethods = {
  list: () => requests.get('/delivery'),
};

const auth = {
  login: (body) => requests.post('/auth/login', body),
};

export default {
  auth,
  products,
  categories,
  producers,
  comments,
  paymentMethods,
  deliveryMethods,
};
