import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store/store';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';

moment.locale('pl');

Moment.globalMoment = moment;
Moment.globalLocale = 'pl';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
