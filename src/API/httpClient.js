import axios from 'axios';
import { history } from '../App';

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(undefined, (error) => {
  const { status, headers } = error.response;

  if (status === 500) {
    history.push('/server/error');
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
  list: (filters) => requests.get(`/categories?${filters}`),
};

const producers = {
  list: (filters) => requests.get(`/producers?${filters}`),
};

const comments = {
  add: (body) => requests.post('/comments', body),
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
  loginFacebook: (body) => requests.post('/auth/register/facebook', body),
  loginGoogle: (body) => requests.post('/auth/register/google', body),
  current: () => requests.get('/auth/login/current'),
  register: (body) => requests.post('/auth/register/customer', body),
  updateData: (body) => requests.put('/auth/update/data', body),
};

const orders = {
  create: (body) => requests.post('/orders', body),
  getLastForUser: (id) => requests.get(`/orders/last/for/user/${id}`),
  setPaid: (id) => requests.patch(`/orders/${id}/paid`),
  getForUser: (id) => requests.get(`/orders/user/${id}`),
};

const checkout = {
  validateSession: (id) => requests.get(`/checkout/session/${id}`),
};

const contactRequests = {
  send: (body) => requests.post('/contact/requests/send', body),
};

export default {
  auth,
  products,
  categories,
  producers,
  comments,
  paymentMethods,
  deliveryMethods,
  orders,
  contactRequests,
  checkout,
};
