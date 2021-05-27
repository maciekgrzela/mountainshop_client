import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(undefined, (error) => {
  const { status, headers } = error.response;

  switch (status) {
    case 401:
      if (
        headers['www-authenticate'] !== undefined &&
        headers['www-authenticate'].includes('The token expired') === true
      ) {
        history.push('/expired');
        toast.info('Sesja wygasła. Wprowadź ponownie dane uwierzytelniające');
      }
      break;
    case 404:
      history.push('/notfound');
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

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

export default {};
