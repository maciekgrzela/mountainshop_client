import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store/store';
import { Router } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';
import { createBrowserHistory } from 'history';

moment.locale('pl');

Moment.globalMoment = moment;
Moment.globalLocale = 'pl';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
